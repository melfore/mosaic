import React from "react";
import renderer from "react-test-renderer";
import MUIStyleIcon from "@material-ui/icons/Style";

import { ButtonIconPosition, ButtonVariants, IButton } from "../../types/Button";
import { Icons } from "../../types/Icon";
import { getComposedDataCy } from "../../utils";
import { getLocalizedMessageMock, MessageMock } from "../../utils/mocks/LocaleMock";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Button, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<IButton> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "button",
  localized: true,
  props: {
    label: "Button",
    onClick: jest.fn(),
  },
};

const getButtonTestable = (options?: IPartialTestOptions<IButton>) =>
  getTestableComponent(Button, DEFAULT_TEST_OPTIONS, options);

describe("Button test suite:", () => {
  it("default", () => {
    const onClick = jest.fn();
    const { element, wrapper } = getButtonTestable({ props: { onClick } });
    expect(wrapper).toHaveLength(1);

    expect(wrapper.hasClass("MuiButton-contained"));
    expect(wrapper.prop("disabled")).toBeFalsy();
    expect(wrapper.prop("elevated")).toBeFalsy();
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);

    const label = wrapper.find("span.MuiButton-label");
    expect(label.text()).toEqual(DEFAULT_TEST_OPTIONS.props.label);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getButtonTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("localized", () => {
    const label = MessageMock.button;
    const { element, wrapper } = getButtonTestable({ dataCy: label, props: { label, localized: true } });

    const labelElement = wrapper.find("span.MuiButton-label");
    expect(labelElement.text()).toEqual(getLocalizedMessageMock(label, "en"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("disabled", () => {
    const { element, wrapper } = getButtonTestable({ props: { disabled: true } });
    expect(wrapper.prop("disabled")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("elevated", () => {
    const { element } = getButtonTestable({ props: { elevated: true } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("icon", () => {
    const { element, wrapper } = getButtonTestable({ props: { icon: { name: Icons.account } } });

    const iconDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.icon);
    const icon = wrapper.find(`Icon[dataCy='${iconDataCy}']`);
    expect(icon.prop("name")).toEqual(Icons.account);
    expect(icon.parent().hasClass("MuiButton-startIcon"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("icon - custom", () => {
    const { element, wrapper } = getButtonTestable({ props: { icon: { component: <MUIStyleIcon /> } } });
    const svgPath = wrapper.find("path");
    expect(
      svgPath.matchesElement(
        <path d="M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z" />
      )
    );

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("icon - left", () => {
    const { element, wrapper } = getButtonTestable({
      props: { icon: { name: Icons.account, position: ButtonIconPosition.left } },
    });

    const iconDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.icon);
    const icon = wrapper.find(`Icon[dataCy='${iconDataCy}']`);
    expect(icon.prop("name")).toEqual(Icons.account);
    expect(icon.parent().hasClass("MuiButton-startIcon"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("icon - right", () => {
    const { element, wrapper } = getButtonTestable({
      props: { icon: { name: Icons.account, position: ButtonIconPosition.right } },
    });

    const iconDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.icon);
    const icon = wrapper.find(`Icon[dataCy='${iconDataCy}']`);
    expect(icon.prop("name")).toEqual(Icons.account);
    expect(icon.parent().hasClass("MuiButton-endIcon"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("icon - rotate", () => {
    const { element, wrapper } = getButtonTestable({
      props: { icon: { name: Icons.account, rotate: true } },
    });

    const iconDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.icon);
    const icon = wrapper.find(`svg[data-cy='${iconDataCy}']`);
    expect(icon.hasClass("makeStyles-rotate-2")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("outlined", () => {
    const { element, wrapper } = getButtonTestable({ props: { variant: ButtonVariants.outlined } });
    expect(wrapper.hasClass("MuiButton-outlined"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
