import { createSlice } from '@reduxjs/toolkit';
import { getStatisticData } from './operations';

/**
 * Handle rejected
 * @param {*} state
 * @param {*} action
 */
const handleRejected = (state, action) => {
  state.error = action.payload;
};

/**
 * Statistic Slice
 */
const statisticSlice = createSlice({
  name: 'statistic',
  initialState: {
    data: [],
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getStatisticData.fulfilled, (state, action) => {
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getStatisticData.rejected, handleRejected);
  },
});

export const statisticReducer = statisticSlice.reducer;
