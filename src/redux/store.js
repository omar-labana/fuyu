
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user'
import jacketsReducer from './slices/jackets'
import jacketReducer from './slices/jacket'
import listReducer from './slices/list'


const store = configureStore({
  reducer: {
    user: userReducer,
    jackets: jacketsReducer,
    jacket: jacketReducer,
    list: listReducer,
  },
});

export default store;