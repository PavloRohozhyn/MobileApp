import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardTitle from '../components/CardTitle/CardTitle';
import Separator from '../components/Separator/Separator';
import CardListItemSwitch from '../components/CardListItemSwitch/CardListItemSwitch';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <CardTitle title="Профіль" />
      <Separator />
      <CardListItemSwitch title="Оновлювати Словники" data={false} />
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

export default ProfileScreen;
