import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dictionaryList } from './../redux/dictionary/operations';
import {
  setSelectedDictionaryId,
  setSelectedDictionaryName,
} from './../redux/dictionary/slice';
import { View, Pressable, StyleSheet } from 'react-native';
import { selectAllDictionary } from './../redux/dictionary/selectors';
import CardTitle from '../components/CardTitle/CardTitle';
import Separator from '../components/Separator/Separator';
import CardListItemIcon from '../components/CardListItemIcon/CardListItemIcon';
import NotFound from '../components/NotFound/NotFound';

const DictionaryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dictionaryList());
  }, [dispatch]);

  function handleDictionaryClick(dictId) {
    dispatch(setSelectedDictionaryId(dictId));
    dispatch(setSelectedDictionaryName(dictId));
    navigation.navigate('Word');
  }

  const dict = useSelector(selectAllDictionary);

  return (
    <View style={styles.screenContainer}>
      <CardTitle title="Словники" />
      <Separator />
      {dict && dict.length > 0 ? (
        dict.map((el, idx) => (
          <Pressable key={idx} onPress={() => handleDictionaryClick(el.id)}>
            <CardListItemIcon title={el.title} />
          </Pressable>
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

export default DictionaryScreen;
