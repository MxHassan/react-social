import { Box, Drawer, ThemeProvider } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

// project imports
import "./rightbar.css";
import CustomToolbar from "../customtoolbar/CustomToolbar";

import Online from "../online/Online";
import { Users } from "../../dummyData";
import { drawerWidth } from "../../layout/MainLayout";

const ResponsiveRightbar = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
function RightbarProfile() {
  return (
    <Box sx={{ width: drawerWidth + 20 }}>
      <h4 className="rightbarTitle">User Informaion</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City: </span>
          <span className="rightbarInfoKey">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From: </span>
          <span className="rightbarInfoKey">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship: </span>
          <span className="rightbarInfoKey">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src="assets/person/4.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Doe</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/5.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Doe</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/6.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Doe</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/7.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Doe</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/2.jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Doe</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assets/person/9.jpg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Doe</span>
        </div>
      </div>
    </Box>
  );
}

function Rightbar({ profile, sx }) {
  const theme = useTheme();
  function RightbarHomepage() {
    return (
      <Drawer
        sx={{
          zIndex: theme.zIndex.appBar - 2,
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <CustomToolbar />
        <Box sx={{ overflow: "auto" }} className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className="birthdayImg" src="assets/gift.png" alt="" />
            <span className="birthdayText">
              <b>Mohamed Hassan</b> and <b>3 other friends have</b> a birhtday
              today
            </span>
          </div>
          <img className="rightbarAd" src="assets/ad.png" alt="" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((user) => (
              <Online key={user.id} user={user} />
            ))}
          </ul>
        </Box>
      </Drawer>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveRightbar sx={sx} className="rightbar">
        {!profile ? <RightbarHomepage /> : <RightbarProfile />}
      </ResponsiveRightbar>
    </ThemeProvider>
  );
}

export default Rightbar;
