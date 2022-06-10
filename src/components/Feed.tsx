import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllPosts, Post } from "../API";

const PostList: React.FunctionComponent<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <ul style={{ listStyle: "none", paddingLeft: "0" }}>
        {posts.map((post) => (
          <li key={post.id}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              p={2}
              alignItems="center"
            >
              <Avatar src="" />
              <Box marginLeft={2} flexDirection="column">
                <Typography color="black" variant="h6">
                  {post.title}
                </Typography>
                <Typography color="gray">{post.body}</Typography>
              </Box>
            </Stack>
          </li>
        ))}
      </ul>
    </>
  );
};
const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <Box flex={6} p={2}>
      <PostList posts={posts} />
    </Box>
  );
};

export default Feed;
