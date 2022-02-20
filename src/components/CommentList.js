import { Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Comment from "./Comment";
const CommentList = () => {
  return (
    <Paper sx={{ p: 5 }}>
      <Typography variant="h5">Comment List</Typography>
    </Paper>
  );
};

export default CommentList;
