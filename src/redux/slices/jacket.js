import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getJacketService } from '../../api-service';

/* eslint-disable no-param-reassign */
export const getJacketDetails = createAsyncThunk(
    'jacket/getJacket',
    async (id) => {
        const data = await getJacketService(id)
        return data;
    },
);

const jacketSlice = createSlice({
    name: 'jacket',
    initialState: {
        jacket: {},
    },
    extraReducers: {
        [getJacketDetails.fulfilled]: (state, { payload }) => {
            state.jacket = payload
        },
    },
});
/* eslint-enable no-param-reassign */

export default jacketSlice.reducer;