import renderer from "react-test-renderer";
import { ICard } from "../../types/Card";
import { getLocalizedTestable } from "../../utils/tests";
import Card, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT } from ".";

const defaultProps: ICard = {
  title: "Card",
};

const getCardTestable = (props?: ICard, dataCy = DATA_CY_DEFAULT) =>
  getLocalizedTestable(Card, { dataCy, domNode: "div", props: { ...defaultProps, ...props } });

// TODO: complete tests

describe("Card test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getCardTestable();
    // console.log(wrapper.debug());
    expect(wrapper).toHaveLength(1);
    expect("default-props-check").toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getCardTestable({ ...defaultProps, dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  xit("localized", () => {
    const props = { ...defaultProps, localized: true };
    const { element, wrapper } = getCardTestable({ ...props }, props[DATA_CY_SHORTCUT]);
    // console.log(wrapper.debug());
    expect("localizable-props-check").toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
