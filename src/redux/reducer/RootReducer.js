import {createSlice} from '@reduxjs/toolkit'

const counterSlice=createSlice({
    name:'counter',
    initialState:{
      num:0
    },
    reducers:{
        countChange:(state,action)=>{
            state.num =action.payload
        }
    }
})
export const {countChange}=counterSlice.actions
export default counterSlice.reducer