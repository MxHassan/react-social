import {
  CardHeader,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";

import { MoreVert, Share, Favorite, ThumbUp } from "@mui/icons-material";

// project imports
import "./post.css";
import { Users } from "../../dummyData";
import { useState } from "react";

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const foundUser = Users.find((user) => user.id === post.userId);
  return (
    <div className="postBox">
      <Card sx={{ width: "100%" }}>
        <div className="postTop">
          <CardHeader
            avatar={<Avatar src={foundUser.profilePicture} />}
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={
              <>
                <span className="postUsername">{foundUser.username}</span>
                <span className="postDate">{post.date}</span>
              </>
            }
          />
        </div>
        <div className="postCenter">
          <CardContent>
            <Typography variant="body1">{post?.description}</Typography>
          </CardContent>

          <div className="postImg">
            <CardMedia component="img" image={post.photo} />
          </div>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <CardActions>
              <IconButton onClick={handleLike} aria-label="Like">
                <ThumbUp color="primary" />
              </IconButton>
              <IconButton onClick={handleLike} aria-label="Love">
                <Favorite color="error" />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Post;
