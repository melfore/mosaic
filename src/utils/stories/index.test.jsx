import React from "react";
import { mount } from "enzyme";
import { DOCS_PAGE_STRUCTURE, StoriesWrapper } from ".";

describe("DOCS_PAGE_STRUCTURE test suite:", () => {
  it("default", () => {
    expect(DOCS_PAGE_STRUCTURE).not.toBeFalsy();
    const {
      docs,
      docs: { page },
    } = DOCS_PAGE_STRUCTURE;
    expect(docs).not.toBeFalsy();
    const pageStructure = page();
    expect(pageStructure).not.toBeFalsy();
  });
});

describe("StoriesWrapper test suite:", () => {
  it("default", () => {
    const children = <span>Test Children</span>;
    const component = <StoriesWrapper>{children}</StoriesWrapper>;
    const wrapper = mount(component);
    const storiesWrapper = wrapper.find("div.stories-wrapper");
    expect(storiesWrapper).not.toBeFalsy();
    const storyHTML = storiesWrapper.childAt(0).html();
    expect(storyHTML).toEqual("<span>Test Children</span>");
  });
});
