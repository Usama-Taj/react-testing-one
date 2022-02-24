import React, { useState, useEffect } from "react";
const CommentBox = () => {
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    setComment("");
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="my-2">
      <div className="row">
        <h2>Type your comment</h2>
      </div>
      <div className="row">
        <div className="form-group my-2">
          <label htmlFor="comment">Comment</label>
          <textarea
            className="form-control"
            placeholder="Enter your comment"
            name="comment"
            id="comment_id"
            cols="30"
            rows="10"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
        </div>
      </div>
      <div className="row px-2">
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default CommentBox;
