import React, { useState } from "react";
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
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Middleware/Redux/userSlice";
import { AppDispatch, RootState } from "../../Middleware/Redux/store";
import {stringify} from "querystring";

//type declaring
interface FormDataType {
  userName: string;
  password: string;
}

function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { error, isLoggedIn } = useSelector((state: RootState) => state.user);
  //show password button
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  //form data
  const [formData, setFormData] = useState<FormDataType>({
    userName: "",
    password: "",
  });
  //onChange for userName and password
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: (e.currentTarget.value) ,
    });
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  //handle authentication
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData);
    dispatch(login(formData));
  };
  if (isLoggedIn === "true") return <Navigate to={"/Admin-dashboard"} />;

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
          {/*error place*/}
          {error && <h6 className="error">{error}</h6>}
          {/*userName*/}
          <FormControl sx={{ m: 1 }} fullWidth>
            <TextField
              required
              label="User Name"
              variant="outlined"
              onChange={handleChange}
              id="userName"
            />
          </FormControl>
          {/*password*/}
          <FormControl sx={{ m: 1 }} variant="outlined" fullWidth required>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
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
            <Button onClick={() => navigate("/")}>Return</Button>
          </Grid>
          {/*login button*/}
          <Button
            variant="contained"
            type="submit"
            // onClick={() => navigate("/Admin-dashboard")}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </LoginBox>
      </Grid>
    </>
  );
}

export default AdminLogin;
