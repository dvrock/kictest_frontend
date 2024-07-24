import React,{useEffect} from "react";
import TextInput from "../../baseComponents/TextInput";
import "../../styles/SignIn.css";
import CustomButtom from "../../baseComponents/CustomButton";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { saveUserDate } from "../../redux/reducer/AuthReducer";
import Box from "@mui/material/Box";
export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your Password")
      .required("Password is required"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        // Alert the input values of the form that we filled
        const response = await axios.post(
          "http://localhost:3000/login",
          {
            values,
          }
        );
        console.log("response", response);
        if (response && response.data.status == "successfull") {
     

          
          alert("Login");
          dispatch(saveUserDate(response.data.data));
          navigate("/");
        } else {
          console.log("error in response request");
          alert("try again later");
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1, overflowX: "hidden" }}>
            <div id="container">
              <div id="content">
                <div className="Header">Login</div>
                <div className="textField">Email</div>

                <TextInput
                  styles={{
                    width: "100%",
                    marginLeft: "2%",
                    marginRight: "2%",

                    mt: 1,
                  }}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                <div className="textField">Password</div>
                <TextInput
                  styles={{
                    width: "100%",
                    marginLeft: "2%",
                    marginRight: "2%",
                    mt: 1,
                  }}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="password"
                />

                <CustomButtom
                  type="submit"
                  text="Login"
                  styles={{
                    width: "100%",
                    marginTop: "5%",
                    paddingTop: "3%",
                    marginLeft: "2%",
                    marginRight: "2%",
                    paddingBottom: "3%",
                    backgroundColor: "blue",
                    color: "white",
                    textAlign: "center",
                  }}
                />
              </div>
            </div>
          </Box>
        </form>
      )}
    </Formik>
  );
}
