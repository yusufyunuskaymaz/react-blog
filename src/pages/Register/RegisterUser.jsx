import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {createUser} from "../../auth/firebase"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"


function RegisterUser() {

  const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin =(e)=>{
        e.preventDefault()
        if(!email  || !password){
            alert("Please enter email and password")
        }else{
            createUser(email,password, navigate)
        }
        
    }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="avatar_img"
          src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_960_720.png"
          sx={{ width: 100, height: 100 }}
        />
        <Typography component="h1" variant="h5">
          Create Account
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Name and Surname"
            name="email"
            autoComplete="name"
            autoFocus
            
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          {email} <br />
          {password}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3}}
            onClick={handleLogin}
          >
            Create Account
          </Button>
          <Typography sx={{textAlign:"center", my:1}}>
          OR
        </Typography>
          <Link to="/login"><Typography type="button" sx={{color:"gray", textAlign:"center"}} component="h6" variant="p">
          Login From Here
        </Typography ></Link>
        </Box>
      </Box>

      {/* <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://www.clarusway.com/">
          Clarusway
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography> */}
    </Container>
  );
}

export default RegisterUser;