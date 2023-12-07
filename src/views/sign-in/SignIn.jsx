import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { Link, styled, useTheme } from "@mui/material";

import { useNavigate } from "react-router-dom";

export const SignButton = styled(Button)(({ theme }) => ({
  fontSize: "22px",
  textTransform: "none",
  borderRadius: "8px",
  padding: "6px 12px",
  fontWeight: 700,
}));

export default function SignIn() {
  const navigate = useNavigate();

  const theme = useTheme();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 32px",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
          />
          {/* <Box> */}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Link
            variant="body1"
            onClick={(e) => {
              e.preventDefault();
              navigate("/recovery");
            }}
            href={"/recovery"}
          >
            Forget password ?
          </Link>
          {/* </Box> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              textTransform: "none",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Sign In
          </Button>
          <SignButton
            onClick={() => navigate("/signup")}
            color="success"
            variant="contained"
            fullWidth
          >
            Create a new account
          </SignButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
