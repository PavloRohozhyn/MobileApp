import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = () => {
  return <View style={styles.lineStyle} />;
};

const styles = StyleSheet.create({
  lineStyle: {
    marginTop: 10,
    borderWidth: 0.9,
    borderColor: '#cac4d0',
  },
});

export default Separator;
