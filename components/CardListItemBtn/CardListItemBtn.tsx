import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { indexIncrement, shuffle } from './../../redux/word/slice';
import { selectIndex, selectWords } from './../../redux/word/selectors';
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

const CardListItemBtn = React.memo(({ title, step }: ICardListItemBtn) => {
  const [correct, setCorrect] = useState(0);
  const dispatch = useDispatch();
  const index = useSelector(selectIndex); // just for check
  const words = useSelector(selectWords); // just for check

  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

    // check step
    let flag = false;
    if (step === 1 && words[index].trans == title) {
      // En -> Ukr
      flag = true;
    } else if (step === 2 && words[index].word == title) {
      // Ukr -> En
      flag = true;
    } else {
    }

    if (flag) {
      setCorrect(1); // green
      dispatch(indexIncrement()); // next word
      dispatch(shuffle());
    } else {
      setCorrect(2); // red
    }
    setTimeout(() => {
      setCorrect(0); // reset to default (white)
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
});

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
