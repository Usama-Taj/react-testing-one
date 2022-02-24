import { mount } from "enzyme";
import React from "react";
import CommentBox from "components/CommentBox";
let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

it("has a textarea and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("input").length).toEqual(1);
});

it("has a text field in which users can type in", () => {
  const data = "new comment";
  // Input to compo
  wrapped.find("textarea").simulate("change", { target: { value: data } });
  // Re-rener Component
  wrapped.update();

  // check inside value
  expect(wrapped.find("textarea").prop("value")).toEqual(data);
});

it("when form get submitted textarea gets emptied", () => {
  wrapped.find("form").simulate("submit");
  console.log(wrapped.find("textarea").props());
  wrapped.update();
  console.log(wrapped.find("textarea").props());
  expect(wrapped.find("textarea").prop("value")).toEqual("");
});

afterEach(() => {
  wrapped.unmount();
});
