import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { dictionaryList } from './../redux/dictionary/operations';
import { setSelectedDictionaryId } from './../redux/dictionary/slice';

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectAllDictionary } from './../redux/dictionary/selectors';

import CardTitle from '../components/CardTitle/CardTitle';
import Separator from '../components/Separator/Separator';
import CardListItemIcon from '../components/CardListItemIcon/CardListItemIcon';

const DictionaryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dictionaryList());
  }, [dispatch]);

  function handleDictionaryClick(dictId) {
    dispatch(setSelectedDictionaryId(dictId));
    navigation.navigate('Word');
  }

  const dict = useSelector(selectAllDictionary);

  return (
    <View style={styles.screenContainer}>
      <CardTitle title="Словники" />
      <Separator />
      {dict && dict.length > 0 ? (
        dict.map((el, idx) => (
          <Pressable key={idx} onPress={() => handleDictionaryClick(el.id)}>
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
