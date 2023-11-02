import React from "react";
import renderer from "react-test-renderer";

import { Icons } from "../../types/Icon";
import { IListItem } from "../../types/ListItem";
import { getComposedDataCy } from "../../utils";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import ListItem, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<IListItem> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "li",
  props: {},
};

const getListItemTestable = (options?: IPartialTestOptions<IListItem>) =>
  getTestableComponent(ListItem, DEFAULT_TEST_OPTIONS, options);

describe("ListItem test suite:", () => {
  it("default", () => {
    const content = <span>List Item</span>;
    const { element, wrapper } = getListItemTestable({ props: { content } });
    expect(wrapper).toHaveLength(1);

    const contentDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.content);
    const contentWrapper = wrapper.find(`div[data-cy='${contentDataCy}']`);
    expect(contentWrapper.childAt(0).matchesElement(content)).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getListItemTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dense", () => {
    const { element, wrapper } = getListItemTestable({ props: { dense: true } });
    expect(wrapper.hasClass("MuiListItem-dense"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("icon", () => {
    const { element, wrapper } = getListItemTestable({ props: { icon: Icons.account } });

    const iconDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.icon);
    const icon = wrapper.find(`Icon[dataCy='${iconDataCy}']`);
    expect(icon.prop("name")).toEqual(Icons.account);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading", () => {
    const onClick = jest.fn();
    const { element, wrapper } = getListItemTestable({ props: { onClick, loading: true } });

    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(0);
    const contentWrapper = wrapper.find(`div[data-cy='${DATA_CY_DEFAULT}-content']`);
    expect(contentWrapper).toHaveLength(0);
    const loadingContentWrapper = wrapper.find(`div[data-cy='${DATA_CY_DEFAULT}-content-loading']`);
    expect(loadingContentWrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("onClick", () => {
    const onClick = jest.fn();
    const { element, wrapper } = getListItemTestable({ props: { onClick } });

    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("selected", () => {
    const { element, wrapper } = getListItemTestable({ props: { selected: true } });
    expect(wrapper.hasClass("MuiListItem-selected"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
