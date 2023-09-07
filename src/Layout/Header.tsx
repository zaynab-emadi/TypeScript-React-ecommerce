import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
    LogoStyle,
    mobileLogoStyle,
} from "../Assets/Styles/HeaderStyles";
import Logo from "../Assets/Images/blackHorizental.svg";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useNavigate } from "react-router-dom";
import MobileLogo from "../Assets/Images/branlogo.svg";
import { Tooltip } from "@mui/material";

export default function Header() {
    const navigate = useNavigate();
    //mobile anchor state
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);
    // mobile anchor opening and closing state
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    //handle close
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    // handle open
    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = "primary-search-account-menu-mobile";
    // menu for mobile mood
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                    onClick={() => navigate("cart")}
                >
                    <Badge badgeContent={4} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    onClick={() => navigate("admin-login")}
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <ManageAccountsIcon />
                </IconButton>
                <p>Panel Admin</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "#0E1216" }}>
                <Toolbar>
                    {/*menu icon*/}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    {/*Logo place*/}
                    <Link to={"/"}>
                        <Box src={Logo} component="img" alt="Logo" sx={LogoStyle} />
                    </Link>
                    <Link to={"/"}>
                        <Box
                            src={MobileLogo}
                            component="img"
                            alt="logo"
                            sx={mobileLogoStyle}
                        />
                    </Link>
                    {/*search filed*/}
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    {/*box of icon buttons (cart and admin login)*/}
                    <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                        <Tooltip title={"cart"} arrow>
                            <IconButton
                                size="large"
                                aria-label="show 4 new mails"
                                color="inherit"
                                onClick={() => navigate("cart")}
                            >
                                {/*add dynamic badge later*/}
                                <Badge badgeContent={4} color="error">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={"management panel"} arrow>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={() => navigate("admin-login")}
                            >
                                <ManageAccountsIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    {/*more icon for mobile mood*/}
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}
