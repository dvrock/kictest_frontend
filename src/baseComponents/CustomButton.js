import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function CustomButtom({ type,text, styles,onSubmit}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Button  type={type} sx={styles} variant="text">
        {text}
      </Button>
      </Box>
  );
}
