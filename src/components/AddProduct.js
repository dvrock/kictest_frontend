import React from "react";
import TextInput from "../baseComponents/TextInput";
import ItemMenu from "../baseComponents/ItemMenu";
import Box from "@mui/material/Box";
import CustomButtom from "../baseComponents/CustomButton";
import RadioButtonsGroup from "../baseComponents/RadioButtonGroup";
import ImagePicker from "../baseComponents/ImagePicker";
import { useFormik, Formik, Form, Field, ErrorMessage ,setFieldValue} from "formik";
import * as yup from "yup";
import { TextField, Button, Grid } from '@mui/material';
import { useSelector,useDispatch } from "react-redux";
import * as Yup from 'yup';
import LogoutButton from "../baseComponents/Logout";
import axios from "axios";
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  price: Yup.number()
    .required('Price is required')
    .positive('Price must be a positive number'),
  quantity: Yup.number()
    .required('Quantity is required')
    .positive('Quantity must be a positive number'),
    
   
});
export default function AddProduct() {
  const token = useSelector(state=>state?.AuthReducer?.userData)
  console.log("token==>",token)
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      quantity: '',
      images:[]
    },
    validationSchema: validationSchema,
    onSubmit: async(values,{resetForm}) => {
      console.log(values);
      const formData = new FormData();
     values?.images?.map((data,index,array)=>{
        formData.append("images", values.images[index]); 
        console.log("images===>",values.images[index])          
      })              
      delete values["images"];
      console.log("updated array",values)
      formData.append("values",JSON.stringify(values));
      const config = {
          headers: {
              'content-type': 'multipart/form-data',
              "authorization":`Bearer ${token}`
          }
      };
     let response = await axios.post("http://localhost:3000/addProduct",formData,config)                                  
     if(response&&response.status ==200){
      console.log(response);
      alert("form submitted");
      
     }else{
      alert("error in submission of form");
     }
     
     resetForm();
      // You can perform further actions like submitting the form data to an API
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} sx={{marginLeft:"auto",marginRight:"auto",marginBottom:"auto",marginTop:"auto"}}>
        <Grid item xs={10} sm={5} >
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={10} sm={5}>
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            type="number"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
        </Grid>
        <Grid item xs={10} sm={5}>
          <TextField
            label="Quantity"
            variant="outlined"
            fullWidth
            type="number"
            name="quantity"
            value={formik.values.quantity}
            onChange={formik.handleChange}
            error={formik.touched.quantity && Boolean(formik.errors.quantity)}
            helperText={formik.touched.quantity && formik.errors.quantity}
          />
        </Grid>
        <Grid item xs={12}>
              <ImagePicker
                formik={formik}
                onChange={formik.handleChange}
                name="images"
              />
            </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <LogoutButton/>
        </Grid>
      </Grid>
    </form>
  );
};

