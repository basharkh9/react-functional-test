import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllPosts, Post } from "../API";
import PostList from "./PostList";

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  const addPost = (post: Post) => {
    setPosts((posts) => [post, ...posts]);
  };
  return (
    <Box flex={6} p={2}>
      <PostList posts={posts} addPost={addPost} />
    </Box>
  );
};

export default Feed;
