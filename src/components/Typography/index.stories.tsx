import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";

import { TypographyDisplay, TypographyVariants } from "../../types/Typography";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import { StoriesWrapper } from "../../utils/stories";
import { getDocumentationPage } from "../../utils/stories";

import Typography, { DATA_CY_DEFAULT, LOCALIZABLE_PROPS, TypographyWithProps } from ".";

export default {
  title: "Typography",
  component: TypographyWithProps,
  parameters: {
    ...getDocumentationPage({
      basedOn: "@material-ui/core/Typography",
      component: "Typography",
      e2eTestInfo: {
        dataCyDefault: DATA_CY_DEFAULT,
      },
      localizableProps: LOCALIZABLE_PROPS,
    }),
  },
};

export const Canvas = () => (
  <Typography
    bottomSpacing={boolean("bottomSpacing", false)}
    children={text("children", "Typography example")}
    dataCy={text("dataCy", DATA_CY_DEFAULT)}
    display={select("display", TypographyDisplay, TypographyDisplay.default)}
    loading={boolean("loading", false)}
    localized={boolean("localized", false)}
    truncated={boolean("truncated", false)}
    variant={select("variant", TypographyVariants, TypographyVariants.body)}
  />
);

const allVariantsKeys = Object.keys(TypographyVariants);
const allVariantsValues = Object.values(TypographyVariants);
const allVariants: { [key: string]: string } = {};
allVariantsKeys.forEach((key, index) => (allVariants[key] = allVariantsValues[index]));
const getVariant = (variantKey: string) => allVariantsValues.find((vv) => vv === allVariants[variantKey]);
const allVariantsJsx = allVariantsKeys.map((variantKey) => (
  <div className="typography-wrapper">
    <Typography variant={TypographyVariants.overline}>{variantKey}</Typography>
    <Typography dataCy={`typography-${variantKey}`} variant={getVariant(variantKey)}>
      This is an example text
    </Typography>
  </div>
));

export const AllVariants = () => <StoriesWrapper>{allVariantsJsx}</StoriesWrapper>;

export const BottomSpacing = () => (
  <StoriesWrapper>
    <div className="typography-wrapper">
      <Typography>Some text without bottom spacing</Typography>
      <Typography bottomSpacing>Some text with bottom spacing</Typography>
      <Typography>Other text</Typography>
    </div>
  </StoriesWrapper>
);

export const CustomStyle = () => (
  <Typography style={{ backgroundColor: "red", color: "white" }}>Custom Style</Typography>
);

export const Inline = () => (
  <StoriesWrapper>
    <div>
      <Typography display={TypographyDisplay.inline}>Body&nbsp;</Typography>
      <Typography display={TypographyDisplay.inline} variant={TypographyVariants.caption}>
        caption&nbsp;
      </Typography>
      <Typography display={TypographyDisplay.inline} variant={TypographyVariants.label}>
        label&nbsp;
      </Typography>
      <Typography display={TypographyDisplay.inline} variant={TypographyVariants.overline}>
        overline
      </Typography>
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

export const Localized = () => (
  // IntlProviderMock simulates external IntlProvider context
  <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
    <Typography localized>{MessageMock.typography}</Typography>
  </IntlProviderMock>
);

export const MixedContents = () => (
  <Typography>
    <strong>Strong</strong> Normal <i>Italic</i> <u>Underlined</u>
  </Typography>
);

export const Truncated = () => (
  <StoriesWrapper>
    <div className="typography-wrapper">
      <div style={{ width: "50%" }}>
        <Typography truncated>Trucates with respect to parent width (resize window to make it happen)</Typography>
      </div>
      <div style={{ width: "200px" }}>
        <Typography truncated>Truncated all chars after 200px</Typography>
      </div>
    </div>
  </StoriesWrapper>
);
