import { useSelector } from 'react-redux';
import { selectAllWord } from './../redux/word/selectors';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import CardTitle from '../components/CardTitle/CardTitle';
import CardListItemBtn from '../components/CardListItemBtn/CardListItemBtn';

const TaskTwoScreen = ({ navigation }) => {
  const words = useSelector(selectAllWord);

  const pressHandler = () => {
    navigation.navigate('TaskDoneScreen');
  };

  return (
    <View style={styles.screenContainer}>
      <CardTitle title="Червоний" position={true} />
      <Pressable onPress={pressHandler}>
        <Text style={styles.cardLink}>Наступне Тренування</Text>
      </Pressable>

      {words && words.length > 0 ? (
        words.map((el, idx) => <CardListItemBtn key={idx} title={el.word} />)
      ) : (
        <Text style={styles.noData}>Нажаль немає слів</Text>
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
  cardLink: {
    paddingTop: 20,
    paddingBottom: 10,
    marginHorizontal: '5%',
    color: '#917F43',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default TaskTwoScreen;
