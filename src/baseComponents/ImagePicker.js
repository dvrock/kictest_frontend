import React, { useState } from 'react';
import { Button, Grid, IconButton, TextField,Typography } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
const ImagePicker = ({name,formik}) => {
  const [images, setImages] = useState([]);
const[files,setFiles] = useState([])
  const handleImageChange = (index, event) => {
    const newImages = [...images];
    formik.setFieldValue("images",[...files,event.target.files[0]])
    setFiles([...files,event.target.files[0]]);
    newImages[index] = URL.createObjectURL(event.target.files[0]);
    setImages(state=>newImages);
    console.log("images",newImages)
    
  };

  const handleImageDelete = (index) => {
    const newImages = [...images];
   
    newImages.splice(index, 1);
    files.splice(index, 1);
    setFiles(state=>files)
    
    formik.setFieldValue("images",files)
    setImages(state=>newImages);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center"  sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
        {images.map((image, index) => (
          <Grid item key={index}>
            <img src={image} alt={`Image ${index}`} height={100} width={100} />
            <IconButton onClick={() => handleImageDelete(index)}>
              <Delete />
            </IconButton>
          </Grid>
        ))}
        {images.length < 6 && (
          <Grid item>
            <label htmlFor="image-upload">
              <input
                id="image-upload"
                type="file"
                name={name}
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(event) => handleImageChange(images.length, event)}
              />
              <IconButton
      color="primary"
      aria-label="add"
      component="span"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '50%',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100px',
        height: '100px',
      }}
    >
      <AddIcon style={{ fontSize: '40px' }} />
      <Typography variant="body2" style={{ marginTop: '8px' }}>
        Add Image
      </Typography>
    </IconButton>
            </label>
          </Grid>
        )}
        {/* <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button> */}
        {/* </Grid> */}
      </Grid>
    </form>
  );
};

export default ImagePicker;
