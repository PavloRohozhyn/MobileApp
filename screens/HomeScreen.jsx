import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardForPreview from '../components/CardForPreview/CardForPreview';
import { getDataForMainScreen } from '../services/api.ts';

const HomeScreen = () => {
  const [result, setResult] = useState([]);

  // get list of dictionare
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const { data } = await getDataForMainScreen();
        setResult(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchHomeData();
  }, []);

  return (
    <View style={styles.container}>
      {result && result.length > 0 ? (
        result.map((el, i) => (
          <View key={i}>
            <CardForPreview
              title={el.title}
              subTitle={el.subtitle}
              linkTitle={el.link}
              screenTitle={el.screenTitle}
            />
          </View>
        ))
      ) : (
        <Text style={styles.noData}>Нажаль технічні негаразди</Text>
      )}
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
  noData: {
    textAlign: 'center',
  },
});

export default HomeScreen;
