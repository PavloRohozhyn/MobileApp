import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatisticData } from './../redux/statistic/selectors';
import { getStatisticData } from './../redux/statistic/operations';
import { View, StyleSheet } from 'react-native';
import CardTitle from './../components/CardTitle/CardTitle';
import Separator from './../components/Separator/Separator';
import CardListItemCount from './../components/CardListItemCount/CardListItemCount';
import NotFound from './../components/NotFound/NotFound';

const StatisticScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStatisticData());
  }, [dispatch]);
  const result = useSelector(selectStatisticData);
  return (
    <View style={styles.screenContainer}>
      <CardTitle title="Статистика" />
      <Separator />
      {result && result.length > 0 ? (
        result.map((el, i) => (
          <View key={i}>
            <CardListItemCount title={el.title} count={el.count} />
          </View>
        ))
      ) : (
        <NotFound />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 100,
    gap: 20,
    paddingHorizontal: '5%',
  },
});

export default StatisticScreen;
