import React from "react";
import renderer from "react-test-renderer";
import { IListItem } from "../../types/ListItem";
import { getTestable } from "../../utils/tests";
import ListItem, { DATA_CY_DEFAULT } from ".";
import { Icons } from "../../types/Icon";

const defaultProps: IListItem = {};

const getListItemTestable = (props?: IListItem, dataCy = DATA_CY_DEFAULT) =>
  getTestable(ListItem, { dataCy, domNode: "li", props: { ...defaultProps, ...props } });

describe("ListItem test suite:", () => {
  it("default", () => {
    const content = <span>"List Item"</span>;
    const { element, wrapper } = getListItemTestable({ content });
    expect(wrapper).toHaveLength(1);
    const contentWrapper = wrapper.find(`div[data-cy='${DATA_CY_DEFAULT}-content']`);
    expect(contentWrapper.childAt(0).matchesElement(content)).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getListItemTestable({ dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dense", () => {
    const { element, wrapper } = getListItemTestable({ dense: true });
    expect(wrapper.hasClass("MuiListItem-dense"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("icon", () => {
    const { element, wrapper } = getListItemTestable({ icon: Icons.account });
    const icon = wrapper.find(`Icon[dataCy='${DATA_CY_DEFAULT}-icon']`);
    expect(icon.prop("name")).toEqual(Icons.account);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading", () => {
    const onClickHandler = jest.fn();
    const { element, wrapper } = getListItemTestable({ onClick: onClickHandler, loading: true });
    wrapper.simulate("click");
    expect(onClickHandler).toHaveBeenCalledTimes(0);
    const contentWrapper = wrapper.find(`div[data-cy='${DATA_CY_DEFAULT}-content']`);
    expect(contentWrapper).toHaveLength(0);
    const loadingContentWrapper = wrapper.find(`div[data-cy='${DATA_CY_DEFAULT}-content-loading']`);
    expect(loadingContentWrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("onClick", () => {
    const onClickHandler = jest.fn();
    const { element, wrapper } = getListItemTestable({ onClick: onClickHandler });
    wrapper.simulate("click");
    expect(onClickHandler).toHaveBeenCalledTimes(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("selected", () => {
    const { element, wrapper } = getListItemTestable({ selected: true });
    expect(wrapper.hasClass("MuiListItem-selected"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
