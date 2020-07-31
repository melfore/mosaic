import React from "react";
import { mount } from "enzyme";
import Typography from "../Typography";
import Card from ".";
import { Icons } from "../../types/Icon";

const defaultProps = {
  children: <Typography children="Card Content" />,
  title: "Card Title",
};

const componentWrapper = (props = {}) => <Card {...defaultProps} {...props} />;

describe("Card test suite:", () => {
  it("default", () => {
    const component = componentWrapper();
    const wrapper = mount(component);
    const cardHeader = wrapper.find("div.MuiCardHeader-root");
    const cardTitle = cardHeader.find("h2");
    expect(cardTitle.text()).toEqual("Card Title");
    const cardContent = wrapper.find("div.MuiCardContent-root").childAt(0);
    expect(cardContent.matchesElement(defaultProps.children)).toBeTruthy();
  });

  it("with icon", () => {
    const component = componentWrapper({ icon: Icons.business });
    const wrapper = mount(component);
    const cardHeader = wrapper.find("div.MuiCardHeader-root");
    const cardAvatar = cardHeader.find("div.MuiAvatar-root");
    const cardIcon = cardAvatar.find("Icon");
    expect(cardIcon.prop("name")).toEqual(Icons.business);
  });

  it("with collapsible", () => {
    const collapsibleContent = <Typography children="Card Collapsible Content" />;
    const component = componentWrapper({ collapsible: collapsibleContent });
    const wrapper = mount(component);
    const cardContents = wrapper.find("div.MuiCardContent-root");
    const cardCollapsibleContent = cardContents.at(1).childAt(0);
    expect(cardCollapsibleContent.matchesElement(collapsibleContent)).toBeTruthy();
  });
});
