import {
  Box,
  Typography,
  Badge,
  MenuItem,
  Menu,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Home, GroupAdd, MoreVert, Notifications } from "@mui/icons-material";
import ViewTimelineRoundedIcon from "@mui/icons-material/ViewTimelineRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";

// project imports
import UserMenu from "../usermenu/UserMenu";

export default function MobileMenu({
  mobileMoreAnchorEl,
  mobileMenuId,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleOpenUserMenu,
  handleCloseUserMenu,
  settings,
  anchorElUser,
  handleMobileMenuOpen,
}) {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <Tooltip title="more">
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreVert />
        </IconButton>
      </Tooltip>

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
            <Home />
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
            <ViewTimelineRoundedIcon />
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
              <GroupAdd />
            </Badge>
          </IconButton>
          <p>Friend Requests</p>
        </MenuItem>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <ForumRoundedIcon />
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
              <Notifications />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem>
          <UserMenu
            anchorElUser={anchorElUser}
            handleOpenUserMenu={handleOpenUserMenu}
            handleCloseUserMenu={handleCloseUserMenu}
            settings={settings}
            mobileMenu
          />
          <Typography sx={{ marginLeft: "10px" }}>My Account</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
