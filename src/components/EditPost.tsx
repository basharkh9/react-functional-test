import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getPost, Post, updatePost } from "../API";
import CommentList from "./CommentList";

const EditPost = () => {
  let navigate = useNavigate();
  let { id } = useParams<string>();
  const [post, setPost] = useState<Post>({ title: "", body: "" });

  useEffect(() => {
    if (id) getPost(parseInt(id)).then(setPost);
  }, [id]);

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (post) setPost({ ...post, [evt.target.name]: evt.target.value });
  };

  const savePost = async () => {
    if (post.id) {
      await updatePost(post.id)
        .then(setPost)
        .catch((e) => console.log(e));
      navigate(`/`, { state: post });
    }
  };
  return (
    <Box flex={6} p={2} paddingLeft={0}>
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
          value={post.title}
          name="title"
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          id="body"
          label="Body"
          variant="standard"
          value={post.body}
          name="body"
          onChange={handleInputChange}
          fullWidth
        />
        <Button variant="contained" onClick={savePost}>
          Save
        </Button>
      </Box>
      <CommentList postId={post.id as number} />
    </Box>
  );
};

export default EditPost;
