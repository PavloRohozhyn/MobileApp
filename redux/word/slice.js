import { createSlice } from '@reduxjs/toolkit';
import { wordList } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const wordSlice = createSlice({
  name: 'word',
  initialState: {
    data: [],
    words: [],
    index: 0,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(wordList.pending, handlePending)
      .addCase(wordList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(wordList.rejected, handleRejected);
  },
});

export const wordReducer = wordSlice.reducer;
