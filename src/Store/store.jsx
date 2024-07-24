// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import userFormReducer from './UserForm/UserFormSlice';

export const store = configureStore({
  reducer: {
    todos: userFormReducer,
  },
});
