import React from 'react';
import { View, Pressable, Text, Alert, StyleSheet } from 'react-native';
import ICardListItemBtn from './types';

const CardListItemBtn = ({ title }: ICardListItemBtn) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => Alert.alert('pressed')}
        style={({ pressed }) => [
          styles.customButton,
          pressed ? styles.customButtonPressed : {},
        ]}
      >
        <Text style={styles.customButtonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  customButton: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  customButtonPressed: {
    backgroundColor: '#d2d4d6ff', // color when pressed
  },
  customButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default CardListItemBtn;
