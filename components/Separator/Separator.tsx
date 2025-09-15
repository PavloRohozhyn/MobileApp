import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = () => {
  return <View style={styles.lineStyle} />;
};

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.3,
    borderColor: '#cac4d0',
    marginTop: 10,
  },
});

export default Separator;
