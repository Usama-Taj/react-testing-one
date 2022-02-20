import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
const CommentBox = () => {
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  };
  return (
    <Paper elevation={10} sx={{ p: 5 }}>
      <Stack spacing={2}>
        <Typography variant="h5" sx={{ marginY: 2 }}>
          Type Your Comment:
        </Typography>
        <TextField
          id="comment"
          label="Comment"
          placeholder="Enter Comment"
          multiline
          rows={5}
          variant="outlined"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Create
        </Button>
      </Stack>
    </Paper>
  );
};

export default CommentBox;
