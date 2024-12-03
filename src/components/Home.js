import React from 'react';
import { useNavigate } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Box, Container } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Modal from '@mui/material/Modal';
import BuyerForm from './BuyerForm';
const Home = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '15vh' }}>
      <h1>Select an Option</h1>
      <Container sx={{justifyContent: 'center', display: 'flex', alignItems:'center'}}>
      

      <Box sx={{maxWidth:'100vh'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       
  <Grid size={6}>
  <Button onClick={handleOpen} variant="contained" size="large">BUYER</Button>
  </Grid>
  <Grid size={6}>
  <Button  variant="contained"  size="large">SELLER</Button>
  </Grid>
  
  </Grid>
  
  </Box>
      </Container>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          
            <BuyerForm/>
          
        </Box>
      </Modal>
      {/* <LocalMallIcon/> */}
    </div>
  );
};

export default Home;
