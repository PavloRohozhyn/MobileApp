import { createSlice } from '@reduxjs/toolkit';
import { dictionaryList } from './operations';

/**
 * Handle rejected
 * @param {*} state
 * @param {*} action
 */
const handleRejected = (state, action) => {
  state.error = action.payload;
};

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState: {
    data: [],
    selectedDictionaryId: null,
    error: null,
  },
  reducers: {
    setSelectedDictionaryId: (state, action) => {
      state.selectedDictionaryId = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(dictionaryList.fulfilled, (state, action) => {
        state.error = null;
        state.data = action.payload;
      })
      .addCase(dictionaryList.rejected, handleRejected);
  },
});

export const { setSelectedDictionaryId } = dictionarySlice.actions;
export const dictionaryReducer = dictionarySlice.reducer;
