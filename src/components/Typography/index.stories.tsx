import React, { Fragment } from "react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { TypographyVariants, TypographyDisplay } from "../../types/Typography";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import { getDocsPageStructure, StoriesWrapper } from "../../utils/stories";
import Typography from ".";

export default {
  title: "Typography",
  component: Typography,
  parameters: {
    ...getDocsPageStructure("Typography", true, {
      title: "Testing with cypress",
      subtitle: true,
      body: (
        <Fragment>
          <p>
            The implementation offered by <code>@material-ui</code> doesn't support dataCy attribute. The value of the
            <code>dataCy</code> property is being used by <code>className</code> with the <code>data-cy-</code> prefix.
          </p>
          <p>
            Example: passing <code>dataCy="typography"</code> results in <code>className="data-cy-typography"</code>.
          </p>
        </Fragment>
      ),
    }),
  },
};

export const Canvas = () => (
  <Typography
    bottomSpacing={boolean("bottomSpacing", false)}
    children={text("children", "Typography example")}
    loading={boolean("loading", false)}
    truncated={boolean("truncated", false)}
    variant={select("variant", TypographyVariants, TypographyVariants.body)}
    display={select("display", TypographyDisplay, TypographyDisplay.default)}
  />
);

const allVariantsKeys = Object.keys(TypographyVariants);
const allVariantsValues = Object.values(TypographyVariants);
const allVariants: { [key: string]: string } = {};
allVariantsKeys.forEach((key, index) => (allVariants[key] = allVariantsValues[index]));
const getVariant = (variantKey: string) => allVariantsValues.find((vv) => vv === allVariants[variantKey]);
const allVariantsJsx = allVariantsKeys.map((variantKey) => (
  <div className="typography-wrapper">
    <Typography children={`${variantKey}`} variant={TypographyVariants.overline} />
    <Typography
      dataCy={`typography-${variantKey}`}
      children={`This is an example text`}
      variant={getVariant(variantKey)}
    />
  </div>
));

export const AllVariants = () => <StoriesWrapper>{allVariantsJsx}</StoriesWrapper>;

export const Truncated = () => (
  <StoriesWrapper>
    <div className="typography-wrapper">
      <div style={{ width: "50%" }}>
        <Typography children="Trucates with respect to parent width (resize window to make it happen)" truncated />
      </div>
      <div style={{ width: "200px" }}>
        <Typography children="Truncated all chars after 200px" truncated />
      </div>
    </div>
  </StoriesWrapper>
);

export const WithBottomSpacing = () => (
  <StoriesWrapper>
    <div className="typography-wrapper">
      <Typography children="Some text without bottom spacing" />
      <Typography bottomSpacing children="Some text with bottom spacing" />
      <Typography children="Other text" />
    </div>
  </StoriesWrapper>
);

export const Inline = () => (
  <StoriesWrapper>
    <div>
      <Typography children="Body " display={TypographyDisplay.inline} />
      <Typography children="caption " variant={TypographyVariants.caption} display={TypographyDisplay.inline} />
      <Typography children="label " variant={TypographyVariants.label} display={TypographyDisplay.inline} />
      <Typography children="overline " variant={TypographyVariants.overline} display={TypographyDisplay.inline} />
    </div>
  </StoriesWrapper>
);

export const Loading = () => (
  <StoriesWrapper>
    <div className="typography-wrapper">
      <Typography loading />
    </div>
  </StoriesWrapper>
);

export const WithIntl = () => (
  // IntlProviderMock simulates external IntlProvider context
  <StoriesWrapper>
    <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
      <Typography children={MessageMock.typography} localized />
    </IntlProviderMock>
  </StoriesWrapper>
);
