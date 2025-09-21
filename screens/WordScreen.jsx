import React, { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { wordList } from './../redux/word/operations';
import {
  selectSelectedDictionaryId,
  selectAllWord,
} from './../redux/word/selectors';

import CardTitle from '../components/CardTitle/CardTitle';
import Separator from '../components/Separator/Separator';
import CardListItem from '../components/CardListItem/CardListItem';

const WordScreen = ({ navigation }) => {
  // Get dictionary id
  const dictId = useSelector(selectSelectedDictionaryId);
  // get all words (function runs in redux)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(wordList(dictId));
  }, [dispatch]);
  // get functions result from redux
  const words = useSelector(selectAllWord);

  const pressHandler1 = () => {
    navigation.navigate('TaskOneScreen');
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
