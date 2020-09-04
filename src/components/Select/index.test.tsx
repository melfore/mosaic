// TODO: temp commenting out snapshots due to id="mui-XXXXX" property
// import renderer from "react-test-renderer";

import { ISelect } from "../../types/Select";
import { getLocalizedTestable } from "../../utils/tests";

import Select, { DATA_CY_DEFAULT } from ".";

const defaultProps: ISelect<string> = {
  multiple: false,
  onChange: jest.fn(),
  options: ["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"],
};

const getSelectTestable = (props: ISelect<string>, dataCy = DATA_CY_DEFAULT, domNode = "input") =>
  getLocalizedTestable(Select, { dataCy, domNode, props: { ...props } });

// TODO: missing localized test

describe("Select Single test suite:", () => {
  it("default", () => {
    const { wrapper } = getSelectTestable(defaultProps);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.hasClass("MuiOutlinedInput-input"));
    expect(wrapper.prop("disabled")).toBeFalsy();
    expect(wrapper.prop("required")).toBeFalsy();
    expect(wrapper.prop("type")).toEqual("text");
  });

  it("dataCy", () => {
    const { wrapper } = getSelectTestable({ ...defaultProps, dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);
  });

  it("disabled", () => {
    const { wrapper } = getSelectTestable({ ...defaultProps, disabled: true });
    expect(wrapper.prop("disabled")).toBeTruthy();
  });

  // TODO: improve this by adding check on options and groupby
  it("groupBy", () => {
    getSelectTestable({
      ...defaultProps,
      getGroupLabel: (option) => option.slice(0, 1),
      getOptionLabel: (option) => option.toUpperCase(),
      groupBy: (option) => option.slice(0, 1),
    });
  });

  it("immutable options", () => {
    const frozenOptions = Object.freeze(["Photography", "Sculpture", "Mosaic", "Murales", "Paintings"]) as string[];
    getSelectTestable({ ...defaultProps, options: frozenOptions });
  });

  it("loading", () => {
    const { wrapper } = getSelectTestable(
      { ...defaultProps, loading: true },
      `${DATA_CY_DEFAULT}-outer-wrapper`,
      "div"
    );
    const placeholder = wrapper.find("span.MuiSkeleton-root");
    expect(placeholder).toHaveLength(1);
  });

  it("placeholder", () => {
    const placeholder = "Placeholder";
    const { wrapper } = getSelectTestable({ ...defaultProps, placeholder });
    expect(wrapper.prop("placeholder")).toEqual(placeholder);
  });

  it("required", () => {
    const { wrapper } = getSelectTestable({ ...defaultProps, required: true });
    expect(wrapper.prop("required")).toBeTruthy();
  });

  it("value", () => {
    const { wrapper } = getSelectTestable({ ...defaultProps, value: defaultProps.options[0] });
    expect(wrapper.prop("value")).toEqual(defaultProps.options[0]);
  });
});
