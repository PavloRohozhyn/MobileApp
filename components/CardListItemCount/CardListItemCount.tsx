import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ICardListItemIcon from './types';

const CardListItemIcon = ({ title, count }: ICardListItemIcon) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fef7ff',
    marginTop: 10,
    padding: 15,
    shadowColor: '#000', // for IOS
    shadowOffset: { width: 0, height: 2 }, // for IOS
    shadowOpacity: 0.1, // for IOS
    shadowRadius: 4, // for IOS
    elevation: 3, // For Android shadow
  },

  title: {
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.01,
  },

  count: {
    fontSize: 11,
    fontWeight: 400,
    marginLeft: 'auto',
  },
});

export default CardListItemIcon;
