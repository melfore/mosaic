import renderer from "react-test-renderer";

import { ISwitch, SwitchSize } from "../../types/Switch";
import { getComposedDataCy } from "../../utils";
import { getLocalizedMessageMock, MessageMock } from "../../utils/mocks/LocaleMock";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Switch, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<ISwitch> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "label",
  localized: true,
  props: {},
};

const getSwitchTestable = (options?: IPartialTestOptions<ISwitch>) =>
  getTestableComponent(Switch, DEFAULT_TEST_OPTIONS, options);

describe("Switch test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getSwitchTestable();
    expect(wrapper).toHaveLength(1);

    const inputDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.input);
    const input = wrapper.find(`input[data-cy='${inputDataCy}']`);
    expect(input.prop("checked")).toBeFalsy();
    expect(input.prop("disabled")).toBeFalsy();
    expect(input.prop("required")).toBeFalsy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getSwitchTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("localized", () => {
    const label = MessageMock.switch;
    const { element, wrapper } = getSwitchTestable({ dataCy: label, props: { label, localized: true } });

    const labelElement = wrapper.find("span.MuiFormControlLabel-label");
    expect(labelElement.text()).toEqual(getLocalizedMessageMock(label, "en"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("checked", () => {
    const { element, wrapper } = getSwitchTestable({ props: { value: true } });

    const inputDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.input);
    const input = wrapper.find(`input[data-cy='${inputDataCy}']`);
    expect(input.prop("checked")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("disabled", () => {
    const { element, wrapper } = getSwitchTestable({ props: { disabled: true } });

    const inputDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.input);
    const input = wrapper.find(`input[data-cy='${inputDataCy}']`);
    expect(input.prop("disabled")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("label", () => {
    const label = "Switch";
    const { element, wrapper } = getSwitchTestable({ props: { label } });

    const labelElement = wrapper.find("span.MuiFormControlLabel-label");
    expect(labelElement.text()).toEqual(label);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("label placement", () => {
    const label = "Switch";
    const { element, wrapper } = getSwitchTestable({ props: { label, labelPlacement: "end" } });

    const labelElement = wrapper.find("span.MuiFormControlLabel-label");
    expect(labelElement.text()).toEqual(label);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("onChange", () => {
    const onChange = jest.fn();
    const { element, wrapper } = getSwitchTestable({ props: { onChange } });

    const inputDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.input);
    const input = wrapper.find(`input[data-cy='${inputDataCy}']`);
    input.simulate("change", { target: { checked: true } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("onChange - not handled", () => {
    const { element, wrapper } = getSwitchTestable();

    const inputDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.input);
    const input = wrapper.find(`input[data-cy='${inputDataCy}']`);
    input.simulate("change", { target: { checked: true } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("required", () => {
    const { element, wrapper } = getSwitchTestable({ props: { required: true } });

    const inputDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.input);
    const input = wrapper.find(`input[data-cy='${inputDataCy}']`);
    expect(input.prop("required")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("size", () => {
    const { element } = getSwitchTestable({ props: { size: SwitchSize.small } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
