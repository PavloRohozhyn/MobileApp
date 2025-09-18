import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import CardTitle from '../components/CardTitle/CardTitle';
import Separator from '../components/Separator/Separator';
import CardListItem from '../components/CardListItem/CardListItem';
import { getListOfWordsByDictId } from '../services/api';

const WordScreen = ({ navigation }) => {
  const [words, setWords] = useState([]);

  // get list of dictionare
  useEffect(dictId => {
    const fetchWords = async dictId => {
      try {
        const { data } = await getListOfWordsByDictId(dictId);
        setWords(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchWords(dictId);
  }, []);

  const pressHandler = () => {
    navigation.navigate('TaskOneScreen');
  };

  return (
    <View style={styles.screenContainer}>
      <CardTitle title="Colors" position={false} />
      <Separator />
      <Pressable onPress={pressHandler}>
        <Text style={styles.cardLink}>Тренувати</Text>
      </Pressable>

      {words && words.length > 0 ? (
        words.map((el, idx) => (
          <CardListItem title={el.title} subTitle={el.subTitle} />
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
