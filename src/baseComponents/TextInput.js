import React,{useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik,Formik, Form, Field, ErrorMessage } from 'formik';

export default function TextInput({type,onChange,onBlur, label, styles,name,id,values}) {
  const[val,setValue] = useState(" ");

 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <TextField
      fullWidth
      size="small"
      variant="outlined"
      label={label}
      id={id}
      name={name}
      type={type}
      // inputProps={{style: {textTransform: 'lowercase'}}}                
      onChange={onChange}
      onBlur={onBlur}
      value={values}
      
                                                                        
        sx={styles}
                     
      />
      <ErrorMessage
      style={{color:"red",marginLeft:"3%"}}
  component="div"
  name={name}
  className="invalid-feedback"
/>
    </Box>
  );
}
