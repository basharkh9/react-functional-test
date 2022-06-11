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
  const deletedPost = (postId: number) => {
    setPosts((posts) => posts.filter((p) => p.id != postId));
  };
  return (
    <Box flex={6} p={2} paddingLeft={0}>
      <PostList posts={posts} onAddPost={addPost} onDeletePost={deletedPost} />
    </Box>
  );
};

export default Feed;
