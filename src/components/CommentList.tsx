import { Avatar, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Comment, getCommentsByPostId } from "../API";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

interface CommentsProps {
  postId: number;
}

const CommentList: React.FunctionComponent<CommentsProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    getCommentsByPostId(postId).then(setComments);
  }, [postId]);
  return (
    <Box>
      <Box display="flex" gap={2} p={2} flexDirection="row">
        <ChatBubbleOutlineIcon />
        <Typography>{comments.length}</Typography>
        <Typography>comments</Typography>
      </Box>
      <ul style={{ listStyle: "none", paddingLeft: "0" }}>
        {comments.map((c) => (
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            key={c.id}
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
                  {c.name}
                </Typography>
                <Typography color="gray">{c.body}</Typography>
              </Box>
            </Stack>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default CommentList;
