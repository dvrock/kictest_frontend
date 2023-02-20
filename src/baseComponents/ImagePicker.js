import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useHistory } from "react-router-dom";
import "../styles/ImagePicker.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ImagePicker({ name, onChange, setFieldValue }) {
  const navigate = useNavigate();
  const [image, setImage] = useState([]);
  const [image1, setImage1] = useState([]);
  const [show, setShow] = useState(false);
  let [ids, setId] = useState(0);
  let images = [];
  const Visibility = useRef();
  useEffect(() => {
    console.log("one time");

    console.log(Visibility.current);
    localStorage.setItem("id", 0);
  }, []);
  // useEffect(() => {
  //   console.log(image)
  // }, [image]);
  function deletePic(e) {
    console.log("current id line 21", e);
    console.log("line no 28 consoling image object", image);
    let filterArray = image.filter((item) => item.id != e);
    setImage(filterArray);
    setFieldValue("images", filterArray);
    console.log("filterArray", filterArray);
  }
  function viewPic(e) {
    console.log("current line 35", e);
    let filterArray = image.filter((item) => item.id == e);
    console.log("filterArray", filterArray[0].preview);
    navigate.push(filterArray.preview);
  }

  const handleChange = (e, id) => {
    if (e.target.files.length) {
      setImage([
        ...image,
        {
          id: ids,
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0],
        },
      ]);
      let newObj = [
        ...image,
        {
          id: ids,
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0],
        },
      ];
      let newArray1 = [];
      setId(ids + 1);
      newObj.forEach((item) => {
        newArray1.push(item.raw);
      });
      console.log("image files", newArray1);
      setFieldValue("images", newArray1);
    }

    console.log("id of current index", localStorage.getItem("id"));
    localStorage.setItem("id", parseInt(localStorage.getItem("id")) + 1);
  };
  return (
    <Grid
      name={name}
      container
      spacing={2}
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        border: "none !important",
        marginTop: "2%",
      }}
    >
      {image.map((item, index, array) => {
        images.push(item.raw);
        console.log(item.id);
        return (
          <Grid
            key={item.id}
            item
            xs={2}
            md={2}
            sx={{ border: "none !important" }}
          >
            <Item
            onMouseOver={()=>{
              setShow(true)
            }}
            onMouseOut={()=>{
              setShow(false)
            }}
              sx={{
                position: "relative",
                "&:hover": {
                  opacity: "40%",
                },
                width: "106%",
                height: "100%",
                marginLeft: "3%",
              }}
            >
              {" "}
              <img
                className="image"
                src={item.preview}
                style={{
                  backgroundSize: "cover| 30%| 300px 250px| inherit",
                  marginLeft: "1%",
                  marginRight: "1%",
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
                alt="dummy"
              />
              {show ? (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Button
                    className="view"
                    onClick={(e) => {
                      viewPic(item.id);
                    }}
                    sx={{ position: "absolute", top: "35%", right: "40%" }}
                  >
                    <VisibilityIcon
                      ref={Visibility}
                      sx={{
                        color: "lightgray",
                        height: "30%",
                        width: "30%",
                        marginLeft: "30%",
                      }}
                    />
                  </Button>
                  <Button
                    className="delete"
                    sx={{ position: "absolute", top: "35%", left: "50%" }}
                    
                    onClick={(e) => {
                      deletePic(item.id);
                    }}
                  >
                    <DeleteIcon
                      sx={{
                        color: "gray",
                        height: "35%",
                        width: "35%",
                        marginLeft: "-70%",
                      }}
                    />
                  </Button>
                </div>
              ) : (
                <div></div>
              )}
            </Item>
          </Grid>
        );
      })}
      <Grid
        item
        xs={2.5}
        md={2}
        sx={{
          marginLeft: "5%",
          marginRight: "2%",
          alignItems: "center",
          marginTop: "2%",
          width: "100%",
        }}
      >
        <Item
          sx={{
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "lightGrey",
            paddingTop: "30%",
            width: "60%",
            marginTop: "-10%",
            paddingBottom: "30%",
          }}
        >
          <label htmlFor="upload-button">
            <h5>+ Add Picture</h5>
          </label>
          <input
            type="file"
            text="+ Add Picture"
            id="upload-button"
            style={{ display: "none" }}
            onChange={handleChange}
          />
        </Item>
      </Grid>
    </Grid>
  );
}
