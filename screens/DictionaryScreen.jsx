import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import CardTitle from '../components/CardTitle/CardTitle';
import Separator from '../components/Separator/Separator';
import CardListItemIcon from '../components/CardListItemIcon/CardListItemIcon';

const HomeScreen = ({ navigation }) => {
  const pressHandler = () => {
    if (false) {
      return;
    }
    navigation.navigate('Word');
  };

  return (
    <View style={styles.screenContainer}>
      <CardTitle title="Словники" />
      <Separator />
      <Pressable onPress={pressHandler}>
        <CardListItemIcon title="Colors" />
      </Pressable>
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
