import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './../../services/api';

/**
 * List of dictionary
 */
export const dictionaryList = createAsyncThunk(
  'dict/list',
  async (_, thunkAPI) => {
    try {
      const res = await api.get('/dictionaries-list.json');
      // console.log('operation', res.data.data);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
