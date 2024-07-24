import {createSlice} from '@reduxjs/toolkit'
 
const authSlice=createSlice({
    name:'auth',
    initialState:{},
    reducers:{
        saveUserDate:(state,action)=>{
            state.userData =action.payload
        }
    }
})
export const {saveUserDate}=authSlice.actions
export default authSlice.reducer