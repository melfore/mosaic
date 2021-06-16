// TODO: temp commenting out snapshots due to id="mui-XXXXX" property
// import renderer from "react-test-renderer";

import { ISelect } from "../../types/Select";
import { getComposedDataCy } from "../../utils";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Select, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<ISelect<any>> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "input",
  localized: true,
  props: {
    multiple: false,
    onChange: jest.fn(),
    options: ["Sculpture", "Photography", "Paintings", "Murales", "Mosaic"],
  },
};

const getSelectTestable = (options?: IPartialTestOptions<ISelect<any>>) =>
  getTestableComponent(Select, DEFAULT_TEST_OPTIONS, options);

// TODO: missing localized test
describe("Select Single test suite:", () => {
  it("default", () => {
    const { wrapper } = getSelectTestable();
    expect(wrapper).toHaveLength(1);

    expect(wrapper.hasClass("MuiOutlinedInput-input"));
    expect(wrapper.prop("disabled")).toBeFalsy();
    expect(wrapper.prop("required")).toBeFalsy();
    expect(wrapper.prop("type")).toEqual("text");
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { wrapper } = getSelectTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);
  });

  it("disabled", () => {
    const { wrapper } = getSelectTestable({ props: { disabled: true } });
    expect(wrapper.prop("disabled")).toBeTruthy();
  });

  // TODO: improve this by adding check on options and groupby
  it("groupBy", () => {
    getSelectTestable({
      props: {
        getGroupLabel: (option) => option.slice(0, 1),
        getOptionLabel: (option) => option.toUpperCase(),
        groupBy: (option) => option.slice(0, 1),
      },
    });
  });

  it("immutable options", () => {
    const frozenOptions = Object.freeze(["Photography", "Sculpture", "Mosaic", "Murales", "Paintings"]) as string[];
    getSelectTestable({ props: { options: frozenOptions } });
  });

  it("loading", () => {
    const outerWrapperDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.outerWrapper);
    const { wrapper } = getSelectTestable({ dataCy: outerWrapperDataCy, domNode: "div", props: { loading: true } });
    const placeholder = wrapper.find("span.MuiSkeleton-root");
    expect(placeholder).toHaveLength(1);
  });

  it("onChange - single", () => {
    const onChangeCallback = jest.fn();
    const outerWrapperDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.outerWrapper);
    const { wrapper } = getSelectTestable({
      dataCy: outerWrapperDataCy,
      domNode: "div",
      mountOnly: true,
      props: { onChange: onChangeCallback },
    });

    const input = wrapper.find(`input[data-cy='${DATA_CY_DEFAULT}']`);
    input.simulate("mousedown");

    const firstOption = wrapper.find(`li[data-option-index=0]`);
    firstOption.simulate("click");

    expect(onChangeCallback).toHaveBeenCalledTimes(1);
    expect(onChangeCallback).toHaveBeenCalledWith("Sculpture");
  });

  it("onChange - multiple", () => {
    const onChangeCallback = jest.fn();
    const outerWrapperDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.outerWrapper);
    const { wrapper } = getSelectTestable({
      dataCy: outerWrapperDataCy,
      domNode: "div",
      mountOnly: true,
      props: { multiple: true, onChange: onChangeCallback, value: [] },
    });

    const input = wrapper.find(`input[data-cy='${DATA_CY_DEFAULT}']`);
    input.simulate("mousedown");

    const firstOption = wrapper.find(`li[data-option-index=0]`);
    firstOption.simulate("click");

    expect(onChangeCallback).toHaveBeenCalledTimes(1);
    expect(onChangeCallback).toHaveBeenCalledWith(["Sculpture"]);
  });

  it("options - default", () => {
    const outerWrapperDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.outerWrapper);
    const { wrapper } = getSelectTestable({
      dataCy: outerWrapperDataCy,
      domNode: "div",
      mountOnly: true,
    });

    const input = wrapper.find(`input[data-cy='${DATA_CY_DEFAULT}']`);
    input.simulate("mousedown");

    const eachOptionDataCy = `${DATA_CY_DEFAULT}-option-`;
    const options = wrapper.find(`p[data-cy^='${eachOptionDataCy}']`);
    const optionsLabels = options.map((option) => option.text());
    expect(optionsLabels).toEqual(DEFAULT_TEST_OPTIONS.props.options);
  });

  it("options - autoSort", () => {
    const outerWrapperDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.outerWrapper);
    const { wrapper } = getSelectTestable({
      dataCy: outerWrapperDataCy,
      domNode: "div",
      mountOnly: true,
      props: { autoSort: true },
    });

    const input = wrapper.find(`input[data-cy='${DATA_CY_DEFAULT}']`);
    input.simulate("mousedown");

    const eachOptionDataCy = `${DATA_CY_DEFAULT}-option-`;
    const options = wrapper.find(`p[data-cy^='${eachOptionDataCy}']`);
    const optionsLabels = options.map((option) => option.text());
    expect(optionsLabels).toEqual(DEFAULT_TEST_OPTIONS.props.options.reverse());
  });

  it("placeholder", () => {
    const placeholder = "Placeholder";
    const { wrapper } = getSelectTestable({ props: { placeholder } });
    expect(wrapper.prop("placeholder")).toEqual(placeholder);
  });

  it("required", () => {
    const { wrapper } = getSelectTestable({ props: { required: true } });
    expect(wrapper.prop("required")).toBeTruthy();
  });

  it("value", () => {
    const value = DEFAULT_TEST_OPTIONS.props.options[0];
    const { wrapper } = getSelectTestable({ props: { value } });
    expect(wrapper.prop("value")).toEqual(value);
  });
});
