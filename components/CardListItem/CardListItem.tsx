import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ICardListItem from './types';

const CardListItem = React.memo(({ title, subTitle }: ICardListItem) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fef7ff',
    borderRadius: 20,
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
    fontWeight: 500,
    letterSpacing: 0.03,
    color: '#1d1b20',
    textTransform: 'capitalize',
  },

  subTitle: {
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0.02,
    color: '#49454f',
    textTransform: 'capitalize',
  },
});

export default CardListItem;
