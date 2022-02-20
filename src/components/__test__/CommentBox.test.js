import { mount } from "enzyme";
import React from "react";
import CommentBox from "components/CommentBox";
import { Button, TextField } from "@mui/material";
let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

it("has a textarea and a button", () => {
  expect(wrapped.find(Button).length).toEqual(1);
  expect(wrapped.find(TextField).length).toEqual(1);
});

afterEach(() => {
  wrapped.unmount();
});
