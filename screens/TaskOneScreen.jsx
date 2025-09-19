import { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import CardTitle from '../components/CardTitle/CardTitle';
import CardListItemBtn from '../components/CardListItemBtn/CardListItemBtn';

import { getListOfWordsByDictId } from '../services/api';

const TaskOneScreen = ({ route, navigation }) => {
  const [words, setWords] = useState();

  // get list of dictionare
  useEffect(() => {
    const fetchWords = async () => {
      try {
        const { dictId } = route.params;
        const result = await getListOfWordsByDictId(dictId);
        // console.log(result);
        setWords(result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchWords();
  }, []);

  const pressHandler = () => {
    const { dictId } = route.params;
    navigation.navigate('TaskTwoScreen', { dictId: `${dictId}` });
  };

  return (
    <View style={styles.screenContainer}>
      <CardTitle title="Red" position={true} />
      <Pressable onPress={pressHandler}>
        <Text style={styles.cardLink}>Наступне Тренування</Text>
      </Pressable>
      <CardListItemBtn title="Червоний" />
      <CardListItemBtn title="Зелений" />
      <CardListItemBtn title="Синій" />
      <CardListItemBtn title="Чорний" />
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
  cardLink: {
    paddingTop: 20,
    paddingBottom: 10,
    marginHorizontal: '5%',
    color: '#917F43',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default TaskOneScreen;
