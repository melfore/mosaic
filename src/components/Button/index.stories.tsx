import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, object, select, text } from "@storybook/addon-knobs";
import { ButtonIconPosition, ButtonVariants } from "../../types/Button";
import { Icons } from "../../types/Icon";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import { StoriesWrapper, getDocumentationPage } from "../../utils/stories";
import Button, { ButtonWithProps, DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS } from ".";

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

export const Disabled = () => (
  <StoriesWrapper>
    <Button dataCy="button" label="Disabled" onClick={action("Click on Button")} disabled />
  </StoriesWrapper>
);

export const Elevated = () => (
  <StoriesWrapper>
    <Button dataCy="button" elevated label="Contained" onClick={action("Click on Button")} />
  </StoriesWrapper>
);

export const Localized = () => (
  // IntlProviderMock simulates external IntlProvider context
  <StoriesWrapper>
    <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
      <Button label={MessageMock.button} localized onClick={action("Click on Button")} />
    </IntlProviderMock>
  </StoriesWrapper>
);

export const Variants = () => (
  <StoriesWrapper>
    <Button dataCy="button" label="Contained" onClick={action("Click on Button")} />
    <Button dataCy="button" label="Outlined" onClick={action("Click on Button")} variant={ButtonVariants.outlined} />
  </StoriesWrapper>
);

export const WithIcon = () => (
  <StoriesWrapper>
    <Button dataCy="button" icon={{ name: Icons.send }} label="Left Icon" onClick={action("Click on Button")} />
    <Button
      dataCy="button"
      icon={{ name: Icons.send, position: ButtonIconPosition.right }}
      label="Right Icon"
      onClick={action("Click on Button")}
      variant={ButtonVariants.outlined}
    />
  </StoriesWrapper>
);
