import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getJackets } from '../../api-service';

/* eslint-disable no-param-reassign */
export const getJacketsArr = createAsyncThunk(
  'jackets/getJackets',
  async () => {
    const data = await getJackets();
    return data;
  },
);

const jacketsSlice = createSlice({
  name: 'jackets',
  initialState: {
    jackets: [],
    status: null,
  },
  extraReducers: {
    [getJacketsArr.fulfilled]: (state, { payload }) => {
      state.jackets = payload;
    },
  },
});
/* eslint-enable no-param-reassign */

export default jacketsSlice.reducer;
