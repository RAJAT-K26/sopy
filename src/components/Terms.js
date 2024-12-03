import Container  from '@mui/material/Container'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Terms() {

  return (
    <Container>
        
        
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            maxHeight: '50vh', // Restrict height
            overflowY: 'auto', // Enable vertical scrolling
          }}
        >
          <Typography sx={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    textAlign: 'center', 
    height: '100%' 
  }} id="modal-title" variant="h6" component="h2">
            Long Content Example
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {Array(100).fill('This is a long text. ').join(' ')}
          </Typography>
        </Box>
    </Container>
  )
}
