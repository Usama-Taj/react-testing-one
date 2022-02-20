import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import { Stack } from "@mui/material";
export default () => {
  return (
    <Stack spacing={2}>
      <CommentBox />
      <CommentList />
    </Stack>
  );
};
