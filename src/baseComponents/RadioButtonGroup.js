import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup({menu,defaultValue,label,onChange,name}) {
  return (
    <FormControl style={{display:"flex",flexDirection:"row"}}>
      <FormLabel className="textField" style={{marginLeft:"4%",marginRight:"2%",marginTop:"2%"}}>{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=" "
        style={{display:"flex",flexDirection:"row"}}
        name={name}
        onChange={onChange}
      >
        {menu.map((item)=>{
            return(<FormControlLabel value={item.name} control={<Radio />} label={item.name} />)
        })}                
      </RadioGroup>
    </FormControl>
  );
}