import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllWord } from './../redux/word/selectors';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import CardTitle from '../components/CardTitle/CardTitle';
import CardListItemBtn from '../components/CardListItemBtn/CardListItemBtn';

const TaskOneScreen = ({ navigation }) => {
  const data = useSelector(selectAllWord);
  const words = data && data.map(a => ({ ...a }));
  const pressHandler = () => {
    navigation.navigate('TaskTwoScreen');
  };

  return (
    <View style={styles.screenContainer}>
      <CardTitle
        title={words && words.length > 0 ? words[0].word : 'Red'}
        position={true}
      />
      <Pressable onPress={pressHandler}>
        <Text style={styles.cardLink}>Наступне Тренування</Text>
      </Pressable>
      {words && words.length > 0 ? (
        words.map((el, idx) => <CardListItemBtn key={idx} title={el.trans} />)
      ) : (
        <Text style={styles.noData}>Нажаль немає слів</Text>
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
