import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ICardTitle from './types';

const CardTitle = ({ title }: ICardTitle) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f0f0',
    borderRadius: 20,
    margin: 10,
    padding: 15,
    shadowColor: '#000', // for IOS
    shadowOffset: { width: 0, height: 2 }, // for IOS
    shadowOpacity: 0.1, // for IOS
    shadowRadius: 4, // for IOS
    elevation: 3, // For Android shadow
  },

  title: {
    fontSize: 24,
    fontWeight: 800,
    marginHorizontal: '2%',
  },
});

export default CardTitle;
