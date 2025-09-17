import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardTitle from '../components/CardTitle/CardTitle';
import Separator from '../components/Separator/Separator';
import CardListItemCount from '../components/CardListItemCount/CardListItemCount';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <CardTitle title="Статистика" />
      <Separator />
      <CardListItemCount title="Нових Слів" count="0" />
      <CardListItemCount title="Вивчено" count="0" />
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
});

export default HomeScreen;
