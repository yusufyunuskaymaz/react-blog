import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "../../auth/firebase";
import { UserContext } from "../../context/UserContextProvider";
import { useContext } from "react";
// import {Link} from "react-router-dom"
import { Link } from "react-router-dom";
import postBlog from "../../auth/functions";
import { useFetch, deletePost } from "../../auth/functions";

function Login() {
  const posts = useFetch();

  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
    } else {
      LogIn(email, password, navigate);
      postBlog(email, password);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {posts.map((post) => {
        console.log(post, "post");
        return (
          <div className="d-flex justify-content-between">

            <span>
            <span>mail: {post.email }</span> --
            <span> şifre: {post.password}</span>
            </span>
            <span type="button" style={{color:"red"}} onClick={()=>deletePost(post.id)}>Sil</span>
          </div>
        );
      })}
      {/* When you refresh page it goes so We should not use it */}
      {/* {auth?.currentUser?.email} */}
      {currentUser?.email}
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
          Login
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          {email} <br />
          {password}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{}}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Login With Google
          </Button>
          <Typography sx={{ textAlign: "center", mt: 1 }}>OR</Typography>
          <Link to="/register-user">
            <Typography
              type="button"
              sx={{ color: "gray", marginTop: 0, textAlign: "center" }}
              component="h6"
              variant="p"
            >
              Register From Here
            </Typography>
          </Link>
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

export default Login;
