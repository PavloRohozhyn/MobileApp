import { View, Text, Pressable, StyleSheet } from 'react-native';

import CardForDone from '../components/CardForDone/CardForDone';

const DoneScreen = ({ navigation }) => {
  const pressHandler = () => {
    if (false) {
      return;
    }
    navigation.navigate('Dictionary');
  };

  return (
    <View style={styles.container1}>
      <CardForDone title="Вітаємо" subTitle="Ви завершили тренування" />
      <Pressable onPress={pressHandler}>
        <Text style={styles.cardLink}>До Словників</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  cardLink: {
    paddingTop: 60,
    paddingBottom: 10,
    marginHorizontal: '5%',
    color: '#917F43',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default DoneScreen;
