import React, { useState, useEffect } from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

export default () => {
  return (
    <div className="container">
      <div className="row">
        <CommentBox />
      </div>
      <div className="row">
        <CommentList />
      </div>
    </div>
  );
};
