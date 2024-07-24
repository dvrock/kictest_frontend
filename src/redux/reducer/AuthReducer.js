import { Logout } from '@mui/icons-material'
import {createSlice} from '@reduxjs/toolkit'
 
const authSlice=createSlice({
    name:'auth',
    initialState:{userData:{}},
    reducers:{
        saveUserDate:(state,action)=>{
            state.userData =action.payload
        },
        LogoutUser:(state,action)=>{
            state.userData = {};
        }
    }
})
export const {saveUserDate,LogoutUser}=authSlice.actions
export default authSlice.reducer