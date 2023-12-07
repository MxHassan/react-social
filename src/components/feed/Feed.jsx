import { Box, ThemeProvider, styled, useTheme } from "@mui/material";

// project imports
import "./feed.css";
import ShareArea from "../share/ShareArea";
import Post from "../post/Post";
import { Posts } from "../../dummyData";
const StyledFeed = styled(Box)(({ theme }) => ({
  maxWidth: "680px",

  [theme.breakpoints.up("md")]: {
    padding: " 0 32px ",
    margin: "20px 0 0 40px ",
  },
  [theme.breakpoints.down("md")]: {
    padding: " 5px ",
  },
}));

function Feed({ sx }) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <StyledFeed sx={sx}>
        <ShareArea />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </StyledFeed>
    </ThemeProvider>
  );
}

export default Feed;
