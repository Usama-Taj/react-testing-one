import React from "react";
import shallow from "enzyme/build/shallow";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  // Get App Component
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

// it("shows a comment box", () => {
//   // Creates a Div in JSDOM(not in browser)
//   const div = document.createElement("div");
//   // Render the App Component on the div
//   ReactDOM.render(<App />, div);
//   // Check if the Comment Box and Comment List exist inside the App Component
//   // Clean Up the Mounted Componnet to free up some space and improve performance
//   expect(div.innerHTML).toContain("Comment Box");
//   expect(div.innerHTML).toHaveanin
//   ReactDOM.unmountComponentAtNode(div);
// });
