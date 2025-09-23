import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './../../services/api';

/**
 * Data for Statistic Screen
 */
export const getStatisticData = createAsyncThunk(
  'statistic/data',
  async (_, thunkAPI) => {
    try {
      const res = await api.get('/statistic.json');
      console.log(res.data.data);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
