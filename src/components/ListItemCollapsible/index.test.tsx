import React from "react";
import renderer from "react-test-renderer";

import { Icons } from "../../types/Icon";
import { IListItemCollapsible } from "../../types/ListItem";
import { getComposedDataCy } from "../../utils";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import ListItemCollapsible, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<IListItemCollapsible> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "li",
  props: { header: <span>Collapsible Header</span> },
};

const getListItemCollapsibleTestable = (options?: IPartialTestOptions<IListItemCollapsible>) =>
  getTestableComponent(ListItemCollapsible, DEFAULT_TEST_OPTIONS, options);

describe("ListItemCollapsible test suite:", () => {
  it("default", () => {
    const headerDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.header);
    const { element, wrapper } = getListItemCollapsibleTestable({ dataCy: headerDataCy });
    expect(wrapper).toHaveLength(1);

    const icon = wrapper.find(`Icon[dataCy='${headerDataCy}-icon']`);
    expect(icon.prop("name")).toEqual(Icons.down);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getListItemCollapsibleTestable({
      dataCy: getComposedDataCy(dataCy, SUBPARTS_MAP.header),
      props: { dataCy },
    });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("listItem variants", () => {
    const headerDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.header);
    const { element, wrapper } = getListItemCollapsibleTestable({
      dataCy: headerDataCy,
      props: { dense: true, loading: true, selected: true },
    });

    expect(wrapper.hasClass("MuiListItem-dense"));
    expect(wrapper.hasClass("MuiListItem-selected"));

    const contentWrapper = wrapper.find(`div[data-cy='${headerDataCy}-content']`);
    expect(contentWrapper).toHaveLength(0);

    const loadingContentWrapper = wrapper.find(`div[data-cy='${headerDataCy}-content-loading']`);
    expect(loadingContentWrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("open", () => {
    const headerDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.header);
    const { element: header, wrapper: headerWrapper } = getListItemCollapsibleTestable({
      dataCy: headerDataCy,
      props: { open: true },
    });

    const icon = headerWrapper.find(`Icon[dataCy='${headerDataCy}-icon']`);
    expect(icon.prop("name")).toEqual(Icons.up);

    const collapseDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.collapse);
    const { element: collapsible, wrapper: collapsibleWrapper } = getListItemCollapsibleTestable({
      dataCy: collapseDataCy,
      domNode: "div",
      props: { open: true },
    });

    expect(collapsibleWrapper).toHaveLength(1);
    expect(collapsibleWrapper.hasClass("MuiCollapse-entered"));

    const snapshotHeaderWrapper = renderer.create(header).toJSON();
    expect(snapshotHeaderWrapper).toMatchSnapshot();
    const snapshotCollapsibleWrapper = renderer.create(collapsible).toJSON();
    expect(snapshotCollapsibleWrapper).toMatchSnapshot();
  });

  it("open variants", () => {
    const collapseDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.collapse);
    const { element } = getListItemCollapsibleTestable({
      dataCy: collapseDataCy,
      domNode: "div",
      props: { open: true, openTimeout: 5, unmountContent: true },
    });

    const snapshotHeaderWrapper = renderer.create(element).toJSON();
    expect(snapshotHeaderWrapper).toMatchSnapshot();
  });
});
