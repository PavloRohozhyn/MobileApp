import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectWords,
  selectShuffleWords,
  selectIndex,
} from './../redux/word/selectors';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import CardTitle from '../components/CardTitle/CardTitle';
import CardListItemBtn from '../components/CardListItemBtn/CardListItemBtn';
import NotFound from '../components/NotFound/NotFound';

const TaskOneScreen = ({ navigation }) => {
  const index = useSelector(selectIndex);
  const words = useSelector(selectWords);
  const shuffleWords = useSelector(selectShuffleWords);

  const pressHandler = () => {
    navigation.navigate('TaskTwoScreen');
  };

  return (
    <View style={styles.screenContainer}>
      <CardTitle
        title={
          words && words.length > 0
            ? words[index].word
            : 'Тут може бути ваша реклама'
        }
        position={true}
      />
      <Pressable onPress={pressHandler}>
        <Text style={styles.cardLink}>Наступне Тренування</Text>
      </Pressable>
      {shuffleWords && shuffleWords.length > 0 ? (
        shuffleWords.map((el, idx) => (
          <CardListItemBtn key={idx} title={el.trans} step={1} />
        ))
      ) : (
        <NotFound />
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

export default TaskOneScreen;
