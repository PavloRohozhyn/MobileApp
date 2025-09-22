import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProfileData } from './../redux/profile/selectors';
import { getProfileData } from './../redux/profile/operations';
import { View, StyleSheet } from 'react-native';
import CardTitle from '../components/CardTitle/CardTitle';
import Separator from '../components/Separator/Separator';
import CardListItemSwitch from '../components/CardListItemSwitch/CardListItemSwitch';
import NotFound from '../components/NotFound/NotFound';

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileData());
  }, [dispatch]);
  const result = useSelector(selectProfileData);
  return (
    <View style={styles.screenContainer}>
      <CardTitle title="Профіль" />
      <Separator />
      {result && result.length > 0 ? (
        result.map((el, i) => (
          <View key={i}>
            <CardListItemSwitch title={el.title} data={el.data} />
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

export default ProfileScreen;
