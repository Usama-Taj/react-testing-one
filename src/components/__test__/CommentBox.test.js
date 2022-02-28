import { mount } from "enzyme";
import React from "react";
import CommentBox from "components/CommentBox";
import Root from "Root";
let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

it("has a textarea and a button", () => {
  // check comment box input [type="textarea"]
  expect(wrapped.find("textarea").length).toEqual(1);
  // check comment box component input[type="submit"]
  expect(wrapped.find("input").length).toEqual(1);
});

// Describe multiple test cases
describe("the text area", () => {
  let data = "new comment";
  beforeEach(() => {
    // Input to compo
    wrapped.find("textarea").simulate("change", { target: { value: data } });
    // Re-rener Component to check state change
    wrapped.update();
  });
  it("has a text field in which users can type in", () => {
    // check inside value
    expect(wrapped.find("textarea").prop("value")).toEqual(data);
  });

  it("when form get submitted textarea gets emptied", () => {
    // simulate submit event
    wrapped.find("form").simulate("submit");
    // to check state change
    wrapped.update();
    // check state value that is shown in the textarea
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});

afterEach(() => {
  // to free up jsDom
  wrapped.unmount();
});
