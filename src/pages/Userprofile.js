import React from 'react'
import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import  TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/material/Icon';
import Chip from '@mui/material/Chip';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
export default function Userprofile() {
const [edit, setEdit] = useState(false)
const [lab,setLab] = useState('edit')
const toggleEdit = () =>
{
    setEdit(!edit);
    if(!edit)
    {
        setLab('edit adddress')
    }
    else{
        setLab('save save address')
    }
}
    const location = useLocation();
  const formData = location.state || {}; // Retrieve the state passed via navigate
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        alignSelf:'center',
        justifyContent: 'center',
        justifySelf:'center',
        alignItems: 'center',
        minHeight: '100vh', // Full viewport height
        bgcolor: '#f5f5f5', // Optional background color
        
      }}
    >
        
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid grey',
          p: 6,
          
          borderRadius: 2, // Optional rounded corners
          boxShadow: 3, // Optional box shadow for a better look
          bgcolor: 'white',
        }}>
        <Box component="section" >
        <Paper elevation={7} />
      <Grid container spacing={7} sx={{ margin:'4vh'}}>
        <Grid>
        <Avatar sx={{minHeight:'30vh', minWidth:'30vh'}}  src='./images/person1.jpg' />
        </Grid>
        <Grid sx={{alignContent:'center'}}>
            <Typography variant='h3'>
            {formData.firstName} {formData.lastName}
            </Typography>
        </Grid>
      </Grid>

      
      <Grid container spacing={5} sx={{ margin:'4vh'}}>
      <Grid >
        <Stack direction={'column'} spacing={4}>
        
        <TextField
            disabled
            id="phno"
            
            defaultValue={formData.firstName}
            name="phoneNumber"
            fullWidth
          />
          <TextField
            disabled
            id="Last Name"
            
           defaultValue={formData. phoneNumber}
            name="phoneNumber"
            fullWidth
          />
        </Stack>
      </Grid>
      <Grid>
        <Stack direction={'column'} spacing={4}>
        <TextField
            
            id="phno"
            disabled
            defaultValue={formData.lastName}
            name="phoneNumber"
            fullWidth
          />
          <TextField
            disabled={edit}
            id="phno"
            edit
            defaultValue={formData. flatDetails}
            name="phoneNumber"
            fullWidth
          />
          
            
          <Chip  label={lab} variant="outlined" avatar={<Avatar sx={{bgcolor:'transparent'}}><ModeEditOutlineOutlinedIcon/></Avatar>} onClick={toggleEdit} />
          
        </Stack>
      </Grid>
      </Grid>
    </Box>
        </Container>
    </Box>
  )
}
