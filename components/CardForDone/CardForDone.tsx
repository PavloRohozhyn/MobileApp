import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ICardForDone from './types';

const CardForDone = ({ title, subTitle }: ICardForDone) => {
  return (
    
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f0f0',
    borderRadius: 30,
    marginBottom: 100,
    marginTop: 10,
    padding: 15,
    gap: 20,
    alignItems: 'center',
    shadowColor: '#000', // for IOS
    shadowOffset: { width: 0, height: 2 }, // for IOS
    shadowOpacity: 0.1, // for IOS
    shadowRadius: 4, // for IOS
    elevation: 3, // For Android shadow
  },

  title: {
    fontSize: 24,
    fontWeight: 400,
    marginHorizontal: '5%',
    color: '#1d1b20',
  },

  subTitle: {
    fontSize: 14,
    fontWeight: 400,
    marginHorizontal: '5%',
    color: '#49454f',
  },
});

export default CardForDone;
