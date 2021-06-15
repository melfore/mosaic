import renderer from "react-test-renderer";

import { Icons } from "../../types/Icon";
import { InputSize, InputType, InputVariant } from "../../types/Input";
import { IInputText } from "../../types/InputText";
import { MessageMock } from "../../utils/mocks/IntlProviderMock";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import InputText, { DATA_CY_DEFAULT } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<IInputText> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "input",
  localized: true,
  props: {},
};

const getInputTextTestable = (options?: IPartialTestOptions<IInputText>) =>
  getTestableComponent(InputText, DEFAULT_TEST_OPTIONS, options);

describe("InputText test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getInputTextTestable();
    expect(wrapper).toHaveLength(1);

    expect(wrapper.hasClass("MuiOutlinedInput-input"));
    expect(wrapper.prop("disabled")).toBeFalsy();
    expect(wrapper.prop("required")).toBeFalsy();
    expect(wrapper.prop("type")).toEqual("text");

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getInputTextTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  // TODO: improve this to check label
  it("localized", () => {
    const label = MessageMock.title;
    const { element } = getInputTextTestable({ dataCy: label, props: { label, localized: true } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  // TODO: improve this to check adornment icon
  it("adornment", () => {
    const onClick = jest.fn();
    const { element, wrapper } = getInputTextTestable({ props: { adornment: { icon: Icons.account, onClick } } });

    expect(wrapper.hasClass("MuiInputBase-inputAdornedEnd"));
    expect(wrapper.hasClass("MuiOutlinedInput-inputAdornedEnd"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("disabled", () => {
    const { element, wrapper } = getInputTextTestable({ props: { disabled: true } });
    expect(wrapper.prop("disabled")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("multiline", () => {
    const rows = 5;
    const rowsMax = 10;
    const { wrapper } = getInputTextTestable({
      domNode: "textarea",
      props: { multiline: { rows, rowsMax } },
    });

    expect(wrapper.prop("rows")).toEqual(rows);

    // TODO: investigate over here, element for textarea is not recognized
    // const snapshotWrapper = renderer.create(element).toJSON();
    // expect(snapshotWrapper).toMatchSnapshot();
  });

  it("onChange", () => {
    const onChange = jest.fn();
    const { element, wrapper } = getInputTextTestable({ props: { onChange } });

    wrapper.simulate("change", { target: { value: "Textual Value" } });
    expect(onChange).toHaveBeenCalledWith("Textual Value");

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("password", () => {
    const { element, wrapper } = getInputTextTestable({ props: { type: InputType.password } });
    expect(wrapper.prop("type")).toEqual("password");

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("placeholder", () => {
    const placeholder = "Placeholder";
    const { element, wrapper } = getInputTextTestable({ props: { placeholder } });
    expect(wrapper.prop("placeholder")).toEqual(placeholder);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("required", () => {
    const { element, wrapper } = getInputTextTestable({ props: { required: true } });
    expect(wrapper.prop("required")).toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("size", () => {
    const { element, wrapper } = getInputTextTestable({ props: { size: InputSize.small } });

    expect(wrapper.hasClass("MuiInputBase-inputMarginDense"));
    expect(wrapper.hasClass("MuiOutlinedInput-inputMarginDense"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("value", () => {
    const value = "Initial Text Value";
    const { element, wrapper } = getInputTextTestable({ props: { value } });
    expect(wrapper.prop("value")).toEqual(value);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("variant", () => {
    const { element, wrapper } = getInputTextTestable({ props: { variant: InputVariant.filled } });
    expect(wrapper.hasClass("MuiFilledInput-input"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
