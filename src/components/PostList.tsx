import {
  Avatar,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { sendPost, Post, deletePostById } from "../API";

interface PostListProps {
  posts: Post[];
  onAddPost: (post: Post) => void;
  onDeletePost: (postId: number) => void;
}

const PostList: React.FunctionComponent<PostListProps> = ({
  posts,
  onAddPost: addPost,
  onDeletePost: deletePost,
}) => {
  const [title, setTitle] = useState("");
  const onSetTitle = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value);
  };
  const [body, setBody] = useState("");
  const onSetBody = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setBody(evt.target.value);

  const onSubmitPost = async () => {
    const newPost = await sendPost({ title: title, body: body, userId: 1 });
    addPost(newPost);
  };

  const handleDelete = async (postId: number) => {
    const deletedPost = await deletePostById(postId);
    if (deletedPost) deletePost(postId);
  };

  return (
    <>
      {/* Add Post */}
      <Box
        padding={2}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <TextField
          id="title"
          label="Title"
          variant="standard"
          onChange={onSetTitle}
        />
        <TextField
          id="body"
          label="Body"
          variant="standard"
          onChange={onSetBody}
        />
        <Button variant="contained" onClick={() => onSubmitPost()}>
          Send
        </Button>
      </Box>

      {/* Post List */}
      <ul style={{ listStyle: "none", paddingLeft: "0" }}>
        {posts.map((post) => (
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            key={post.id}
          >
            <Stack
              direction="row"
              justifyContent="flex-start"
              flexGrow={1}
              p={2}
              alignItems="center"
            >
              <Avatar src="" />
              <Box marginLeft={2} flexDirection="column" flex={10}>
                <Typography color="black" variant="h6">
                  {post.title}
                </Typography>
                <Typography color="gray">{post.body}</Typography>
              </Box>
            </Stack>
            <Box style={{ display: "flex", gap: "3px" }}>
              <Button variant="outlined" color="success">
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(post.id as number)}
                variant="outlined"
                color="error"
              >
                Delete
              </Button>
            </Box>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
