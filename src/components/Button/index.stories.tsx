import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, object, select, text } from "@storybook/addon-knobs";
import { ButtonIconPosition, ButtonVariants } from "../../types/Button";
import { Icons } from "../../types/Icon";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import { DOCS_PAGE_STRUCTURE, StoriesWrapper } from "../../utils/stories";
import Button, { ButtonIntl } from ".";

export default {
  title: "Button",
  component: Button,
  parameters: {
    ...DOCS_PAGE_STRUCTURE,
  },
};

export const Canvas = () => (
  <Button
    dataCy={text("data-cy", "button-identifier")}
    elevated={boolean("elevated", false)}
    icon={object("icon", { name: Icons.send, position: ButtonIconPosition.left })}
    label={text("label", "Example")}
    onClick={action("Click on Button")}
    variant={select("variant", ButtonVariants, ButtonVariants.contained)}
  />
);

export const Elevated = () => (
  <StoriesWrapper>
    <Button dataCy="button" elevated label="Contained" onClick={action("Click on Button")} />
  </StoriesWrapper>
);

export const Disabled = () => (
  <StoriesWrapper>
    <Button dataCy="button" label="Disabled" onClick={action("Click on Button")} disabled />
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

export const WithIntl = () => (
  // IntlProviderMock simulates external IntlProvider context
  // The `ButtonIntl` exported version of `Button` uses `labelId` prop to get a localized label.
  // When using `ButtonIntl` the prop `dataCy` can be omitted as it defaults to `labelId` value.
  <StoriesWrapper>
    <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
      <ButtonIntl labelId={MessageMock.button} onClick={action("Click on Button")} />
    </IntlProviderMock>
  </StoriesWrapper>
);
