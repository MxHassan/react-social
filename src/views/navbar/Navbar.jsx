import { useState } from "react";
import "./navbar.css";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Link,
  Avatar,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import HomeIcon from "@mui/icons-material/Home";
import FeedIcon from "@mui/icons-material/Feed";

import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "24px",
  color: "initial",
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: "#e6e6e6",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("xl")]: {
      width: "88ch",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      width: "64ch",
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: "31ch",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "35ch",
    },
    [theme.breakpoints.down("sm")]: {
      width: "25ch",
    },
  },
}));
const settings = ["Profile", "My Account", "Dashboard", "Logout"];
function Navbar() {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
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
      <MenuItem
        href="/"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        <IconButton size="large" aria-label="Homepage" color="inherit">
          <HomeIcon />
        </IconButton>
        <p>Homepage</p>
      </MenuItem>
      <MenuItem
        href="/feed"
        onClick={(e) => {
          e.preventDefault();
          navigate("/feed");
        }}
      >
        <IconButton size="large" aria-label="Timeline" color="inherit">
          <FeedIcon />
        </IconButton>
        <p>Timeline</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 3 new friend request"
          color="inherit"
        >
          <Badge badgeContent={3} color="error">
            <GroupAddIcon />
          </Badge>
        </IconButton>
        <p>Friend Requests</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      {/* here */}
      <MenuItem>
        <Box sx={{ flexGrow: 0 }}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              sx={{ objectFit: "cover" }}
              alt="xMoZues"
              src="assets/person/1.jpg"
            />
          </IconButton>

          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography sx={{ marginLeft: "10px" }}>My Account</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            height: "64px",
            paddingLeft: { xs: "36px", sm: "12px" },
            paddingRight: { xs: "0px", sm: "12px" },
          }}
        >
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Link
              onClick={(e) => {
                e.preventDefault();
                navigate("/time");
              }}
              color="inherit"
              sx={{ textDecoration: "none" }}
            >
              xMoSocial
            </Link>
          </Typography>
          {/* spacing box on the left */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for friend, post or video"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {/* spacing box on the right */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexGrow: 1,
            }}
          />
          <Box sx={{ display: "flex", marginRight: 1 }}>
            <Typography
              variant="body1"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", md: "flex" },
                marginLeft: 1,
              }}
            >
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/home");
                }}
                href="/"
                color="inherit"
                sx={{ textDecoration: "none" }}
              >
                Homepage
              </Link>
            </Typography>
            <Typography
              variant="body1"
              noWrap
              component="div"
              sx={{ display: { xs: "none", md: "flex" }, marginLeft: 2 }}
            >
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/feed");
                }}
                href="/feed"
                color="inherit"
                sx={{ textDecoration: "none" }}
              >
                Timeline
              </Link>
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 3 new friend request"
              color="inherit"
            >
              <Badge badgeContent={3} color="error">
                <GroupAddIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <Box sx={{ flexGrow: 0, marginLeft: 2 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{ width: 56, height: 56, objectFit: "cover" }}
                    alt="xMoZues"
                    src="assets/person/1.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
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
      {/* {renderMenu} */}
    </Box>
  );
}

export default Navbar;
