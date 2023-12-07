import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
// import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import StyledIcon from "../../customicon/StyledIcon";

// project imports

function UserMenu({
  anchorElUser,
  handleCloseUserMenu,
  settings,
  handleOpenUserMenu,
  mobileMenu,
}) {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 0, marginLeft: 2 }}>
      <Tooltip title="Profile">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            sx={{
              height: mobileMenu ? "32px" : "50px",
              width: mobileMenu ? "32px" : "50px",
            }}
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
          <MenuItem key={setting.id} onClick={() => navigate(setting.path)}>
            <StyledIcon color="inherit">{setting.icon}</StyledIcon>
            <Typography textAlign="center">{setting.text}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default UserMenu;
