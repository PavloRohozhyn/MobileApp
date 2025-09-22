import { createSlice } from '@reduxjs/toolkit';
import { wordList } from './operations';

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const wordSlice = createSlice({
  name: 'word',
  initialState: {
    data: [],
    words: [],
    index: 0,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(wordList.fulfilled, (state, action) => {
        state.error = null;
        state.data = action.payload;
      })
      .addCase(wordList.rejected, handleRejected);
  },
});

export const wordReducer = wordSlice.reducer;
