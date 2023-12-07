import { Avatar, Box, Divider, IconButton } from "@mui/material";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

// project imports
import "./share.css";
import StyledButton from "../custombutton/CustomButton";

function ShareArea() {
  return (
    <>
      <div className="shareBox">
        <Box sx={{ padding: "10px" }}>
          <div className="shareContentTop">
            <Avatar
              sx={{ width: "50px", height: "50px" }}
              src="assets/person/3.jpg"
            />
            <input
              className="shareInput"
              type="text"
              placeholder="What's in your mind xMo ?"
            />
          </div>
          <Divider sx={{ m: "20px" }} />
          <div className="shareContentBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <IconButton>
                  <PermMedia htmlColor="tomato" />
                </IconButton>
                <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareOption">
                <IconButton>
                  <Label htmlColor="blue" />
                </IconButton>
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <IconButton>
                  <Room htmlColor="green" />
                </IconButton>
                <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                <IconButton>
                  <EmojiEmotions htmlColor="goldenrod" />
                </IconButton>
                <span className="shareOptionText">Feelings</span>
              </div>
            </div>
            <StyledButton disableElevation color="success" variant="contained">
              Share
            </StyledButton>
          </div>
        </Box>
      </div>
    </>
  );
}

export default ShareArea;
