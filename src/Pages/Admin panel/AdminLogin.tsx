import React from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment, 
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {
  GridSx,
  LoginBox,
  LogoStyle,
} from "../../Assets/Styles/AdminLoginStyle";
import BrandLogo from "../../Assets/Images/whiteLogo.svg";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     userName: data.get('userName'),
  //     password: data.get('password'),
  //   });
  // };
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={GridSx}
      >
        <LoginBox>
          {/*brand logo*/}
          <Box src={BrandLogo} component="img" sx={LogoStyle} />
          {/*header*/}
          <Typography variant="h4" sx={{ m: 1 }}>
             Management panel
          </Typography>
          {/*userName*/}
          <FormControl sx={{ m: 1 }} fullWidth id="userName">
            <TextField
                required
              label="User Name"
              variant="outlined"
            />
          </FormControl>
          {/*password*/}
          <FormControl sx={{ m: 1 }} variant="outlined" fullWidth required  >
            <InputLabel htmlFor="password">
              Password
            </InputLabel>
            <OutlinedInput
              id="password"
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
          {/*return button and remember me*/}
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ m: 2 }}
          >
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button onClick={() => navigate('/')}>Return</Button>
          </Grid>
          {/*login button*/}
          <Button variant="contained" type="submit" onClick={() => navigate('/Admin-dashboard')}>Submit</Button>
        </LoginBox>
      </Grid>
    </>
  );
}

export default AdminLogin;
