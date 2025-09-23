import { configureStore } from '@reduxjs/toolkit';
import { homeReducer } from './home/slice';
import { dictionaryReducer } from './dictionary/slice';
import { wordReducer } from './word/slice';
import { statisticReducer } from './statistic/slice';
import { profileReducer } from './profile/slice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    dictionary: dictionaryReducer,
    word: wordReducer,
    statistic: statisticReducer,
    profile: profileReducer,
  },
});
