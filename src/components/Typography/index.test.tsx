import renderer from "react-test-renderer";
import { ITypography, TypographyVariants, TypographyDisplay } from "../../types/Typography";
import { getLocalizedTestable } from "../../utils/tests";
import Typography, { DATA_CY_DEFAULT } from ".";
import { MessageMock, mockedMessages, LocaleMock } from "../../utils/mocks/IntlProviderMock";

const defaultProps: ITypography = {
  content: "Text",
};

const getTypographyTestable = (props?: ITypography, dataCy = DATA_CY_DEFAULT, domNode = "p") =>
  getLocalizedTestable(Typography, { dataCy, domNode, props: { ...defaultProps, ...props } });

describe("Typography test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getTypographyTestable();
    expect(wrapper).toHaveLength(1);
    expect(wrapper.hasClass("MuiTypography-body1"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getTypographyTestable({ dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("localized", () => {
    const { element, wrapper } = getTypographyTestable({
      ...defaultProps,
      content: MessageMock.typography,
      localized: true,
    });
    expect(wrapper.text()).toEqual(mockedMessages[LocaleMock.en][MessageMock.typography]);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("bottomSpacing", () => {
    const { element, wrapper } = getTypographyTestable({ bottomSpacing: true });
    expect(wrapper.hasClass("MuiTypography-gutterBottom"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("display", () => {
    const { element, wrapper } = getTypographyTestable({ display: TypographyDisplay.inline });
    expect(wrapper.hasClass("MuiTypography-displayInline"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading", () => {
    const { element, wrapper } = getTypographyTestable({ loading: true }, `${DATA_CY_DEFAULT}-loading`);
    const placeholder = wrapper.find("span.MuiSkeleton-root");
    expect(placeholder).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("truncated", () => {
    const { element, wrapper } = getTypographyTestable({ truncated: true });
    expect(wrapper.hasClass("MuiTypography-noWrap"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("variant", () => {
    const { element, wrapper } = getTypographyTestable({ variant: TypographyVariants.title }, undefined, "h2");
    expect(wrapper.hasClass("MuiTypography-h6"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
