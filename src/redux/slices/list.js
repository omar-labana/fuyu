import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWishlist } from '../../api-service';

/* eslint-disable no-param-reassign */
export const getList = createAsyncThunk(
    'list/getList',
    async (id) => {
        const data = await getWishlist(id)
        return data;
    },
);

const listSlice = createSlice({
    name: 'list',
    initialState: {
        list: [],
    },
    extraReducers: {
        [getList.fulfilled]: (state, { payload }) => {
            state.list = payload
        },
    },
});
/* eslint-enable no-param-reassign */

export default listSlice.reducer;