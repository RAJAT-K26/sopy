import React, { useState } from 'react';
import axios from 'axios';
import { TextField, FormControlLabel, Box, Modal, Button, Checkbox } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Terms from './Terms';
import Userprofile from '../pages/Userprofile';
import { useNavigate } from "react-router-dom";

const BuyerForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    flatDetails: '',
    acceptedTerms: false,
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.acceptedTerms) {
      alert('You must accept the terms and conditions.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/buyer', formData);
      alert('Form submitted successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting the form.');
    }
  };

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
    <>
      <Grid container spacing={3} sx={{ flexGrow: 1 }} >
        <Grid size={{ xs: 12, md: 6 }} offset={{ md: 'auto' }}>
          <TextField
            required
            id="fname"
            label="First name"
            value={formData.firstName}
            onChange={handleChange}
            name="firstName"
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} offset={{ md: 'auto' }}>
          <TextField
            required
            id="lname"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            name="lastName"
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 12, md: 12 }} offset={{ xs: 4, md: 0 }}>
          <TextField
            required
            id="flatdet"
            label="Flat Details"
            value={formData.flatDetails}
            onChange={handleChange}
            name="flatDetails"
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 12, md: 12 }} offset={{ md: 0 }}>
          <TextField
            required
            id="phno"
            label="Phone"
            value={formData.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
            fullWidth
          />
        </Grid>

        <Grid xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                required
                checked={formData.acceptedTerms}
                onChange={handleChange}
                name="acceptedTerms"
              />
            }
            label={
              <>
               I have read and agree to <a onClick={handleOpen}><u>Terms and conditions</u></a>
                <Modal open={open} onClose={handleClose}>
                  <Box sx={style}>
                    <Terms />
                  </Box>
                </Modal>
              </>
            }
          />
        </Grid>

        <Grid  xs={12}>
          {/* <Button onClick={handleSubmit} variant="contained" fullWidth>
            Submit
          </Button> */}

<Button onClick={() => navigate("/Profile",{ state: formData })} variant="contained" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default BuyerForm;
