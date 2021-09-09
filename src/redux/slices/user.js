import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { checkLoginStatus } from '../../api-service';
 

export const getUser = createAsyncThunk(
    'user/getUser',
    async (status) => {
        const user = await checkLoginStatus(status)
        return user
    },
);

const initialState = {
    user: {},
    loggedInStatus: "NOT_LOGGED_IN",
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [getUser.fulfilled]: (state, { payload }) => {
            state.loggedInStatus = payload.loggedInStatus
            state.user = payload.user
        },
    },
    reducers: {
        updateUser: (state, action) => {
            state.loggedInStatus = "LOGGED_IN"
            state.user = action.payload.user
        },
        removeUser: (state) => {
            state.loggedInStatus = "NOT_LOGGED_IN"
            state.user = {}
        },
    },
});

export const { updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;