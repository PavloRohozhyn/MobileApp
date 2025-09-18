import { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import CardTitle from '../components/CardTitle/CardTitle';
import Separator from '../components/Separator/Separator';
import CardListItemIcon from '../components/CardListItemIcon/CardListItemIcon';

import { getListOfDictionaries } from '../services/api';

const DictionaryScreen = ({ navigation }) => {
  const [dict, setDict] = useState([]);

  // get list of dictionare
  useEffect(() => {
    const fetchDict = async () => {
      try {
        const { data } = await getListOfDictionaries();
        setDict(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchDict();
  }, []);

  // navigation handler
  const pressHandler = dictId => {
    if (!dictId) {
      return false;
    }
    navigation.navigate('Word', { dictId: `${dictId}` });
  };

  return (
    <View style={styles.screenContainer}>
      <CardTitle title="Словники" />
      <Separator />
      {dict && dict.length > 0 ? (
        dict.map((el, idx) => (
          <Pressable key={idx} onPress={pressHandler(el.id)}>
            <CardListItemIcon title={el.title} />
          </Pressable>
        ))
      ) : (
        <Text style={styles.noData}>Нажаль немає словників</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 100,
    gap: 20,
    paddingHorizontal: '5%',
  },
  noData: {
    textAlign: 'center',
  },
});

export default DictionaryScreen;
