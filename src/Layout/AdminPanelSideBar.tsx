import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../Assets/Images/blackHorizental.svg";
import {Divider, Tooltip} from "@mui/material";
import {
  AppBarStyle,
  LogoStyle,
  SideBar,
} from "../Assets/Styles/AdminPanelSideBar";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import { lightBlue } from "@mui/material/colors";
import { Outlet, useNavigate } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function AdminPanelSideBar(props: Props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawerIcons: React.ReactComponentElement<"img">[] = [
    <SpaceDashboardIcon style={{ color: lightBlue[400] }} />,
    <ContentPasteIcon style={{ color: lightBlue[400] }} />,
    <LocalMallIcon style={{ color: lightBlue[400] }} />,
    <WarehouseIcon style={{ color: lightBlue[400] }} />,
  ];
  const drawerLinks: string[] = [
    "/Admin-dashboard",
    "orders",
    "products-list",
    "stock",
  ];
  const drawer = (
    <div style={SideBar}>
      <Toolbar>
        <Box component="img" src={Logo} style={LogoStyle} />
      </Toolbar>
      <Divider />
      <List>
        {["Dashboard", "Orders", "Products list", "Stock"].map(
          (text, index) => (
            <ListItem key={text} disablePadding sx={{ mt: 3 }}>
              <ListItemButton onClick={() => navigate(drawerLinks[index])}>
                <ListItemIcon>{drawerIcons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={AppBarStyle}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
            <Box sx={{  mr: 1 , position : 'fixed' , right : 0 }}>
                <Tooltip title={"Return"} arrow>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={() => navigate("/")}
                    >
                        <ExitToAppIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
