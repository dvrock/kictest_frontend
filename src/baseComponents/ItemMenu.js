import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormLabel from '@mui/material/FormLabel';
export default function ItemMenu({ list=[], text, label,style,onChange,name }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth style={{display:"flex",flexDirection:"row",marginLeft:"4%"}}>
        <FormLabel style={{marginTop:"3%"}} className="textField">{label}</FormLabel>
        <Select
        defaultValue = " "
        sx={style}
          labelId="demo-simple-select-label"
          id="demo-simple-select"  
          name={name}
          onChange={onChange}        
        >
    
          {list.map((item) => {
            return <MenuItem defaultValue = " " value={item.item}>{item.item}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
