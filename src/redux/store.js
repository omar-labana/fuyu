
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user'
import jacketsReducer from './slices/jackets'


const store = configureStore({
  reducer: {
    user: userReducer,
    jackets: jacketsReducer,
  },
});

export default store;