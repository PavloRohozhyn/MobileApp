import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from './../redux/home/selectors';
import { getHomeData } from './../redux/home/operations';
import { View, Text, StyleSheet } from 'react-native';
import CardForPreview from '../components/CardForPreview/CardForPreview';

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);
  const result = useSelector(selectData);
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
