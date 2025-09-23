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
    selectedDictionaryName: null,
    error: null,
  },
  reducers: {
    setSelectedDictionaryId: (state, action) => {
      // console.log('state', state.data[0]);
      state.selectedDictionaryId = action.payload;
    },
    setSelectedDictionaryName: (state, action) => {
      // console.log('payload', action.payload);
      const res = state.data.find(el => el.id === action.payload);
      // console.log('func', res);
      state.selectedDictionaryName = res.title;
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

export const { setSelectedDictionaryId, setSelectedDictionaryName } =
  dictionarySlice.actions;
export const dictionaryReducer = dictionarySlice.reducer;
