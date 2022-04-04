import React from "react";
import renderer from "react-test-renderer";
import MUIStyleIcon from "@mui/icons-material/Style";

import { Icons } from "../../types/Icon";
import { IIconButton } from "../../types/IconButton";
import { getComposedDataCy } from "../../utils";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import IconButton, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const DEFAULT_TEST_OPTION: ITestOptions<IIconButton> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "button",
  props: { icon: Icons.account, onClick: jest.fn() },
};

const getIconButtonTestable = (options?: IPartialTestOptions<IIconButton>) =>
  getTestableComponent(IconButton, DEFAULT_TEST_OPTION, options);

describe("IconButton test suite:", () => {
  it("default", () => {
    const onClick = jest.fn();
    const { element, wrapper } = getIconButtonTestable({ props: { onClick } });
    expect(wrapper).toHaveLength(1);

    expect(wrapper.prop("disabled")).toBeFalsy();
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);

    const iconDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.icon);
    const icon = wrapper.find(`Icon[dataCy='${iconDataCy}']`);
    expect(icon.prop("name")).toEqual(DEFAULT_TEST_OPTION.props.icon);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getIconButtonTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("custom icon", () => {
    const { element, wrapper } = getIconButtonTestable({ props: { children: <MUIStyleIcon /> } } as any);
    const svgPath = wrapper.find("path");
    expect(
      svgPath.matchesElement(
        <path d="M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z" />
      )
    );

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("disabled", () => {
    const { element, wrapper } = getIconButtonTestable({ props: { disabled: true } });
    expect(wrapper.prop("disabled")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("rotate", () => {
    const { element, wrapper } = getIconButtonTestable({ props: { rotate: true } });

    const iconDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.icon);
    const icon = wrapper.find(`svg[data-cy='${iconDataCy}']`);
    expect(icon.hasClass("makeStyles-rotate-2")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("size", () => {
    const { element, wrapper } = getIconButtonTestable({ props: { size: "small" } });

    const iconDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.icon);
    const icon = wrapper.find(`Icon[dataCy='${iconDataCy}']`);
    expect(icon.prop("size")).toEqual("small");

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
