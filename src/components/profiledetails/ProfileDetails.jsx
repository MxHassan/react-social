import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

// project imports
import "./profiledetails.css";
import Rightbar from "../rightbar/Rightbar";
import Feed from "../feed/Feed";
import { useParams } from "react-router-dom";
// import { drawerWidth } from "../layout/MainLayout";

const ProfileDetails = () => {
  const { username } = useParams();

  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="profile">
        <div className="profileTop">
          <div className="profileCover">
            <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
            <img src="assets/person/7.jpeg" alt="" className="profileUserImg" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Mohamed Hassan{username}</h4>
            <span className="profileInfoDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              ipsa repudiandae deleniti, sequi ipsam quae aliquam possimus velit
              saepe temporibus iusto esse doloremque ducimus atque
              necessitatibus ratione quo ad dignissimos!
            </span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed sx={{ maxWidth: "1000px", flexGrow: 1 }} />
          <Rightbar profile />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ProfileDetails;
