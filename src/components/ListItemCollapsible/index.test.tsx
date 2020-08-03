import React from "react";
import renderer from "react-test-renderer";
import { IListItemCollapsible } from "../../types/ListItem";
import { getTestable } from "../../utils/tests";
import ListItemCollapsible, { DATA_CY_DEFAULT } from ".";
import { Icons } from "../../types/Icon";

const defaultProps: IListItemCollapsible = {
  header: <span>Collapsible Header</span>,
};

// TODO: unify dataCy generation
const getListItemCollapsibleTestable = (props?: IListItemCollapsible, dataCy = DATA_CY_DEFAULT, domNode = "li") =>
  getTestable(ListItemCollapsible, { dataCy, domNode, props: { ...defaultProps, ...props } });

describe("ListItemCollapsible test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getListItemCollapsibleTestable({ ...defaultProps }, `${DATA_CY_DEFAULT}-header`);
    expect(wrapper).toHaveLength(1);
    const icon = wrapper.find(`Icon[dataCy='${DATA_CY_DEFAULT}-header-icon']`);
    expect(icon.prop("name")).toEqual(Icons.down);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getListItemCollapsibleTestable({ ...defaultProps, dataCy: "custom" }, "custom-header");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("listItem variants", () => {
    const { element, wrapper } = getListItemCollapsibleTestable(
      { ...defaultProps, dense: true, loading: true, selected: true },
      `${DATA_CY_DEFAULT}-header`
    );
    expect(wrapper.hasClass("MuiListItem-dense"));
    expect(wrapper.hasClass("MuiListItem-selected"));
    const contentWrapper = wrapper.find(`div[data-cy='${DATA_CY_DEFAULT}-header-content']`);
    expect(contentWrapper).toHaveLength(0);
    const loadingContentWrapper = wrapper.find(`div[data-cy='${DATA_CY_DEFAULT}-header-content-loading']`);
    expect(loadingContentWrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("open", () => {
    const { element: header, wrapper: headerWrapper } = getListItemCollapsibleTestable(
      { ...defaultProps, open: true },
      `${DATA_CY_DEFAULT}-header`
    );
    const icon = headerWrapper.find(`Icon[dataCy='${DATA_CY_DEFAULT}-header-icon']`);
    expect(icon.prop("name")).toEqual(Icons.up);

    const { element: collapsible, wrapper: collapsibleWrapper } = getListItemCollapsibleTestable(
      { ...defaultProps, open: true },
      `${DATA_CY_DEFAULT}-collapse`,
      "div"
    );
    expect(collapsibleWrapper).toHaveLength(1);
    expect(collapsibleWrapper.hasClass("MuiCollapse-entered"));

    const snapshotHeaderWrapper = renderer.create(header).toJSON();
    expect(snapshotHeaderWrapper).toMatchSnapshot();
    const snapshotCollapsibleWrapper = renderer.create(collapsible).toJSON();
    expect(snapshotCollapsibleWrapper).toMatchSnapshot();
  });

  it("open variants", () => {
    const { element } = getListItemCollapsibleTestable(
      { ...defaultProps, open: true, openTimeout: 5, unmountContent: true },
      `${DATA_CY_DEFAULT}-collapse`,
      "div"
    );

    const snapshotHeaderWrapper = renderer.create(element).toJSON();
    expect(snapshotHeaderWrapper).toMatchSnapshot();
  });
});
