import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ICardTitle from './types';

const CardTitle = ({ title, position }: ICardTitle) => {
  const getTextStyles = () => {
    return {
      textAlign: position ? 'center' : 'left',
      fontSize: 24,
      fontWeight: 800,
    };
  };

  return (
    <View style={styles.container}>
      <Text style={getTextStyles()}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f0f0',
    borderRadius: 20,
    marginTop: 10,
    padding: 15,
    shadowColor: '#000', // for IOS
    shadowOffset: { width: 0, height: 2 }, // for IOS
    shadowOpacity: 0.1, // for IOS
    shadowRadius: 4, // for IOS
    elevation: 3, // For Android shadow
  },
});

export default CardTitle;
