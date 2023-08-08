import React from "react";
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput, TextField, Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {LoginBox} from "../../Assets/Styles/AdminLoginStyle";
import LoginIcon from '@mui/icons-material/Login';

function AdminLogin() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx = {{height : '100vh'}}
      >
        <LoginBox>
          {/*login icon*/}
          <LoginIcon/>
          {/*header*/}
          <Typography variant='h4' >Management panel</Typography>
          {/*userName*/}
          <FormControl sx={{ m: 1, width: "25ch" }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </FormControl>
          {/*password*/}
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          {/*login button*/}
          <Button variant="contained">Contained</Button>
          {/*return button*/}
          <Button>Primary</Button>
        </LoginBox>
      </Grid>
    </>
  );
}

export default AdminLogin;
