import { createSlice } from '@reduxjs/toolkit';
import { getHomeData } from './operations';

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
  state.error = action.payload;
};

/**
 * Home Slice
 */
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    data: [],
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getHomeData.pending, handlePending)
      .addCase(getHomeData.fulfilled, (state, action) => {
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getHomeData.rejected, handleRejected);
  },
});

export const homeReducer = homeSlice.reducer;
