import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ICardForPreview from './types';

const CardForPreview = ({ title, subTitle, linkTitle }: ICardForPreview) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subTitle}</Text>
      <Pressable>
        <Text style={styles.cardLink}>{linkTitle}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#f4f0f0',
    borderRadius: 30,
    marginTop: 10,
    padding: 15,
    shadowColor: '#000', // for IOS
    shadowOffset: { width: 0, height: 2 }, // for IOS
    shadowOpacity: 0.1, // for IOS
    shadowRadius: 4, // for IOS
    elevation: 3, // For Android shadow
  },

  cardTitle: {
    paddingTop: 20,
    fontSize: 24,
    fontWeight: 800,
    marginHorizontal: '5%',
  },

  cardSubtitle: {
    paddingTop: 20,
    fontSize: 14,
    marginHorizontal: '5%',
    color: '#666',
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

export default CardForPreview;
