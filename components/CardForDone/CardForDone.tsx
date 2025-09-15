import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ICardForDone from './types';

const CardForDone = ({ title, subTitle }: ICardForDone) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#f4f0f0',
    borderRadius: 30,
    margin: 10,
    shadowColor: '#000', // for IOS
    shadowOffset: { width: 0, height: 2 }, // for IOS
    shadowOpacity: 0.1, // for IOS
    shadowRadius: 4, // for IOS
    elevation: 3, // For Android shadow
  },

  cardContent: {
    padding: 15,
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: 800,
    marginHorizontal: '5%',
  },

  cardSubtitle: {
    fontSize: 14,
    marginHorizontal: '5%',
    color: '#666',
  },
});

export default CardForDone;
