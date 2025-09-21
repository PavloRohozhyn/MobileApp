import { configureStore } from "@reduxjs/toolkit";
import { dictionaryReducer } from "./dictionary/slice";
import { wordReducer } from "./word/slice";

export const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
    word: wordReducer,
  },
});