import React, { Fragment } from "react";
import {} from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";
import { TypographyVariants, TypographyDisplay } from "../../types/Typography";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import { getDocsPageStructure, StoriesWrapper } from "../../utils/stories";
import Typography, { TypographyIntl } from ".";

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
    label={text("label", "Typography example")}
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
    <Typography label={`${variantKey}`} variant={TypographyVariants.overline} />
    <Typography
      dataCy={`typography-${variantKey}`}
      label={`This is an example text`}
      variant={getVariant(variantKey)}
    />
  </div>
));

export const AllVariants = () => <StoriesWrapper>{allVariantsJsx}</StoriesWrapper>;

export const Truncated = () => (
  <StoriesWrapper>
    <div className="typography-wrapper">
      <div style={{ width: "50%" }}>
        <Typography label="Trucates with respect to parent width (resize window to make it happen)" truncated />
      </div>
      <div style={{ width: "200px" }}>
        <Typography label="Truncated all chars after 200px" truncated />
      </div>
    </div>
  </StoriesWrapper>
);

export const WithBottomSpacing = () => (
  <StoriesWrapper>
    <div className="typography-wrapper">
      <Typography label="Some text without bottom spacing" />
      <Typography bottomSpacing label="Some text with bottom spacing" />
      <Typography label="Other text" />
    </div>
  </StoriesWrapper>
);

export const Inline = () => (
  <StoriesWrapper>
    <div>
      <Typography label="Body " display={TypographyDisplay.inline} />
      <Typography label="caption " variant={TypographyVariants.caption} display={TypographyDisplay.inline} />
      <Typography label="label " variant={TypographyVariants.label} display={TypographyDisplay.inline} />
      <Typography label="overline " variant={TypographyVariants.overline} display={TypographyDisplay.inline} />
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
  // The `TypographyIntl` exported version of `Typography` uses `labelId` prop to get a localized label.
  // When using `TypographyIntl` the prop `dataCy` can be omitted as it defaults to `labelId` value.
  <StoriesWrapper>
    <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
      <TypographyIntl labelId={MessageMock.typography} />
    </IntlProviderMock>
  </StoriesWrapper>
);
