import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import CardTitle from '../components/CardTitle/CardTitle';
import Separator from '../components/Separator/Separator';
import CardListItem from '../components/CardListItem/CardListItem';

const WordScreen = ({ navigation }) => {
  const pressHandler = () => {
    if (false) {
      return;
    }
    navigation.navigate('TaskOneScreen');
  };

  return (
    <View style={styles.screenContainer}>
      <CardTitle title="Colors" position={false} />
      <Separator />
      <Pressable onPress={pressHandler}>
        <Text style={styles.cardLink}>Тренувати</Text>
      </Pressable>
      <CardListItem title="Red" subTitle="Червоний" />
      <CardListItem title="Black" subTitle="Чорний" />
      <CardListItem title="Green" subTitle="Зелений" />
      <CardListItem title="Blue" subTitle="Синій" />
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
