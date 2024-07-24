// src/features/todosSlice.js

import { createSlice } from '@reduxjs/toolkit';

const userFormSlice = createSlice({
  name: 'userForm',
  initialState: {
data: [],
  },
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
   
  },
});

export const { addData} = userFormSlice.actions;
export default userFormSlice.reducer;
