import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import ICardListItemSwitch from './types';

const CardListItemSwitch = React.memo(
  ({ title, data }: ICardListItemSwitch) => {
    const [isEnabled, setIsEnabled] = useState(data);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Switch
          style={styles.data}
          trackColor={{ false: '#6750a4', true: '#f4f3f4' }}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fef7ff',
    marginTop: 10,
    padding: 15,
    shadowColor: '#000', // for IOS
    shadowOffset: { width: 0, height: 2 }, // for IOS
    shadowOpacity: 0.1, // for IOS
    shadowRadius: 4, // for IOS
    elevation: 3, // For Android shadow
  },

  title: {
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.01,
  },

  data: {
    marginLeft: 'auto',
  },
});

export default CardListItemSwitch;
