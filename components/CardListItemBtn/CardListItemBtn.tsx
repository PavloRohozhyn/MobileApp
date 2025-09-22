import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIndex, selectAllWord } from './../../redux/word/selectors';
import {
  UIManager,
  Platform,
  TouchableOpacity,
  LayoutAnimation,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ICardListItemBtn from './types';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CardListItemBtn = ({ title }: ICardListItemBtn) => {
  const [correct, setCorrect] = useState(0);
  const index = useSelector(selectIndex);
  const allWords = useSelector(selectAllWord);

  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    // console.log('component', title);
    // console.log('component', allWords);
    if (allWords[index].trans == title) {
      setCorrect(1);
    } else {
      setCorrect(2);
    }
    setTimeout(() => {
      setCorrect(0); // reset to default
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
        <View
          style={[
            styles.button,
            correct === 1
              ? styles.buttonPass
              : correct === 2
              ? styles.buttonFeil
              : styles.button,
          ]}
        >
          <Text
            style={[
              styles.textBefore,
              correct === 1 || correct === 2
                ? styles.textAfter
                : styles.textBefore,
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  buttonPass: {
    backgroundColor: '#00b894',
    paddingHorizontal: 45,
    paddingVertical: 20,
  },
  buttonFeil: {
    backgroundColor: '#ff6961',
    paddingHorizontal: 45,
    paddingVertical: 20,
  },
  textBefore: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
  },
  textAfter: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  },
});

export default CardListItemBtn;
