import renderer from "react-test-renderer";

import { CheckboxSize, ICheckbox } from "../../types/Checkbox";
import { getComposedDataCy } from "../../utils";
import { LocaleMock, MessageMock, mockedMessages } from "../../utils/mocks/IntlProviderMock";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Checkbox, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<ICheckbox> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "label",
  localized: true,
  props: {},
};

const getCheckboxTestable = (options?: IPartialTestOptions<ICheckbox>) =>
  getTestableComponent(Checkbox, DEFAULT_TEST_OPTIONS, options);

describe("Checkbox test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getCheckboxTestable();
    expect(wrapper).toHaveLength(1);

    const inputDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.input);
    const input = wrapper.find(`input[data-cy='${inputDataCy}']`);
    expect(input.prop("checked")).toBeFalsy();
    expect(input.prop("data-indeterminate")).toBeFalsy();
    expect(input.prop("disabled")).toBeFalsy();
    expect(input.prop("required")).toBeFalsy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getCheckboxTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("localized", () => {
    const label = MessageMock.checkbox;
    const { element, wrapper } = getCheckboxTestable({ dataCy: label, props: { label, localized: true } });

    const labelElement = wrapper.find("span.MuiFormControlLabel-label");
    expect(labelElement.text()).toEqual(mockedMessages[LocaleMock.en][label]);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("checked", () => {
    const { element, wrapper } = getCheckboxTestable({ props: { value: true } });

    const inputDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.input);
    const input = wrapper.find(`input[data-cy='${inputDataCy}']`);
    expect(input.prop("checked")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("disabled", () => {
    const { element, wrapper } = getCheckboxTestable({ props: { disabled: true } });

    const inputDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.input);
    const input = wrapper.find(`input[data-cy='${inputDataCy}']`);
    expect(input.prop("disabled")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("intermediate", () => {
    const { element, wrapper } = getCheckboxTestable({ props: { intermediate: true } });

    const inputDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.input);
    const input = wrapper.find(`input[data-cy='${inputDataCy}']`);
    expect(input.prop("data-indeterminate")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("label", () => {
    const label = "Checkbox";
    const { element, wrapper } = getCheckboxTestable({ props: { label } });

    const labelElement = wrapper.find("span.MuiFormControlLabel-label");
    expect(labelElement.text()).toEqual(label);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("label placement", () => {
    const label = "Checkbox";
    const { element, wrapper } = getCheckboxTestable({ props: { label, labelPlacement: "end" } });

    const labelElement = wrapper.find("span.MuiFormControlLabel-label");
    expect(labelElement.text()).toEqual(label);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("onChange", () => {
    const onChange = jest.fn();
    const { element, wrapper } = getCheckboxTestable({ props: { onChange } });

    const inputDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.input);
    const input = wrapper.find(`input[data-cy='${inputDataCy}']`);
    input.simulate("change", { target: { checked: true } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("onChange - not handled", () => {
    const { element, wrapper } = getCheckboxTestable();

    const inputDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.input);
    const input = wrapper.find(`input[data-cy='${inputDataCy}']`);
    input.simulate("change", { target: { checked: true } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("required", () => {
    const { element, wrapper } = getCheckboxTestable({ props: { required: true } });

    const inputDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.input);
    const input = wrapper.find(`input[data-cy='${inputDataCy}']`);
    expect(input.prop("required")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("size", () => {
    const { element } = getCheckboxTestable({ props: { size: CheckboxSize.small } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
