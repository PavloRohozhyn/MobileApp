import { configureStore } from '@reduxjs/toolkit';
import { homeReducer } from './home/slice';
import { dictionaryReducer } from './dictionary/slice';
import { wordReducer } from './word/slice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    dictionary: dictionaryReducer,
    word: wordReducer,
  },
});
