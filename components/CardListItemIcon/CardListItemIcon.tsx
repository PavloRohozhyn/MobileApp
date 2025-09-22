import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ICardListItemIcon from './types';

const CardListItemIcon = React.memo(({ title }: ICardListItemIcon) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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

  icon: {
    width: 40,
    height: 40,
    backgroundColor: '#eaddff',
    borderRadius: '50%',
  },

  title: {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0.01,
    marginHorizontal: '5%',
  },
});

export default CardListItemIcon;
