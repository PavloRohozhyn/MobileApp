import { createSlice } from '@reduxjs/toolkit';
import { getProfileData } from './operations';

/**
 * Handle rejected
 * @param {*} state
 * @param {*} action
 */
const handleRejected = (state, action) => {
  state.error = action.payload;
};

/**
 * Profile Slice
 */
const profileSlice = createSlice({
  name: 'Profile',
  initialState: {
    data: [],
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getProfileData.fulfilled, (state, action) => {
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getProfileData.rejected, handleRejected);
  },
});

export const profileReducer = profileSlice.reducer;
