import React from "react";
import TextInput from "../baseComponents/TextInput";
import ItemMenu from "../baseComponents/ItemMenu";
import Box from "@mui/material/Box";
import CustomButtom from "../baseComponents/CustomButton";
import RadioButtonsGroup from "../baseComponents/RadioButtonGroup";
import ImagePicker from "../baseComponents/ImagePicker";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
export default function AddCar() {
  const validationSchema = yup.object({
    model: yup
      .string()
      .min(3, "Too Short!")
      .required("Car Model  name is required"),
    price: yup.number().required("Price is required"),
    phone: yup.number().min(11, "Too Short!").required("Phone is required"),
  });
  const formSubmit = async (e) => {};
  const menu = [
    {
      name: "Lahore",
    },
    { name: "Karachi" },
  ];
  const list = [
    {
      item: 1,
    },
    {
      item: 2,
    },
    {
      item: 3,
    },
  ];
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        model: "",
        price: "",
        phone: "",
        city: "",
        options: "",
        
      }}
      onSubmit={async (values) => {
        console.log("values", values);
        const formData = new FormData();
        values.images.map((data,index,array)=>{
          formData.append("images", values.images[index]);           
        })                   
        delete values["images"];
        console.log("updated array",values)
        formData.append("values",JSON.stringify(values));
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                "authorization":`Bearer ${localStorage.getItem("token")}`
            }
        };
       let response = await axios.post("http://localhost:3001/addCar",formData,config)                                  
          console.log(response)          
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1, overflowX: "hidden" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                className="textField"
                style={{ marginLeft: "2%", marginTop: "3%" }}
              >
                Car Model:
              </div>
              <TextInput
                type="text"
                name="model"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.model}
                id="model"
                styles={{ width: "90%", marginTop: "2%", marginLeft: "2%" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                className="textField"
                style={{ marginLeft: "2%", marginTop: "3%" }}
              >
                Price:
              </div>
              <TextInput
                type="text"
                name="price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                id="price"
                styles={{ width: "90%", marginTop: "2%", marginLeft: "2%" }}
              />
            </div>
            <div
              style={{ width: "90%", display: "flex", flexDirection: "row" }}
            >
              <div
                className="textField"
                style={{ marginLeft: "2%", marginTop: "3%" }}
              >
                Phone:
              </div>
              <TextInput
                type="text"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                styles={{ width: "100%", marginTop: "2%", marginLeft: "2%" }}
              />
            </div>
            <div>
              <RadioButtonsGroup
                label={"City:"}
                defaultValue={"Lahore"}
                menu={menu}
                name="city"
                onChange={handleChange}
              />
            </div>
            <div>
              <ItemMenu
                name="options"
                label={"No of options:"}
                style={{
                  width: 250,
                  height: 40,
                  marginTop: "2.5%",
                  marginLeft: "3%",
                }}
                onChange={handleChange}
                list={list}
              />
            </div>
            <div>
              <ImagePicker
                setFieldValue={setFieldValue}
                onChange={handleChange}
                name="images"
              />
            </div>
            <div>
              <CustomButtom
                type="submit"
                text="AddCar"
                onClick={formSubmit}
                styles={{
                  width: "90%",
                  marginTop: "5%",
                  marginLeft: "3%",
                  marginRight: "3%",
                  marginBottom: "5%",
                  backgroundColor: "grey",
                  color: "white",
                  height: "10%",
                  textAlign: "center",
                }}
              />
            </div>
          </Box>
        </form>
      )}
    </Formik>
  );
}
