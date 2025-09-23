import React from 'react';
import { Text, StyleSheet } from 'react-native';

const NotFound = () => {
  return <Text style={styles.noData}>Нажаль технічні негаразди</Text>;
};

const styles = StyleSheet.create({
  noData: {
    textAlign: 'center',
  },
});

export default NotFound;
