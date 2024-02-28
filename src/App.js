// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import React, {useState} from 'react';
import Button from '@mui/material/Button';


import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './index.css';

const App =()=>{
  const[p,setP]=useState(0)
  const[r,setR]=useState(0)
  const[t,setT]=useState(0)
  const [si,setSi]=useState(0)
  const calculateIntrest=()=>{
    setSi(p*r*t/100)
  
}
  return (
    <div className="div">
     
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Intrest
          </Typography>
    
        </Toolbar>
      </AppBar>
      <br></br>
      <TextField onChange={(event) => setP(event.target.value)}id="outlined-basic" label="Enter Principle" variant="outlined" />
      <TextField onChange={(event) => setT(event.target.value)}id="outlined-basic" label="Enter Time" variant="outlined" />

      <TextField onChange={(event) => setR(event.target.value)}id="outlined-basic" label="Enter Rate" variant="outlined" />

  <br>
</br>
<Button onClick={()=> calculateIntrest()} variant="contained">Calculate</Button>
<Typography variant="h6" gutterBottom component='div'>
  Simple Intrest is: {si}
  </Typography>
  

      
    
    </div>
  );
}

export default App;
