import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './../../services/api';

/**
 * Data for Home Screen
 */
export const getHomeData = createAsyncThunk(
  'home/data',
  async (_, thunkAPI) => {
    try {
      const res = await api.get('/main-screen.json');
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
