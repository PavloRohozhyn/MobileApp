import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import CardTitle from '../components/CardTitle/CardTitle';
import Separator from '../components/Separator/Separator';
import CardListItem from '../components/CardListItem/CardListItem';
import { getListOfWordsByDictId } from '../services/api';

const WordScreen = ({ route, navigation }) => {
  const [words, setWords] = useState([]);

  // get list of dictionare
  useEffect(dictId => {
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

  const pressHandler1 = () => {
    const { dictId } = route.params;
    navigation.navigate('TaskOneScreen', { dictId: `${dictId}` });
  };

  return (
    <View style={styles.screenContainer}>
      <CardTitle title="Colors" position={false} />
      <Separator />
      <Pressable onPress={pressHandler1}>
        <Text style={styles.cardLink}>Тренувати</Text>
      </Pressable>

      {words && words.length > 0 ? (
        words.map((el, idx) => (
          <CardListItem key={idx} title={el.word} subTitle={el.trans} />
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
  cardLink: {
    paddingTop: 20,
    paddingBottom: 10,
    marginHorizontal: '5%',
    color: '#917F43',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default WordScreen;
