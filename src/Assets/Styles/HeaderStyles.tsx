import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";


// search box
export const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    "&:focus" : {
        width: "400px"
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

//search icon
export const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));


//search input type
type inputType = {
    input ?: string | null
} ;
//search input
export const StyledInputBase = styled(InputBase)<inputType>(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

//logo sizing
export const LogoStyle = {
    height: "80px",
    "@media only screen and (max-width: 600px)": {
        display: "none",
    },
};
export const mobileLogoStyle = {
    display: { xs: "flex", md: "none" },
    height: "40px",
    ml: 0,
    mr: 1,
};
