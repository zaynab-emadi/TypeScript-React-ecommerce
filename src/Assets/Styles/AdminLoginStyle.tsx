import { alpha, styled } from "@mui/material/styles";

export const LoginBox = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(1, 1, 1, 1)",
  width: "25%",
  height: "65%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 20,
  [theme.breakpoints.down("sm")]: {
    padding: 5,
    width: "90%",
    height: "70%",
    boxShadow: "none",
  },
  backgroundColor: alpha(theme.palette.common.white, 0.9),
}));

export const GridSx = {
  height: "100vh",
  background:
    "linear-gradient(333deg, rgba(2,0,36,1) 9%, rgba(26,64,147,1) 70%)",
};

export const LogoStyle = {
  width: "40%",
  height: "20%",
  mb: 2,
};
