import { createSlice } from '@reduxjs/toolkit';
import { wordList } from './operations';

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const wordSlice = createSlice({
  name: 'word',
  initialState: {
    words: [],
    shuffleWords: [],
    index: 0,
    error: null,
  },
  reducers: {
    indexIncrement: state => {
      if (state.words.length - 1 > state.index) {
        state.index += 1;
      } else {
        state.index = 0;
      }
    },
    shuffle: state => {
      let cIdx = state.shuffleWords.length;
      let rIdx;
      while (cIdx !== 0) {
        rIdx = Math.floor(Math.random() * cIdx);
        cIdx--;
        [state.shuffleWords[cIdx], state.shuffleWords[rIdx]] = [
          state.shuffleWords[rIdx],
          state.shuffleWords[cIdx],
        ];
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(wordList.fulfilled, (state, action) => {
        state.error = null;
        state.words = action.payload;
        state.shuffleWords = action.payload;
      })
      .addCase(wordList.rejected, handleRejected);
  },
});

export const { indexIncrement, shuffle } = wordSlice.actions;
export const wordReducer = wordSlice.reducer;
