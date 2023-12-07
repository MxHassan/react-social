import { useState } from "react";
import { Box, IconButton, Badge, Tooltip, ThemeProvider } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import { GroupAdd, Notifications } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";

// project imports
// import SpacingBox from "../spacingbox/SpacingBox";
import SearchArea from "./searcharea/SearchArea";
import UserMenu from "./usermenu/UserMenu";
import MobileMenu from "./mobilemenu/MobileMenu";
import NavLink from "../links/NavLink";
import { settings } from "../../dummyData";

const SpacingBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const SidebarToggler = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));
function Navbar() {
  const theme = useTheme();
  // user menu action section
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // mobile menu action section
  const mobileMenuId = "primary-search-account-menu-mobile";
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <ThemeProvider theme={theme}>
      <SidebarToggler>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          // onClick={handleDrawerOpen}
          edge="start"
          // sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
      </SidebarToggler>
      {/* logo section */}

      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        <NavLink
          variant="h5"
          href="/"
          tag="xMoSocial"
          sx={{ color: "inherit", textDecoration: "none" }}
        />
      </Box>

      <SpacingBox />

      {/* search section */}
      <SearchArea />

      <SpacingBox />

      {/* nav buttons */}

      <Box
        sx={{
          display: { xs: "none", md: "flex", alignItems: "center" },
        }}
      >
        <NavLink
          variant="body1"
          href="/"
          tag="Homepage"
          sx={{ color: "inherit", textDecoration: "none" }}
        />
        <NavLink
          variant="body1"
          href="/"
          tag="Timeline"
          sx={{ color: "inherit", textDecoration: "none" }}
        />
        <Tooltip title="Requests">
          <IconButton
            size="large"
            aria-label="show 3 new friend request"
            color="inherit"
          >
            <Badge badgeContent={3} color="error">
              <GroupAdd />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Messages">
          <IconButton
            size="large"
            aria-label="show 4 new messages"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <ForumRoundedIcon />
            </Badge>
          </IconButton>
        </Tooltip>

        <Tooltip title="Notifications">
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <Notifications />
            </Badge>
          </IconButton>
        </Tooltip>
        {/* user menu section */}
        <UserMenu
          anchorElUser={anchorElUser}
          handleOpenUserMenu={handleOpenUserMenu}
          handleCloseUserMenu={handleCloseUserMenu}
          settings={settings}
        />
      </Box>
      {
        <MobileMenu
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          mobileMenuId={mobileMenuId}
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuOpen={handleMobileMenuOpen}
          handleMobileMenuClose={handleMobileMenuClose}
          handleOpenUserMenu={handleOpenUserMenu}
          handleCloseUserMenu={handleCloseUserMenu}
          settings={settings}
          anchorElUser={anchorElUser}
        />
      }
    </ThemeProvider>
  );
}

export default Navbar;
