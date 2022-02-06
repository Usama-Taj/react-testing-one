import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
export default () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 10,
          ml: 20,
          width: 1228,
          height: 128,
        },
      }}
    >
      <Paper elevation={3}>
        <CommentBox />
      </Paper>
      <Paper elevation={3}>
        <CommentList />
      </Paper>
    </Box>
  );
};
