import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
const CommentList = ({ comments }) => {
  const renderComments = () =>
    comments.map((comment, i) => <li key={i}>{comment}</li>);
  return (
    <>
      <div className="row">
        <h5>Your Comments</h5>
      </div>
      <div className="row">
        <ul>{renderComments()}</ul>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { comments: state.comments };
};

export default connect(mapStateToProps)(CommentList);
