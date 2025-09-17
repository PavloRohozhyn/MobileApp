import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import CardForPreview from '../components/CardForPreview/CardForPreview';
import data from '../data/data.json';

const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (data && data.main) {
      setItems(data.main); // Set the imported JSON data to state
    }
  }, []);

  return (
    <View style={styles.container}>
      {items &&
        items.map((el, i) => (
          <View key={i}>
            <CardForPreview
              title={el.title}
              subTitle={el.subtitle}
              linkTitle={el.link}
              screenTitle={el.screenTitle}
            />
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: '5%',
  },
});

export default HomeScreen;
