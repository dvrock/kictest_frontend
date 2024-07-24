import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { LogoutUser } from '../redux/reducer/AuthReducer';
const theme = createTheme({
    palette: {
      primary: {
        main: '#f44336', // Customize the primary color
      },
    },
  });
export default function  LogoutButton  () {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const handleLogout = () => {
      // Add your logout logic here
      dispatch(LogoutUser());
      navigate("/")
    };
  
    return (
      <ThemeProvider theme={theme} >
        <Button sx={{marginLeft:"auto",marginRight:"auto"}} variant="contained" color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </ThemeProvider>
    );
  };
    