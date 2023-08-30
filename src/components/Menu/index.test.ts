import { IMenu } from "../../types/Menu";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Menu, { DATA_CY_DEFAULT } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<IMenu> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "button",
  localized: true,
  props: {
    label: "Menu",
    items: [
      {
        label: "Logout",
        value: "logout",
      },
    ],
  },
};

const getInputNumberTestable = (options?: IPartialTestOptions<IMenu>) =>
  getTestableComponent(Menu, DEFAULT_TEST_OPTIONS, options);

describe("Menu test suite:", () => {
  it("default", () => {
    const { wrapper } = getInputNumberTestable();
    expect(wrapper).toHaveLength(1);
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { wrapper } = getInputNumberTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);
  });

  it("icon", () => {
    const { wrapper } = getInputNumberTestable({ props: { type: "icon" } });
    expect(wrapper).toHaveLength(1);
  });
});
