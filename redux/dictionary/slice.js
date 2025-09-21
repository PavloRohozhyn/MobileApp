import { createSlice } from '@reduxjs/toolkit';
import { dictionaryList } from './operations';

/**
 * Handle panding
 * @param {*} state
 */
const handlePending = state => {
  state.isLoading = true;
};

/**
 * Handle rejected
 * @param {*} state
 * @param {*} action
 */
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState: {
    data: [],
    selectedDictionaryId: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setSelectedDictionaryId: (state, action) => {
      state.selectedDictionaryId = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(dictionaryList.pending, handlePending)
      .addCase(dictionaryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(dictionaryList.rejected, handleRejected);
  },
});

export const { setSelectedDictionaryId } = dictionarySlice.actions;
export const dictionaryReducer = dictionarySlice.reducer;
