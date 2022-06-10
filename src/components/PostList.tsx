import {
  Avatar,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { sendPost, Post } from "../API";

const PostList: React.FunctionComponent<{
  posts: Post[];
  addPost: (post: Post) => void;
}> = ({ posts, addPost }) => {
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

export default PostList;
