import React from "react";
import MUIStyleIcon from "@material-ui/icons/Style";
import { action } from "@storybook/addon-actions";
import { boolean, object, select, text } from "@storybook/addon-knobs";

import { ButtonIconPosition, ButtonVariants } from "../../types/Button";
import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import { getDocumentationPage, StoriesWrapper } from "../../utils/stories";

import Button, { ButtonWithProps, DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SUBPARTS_MAP } from ".";

export default {
  title: "Button",
  component: ButtonWithProps,
  parameters: {
    ...getDocumentationPage({
      basedOn: "@material-ui/core/Button",
      component: "Button",
      e2eTestInfo: {
        dataCyDefault: DATA_CY_DEFAULT,
        dataCyShortcut: DATA_CY_SHORTCUT,
        subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
      },
      localizableProps: LOCALIZABLE_PROPS,
    }),
  },
};

export const Canvas = () => (
  <Button
    dataCy={text("data-cy", "button-identifier")}
    disabled={boolean("disabled", false)}
    elevated={boolean("elevated", false)}
    icon={object("icon", { name: Icons.send, position: ButtonIconPosition.left })}
    label={text("label", "Example")}
    localized={boolean("localized", false)}
    onClick={action("Click on Button")}
    variant={select("variant", ButtonVariants, ButtonVariants.contained)}
  />
);

export const CustomStyle = () => (
  <Button label="Custom Style" onClick={action("Click on Button")} style={{ backgroundColor: "red", color: "white" }} />
);

export const Disabled = () => <Button disabled label="Disabled" onClick={action("Click on Button")} />;

export const Elevated = () => <Button elevated label="Contained" onClick={action("Click on Button")} />;

export const Localized = () => (
  // IntlProviderMock simulates external IntlProvider context
  <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
    <Button label={MessageMock.button} localized onClick={action("Click on Button")} />
  </IntlProviderMock>
);

export const Variants = () => (
  <StoriesWrapper>
    <Button label="Contained" onClick={action("Click on Button")} />
    <Button label="Outlined" onClick={action("Click on Button")} variant={ButtonVariants.outlined} />
  </StoriesWrapper>
);

export const Icon = () => (
  <StoriesWrapper>
    <Button icon={{ name: Icons.send }} label="Left Icon" onClick={action("Click on Button")} />
    <Button
      icon={{ name: Icons.send, position: ButtonIconPosition.right }}
      label="Right Icon"
      onClick={action("Click on Button")}
    />
  </StoriesWrapper>
);

export const CustomIcon = () => (
  <StoriesWrapper>
    <Button icon={{ component: <MUIStyleIcon /> }} label="Custom Left Icon" onClick={action("Click on Button")} />
    <Button
      icon={{ component: <MUIStyleIcon />, position: ButtonIconPosition.right }}
      label="Custom Right Icon"
      onClick={action("Click on Button")}
    />
  </StoriesWrapper>
);
