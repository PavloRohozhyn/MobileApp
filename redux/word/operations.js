import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

/**
 * List of word
 */
export const wordList = createAsyncThunk(
  'word/list',
  async (dictId, thunkAPI) => {
    try {
      const words = await api.get('/words-by-dictionary-id.json');
      let res = [];
      console.log('dictionary', dictId);
      console.log('words', words.data);
      if (words.data.data && words.data.data.length > 0) {
        console.log('words after', words.data.data);
        res = words.data.data.filter(el => el.dict_id == dictId);
        console.log('word result', res);
        return res;
      }
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
