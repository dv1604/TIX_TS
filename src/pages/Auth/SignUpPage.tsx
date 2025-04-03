import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import ASSESTS from "../../assests";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../../store/store";
import { resetError, signUp } from "../../store/features/Authentication/authSlice";

const SignUp: React.FC = () => {

const [name,setName] = useState('');
const dispatch = useDispatch();
    const [phoneNumber,setPhoneNumber] = useState('');

    // to not show email when we switch to this page
    useEffect(() => {
      dispatch(resetError());
    }, [dispatch]);

    const navigate = useNavigate();
    const {error,isAuthenticated ,emailAdded} = useSelector((state:RootState)=>{
        return state.auth
    })

    const handleSignUp = () => {
        dispatch(signUp({name,phoneNumber}));
    }

    if(!emailAdded &&  isAuthenticated){
        navigate('/email-input')
    }


  return (

    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${ASSESTS.images.signUpBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: {xs:'center',md:"flex-end"},
        p:{xs:'20px 30px',md:'0 60px'},
        margin: 0,
      }}
    >
      {/* Login Card */}
      <Container
        sx={{
          width: "600px",
          height: "85vh",
          backgroundColor: "white",
          padding: '50px',
          boxShadow: "4px 4px 12px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems:'stretch',
          gap: 6,
          margin: 0,
          borderRadius: 2,
          position:'relative'
        }}
      >
        <Typography variant="h2" fontWeight="bold"
        sx={{
          fontSize:'36px'
        }}>
          Register to TIX ID
        </Typography>

         {/* Name Input */}
         <TextField
          label="Full name"
          variant="standard"
          type="text"
          value={name}
          onChange={(e)=> setName(e.target.value)}
          placeholder="Enter Input"
          autoComplete="off"
          inputProps={{ autoComplete: "new-password" }}
          InputProps={{
            sx: {
              paddingTop: "10px",
              borderBottom: "1px solid rgba(157, 168, 190, 1) !important", 
              "&:hover": {
                borderBottom: "1px solid rgba(157, 168, 190, 1)!important",
              },
              "&:before, &:after": {
                borderBottom: "1px solid rgba(157, 168, 190, 1) !important",
              },
              "& input": {
                backgroundColor: "transparent !important",
                WebkitBoxShadow: "0 0 0 1000px white inset !important",
              },
            },
          }}
          InputLabelProps={{
            shrink: true, // Always keeps label visible
            sx: {
              fontSize: "20px",
              textTransform:'uppercase',
              color: "black !important",
              transition: "none",
            },
          }}
        />

        {/* Phone Number Input */}
        <TextField
          label="Phone Number"
          variant="standard"
          type="tel"
          placeholder="Enter Phone Number"
          autoComplete="off"
          value={phoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)}
          inputProps={{ autoComplete: "new-password" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Typography sx={{ fontWeight: 500, color: "gray" }}>
                  +91 |
                </Typography>
              </InputAdornment>
            ),
            sx: {
              paddingTop: "10px",
              borderBottom: "1px solid rgba(157, 168, 190, 1) !important", 
              mt:2,
              "&:hover": {
                borderBottom: "1px solid rgba(157, 168, 190, 1) !important",
              },
              "&:before, &:after": {
                borderBottom: "1px solid rgba(157, 168, 190, 1) !important",
              },
              "& input": {
                backgroundColor: "transparent !important",
                WebkitBoxShadow: "0 0 0 1000px white inset !important",
              },
            },
          }}
          InputLabelProps={{
            shrink: true, 
            sx: {
              fontSize: "20px",
              textTransform:'uppercase',
              color: "black !important",
              transition: "none",
            },
          }}
        />

       {error && 
       <Typography
       sx={{
        fontSize:'14px',
        color:'rgba(255, 107, 107, 1)'
       }}>
        {error}</Typography>}

          
        {/* Register Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor:'royalblue.main',
            border: "1px solid",
            borderColor: "grey.500",
            color: "primary.main",
            fontWeight: "bold",
            fontSize:'20px',
            py: 1,
          }}
          onClick={handleSignUp}
        >
          Register Now
        </Button>

        {/* Footer */}
        <Typography variant="body2" color="gray" textAlign="center"
        sx={{
          position:'absolute',
          bottom:'20px',
          left:'40px'
        }}>
          2025 TIX ID - PT Nusantara Elang Sejahtera.
        </Typography>
      </Container>

      {/* Back Button */}
      <Button
        startIcon={<ArrowBack />}
        sx={{
          position: "absolute",
          top: {xs:5,md:30},
          left: 30,
          color: "white",
          fontSize: "18px",
          fontWeight: "bold",
        }}
        onClick={() => navigate('/login')}
      >
        Back
      </Button>
    </Box>
  );
};

export default SignUp;
