import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

/**
 * Data for Profile Screen
 */
export const getProfileData = createAsyncThunk(
  'profile/data',
  async (_, thunkAPI) => {
    try {
      const res = await api.get('/profile.json');
      // console.log('console', res.data.data);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
