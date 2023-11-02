import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import { localeDecorator, MessageMock } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";
import Button from "../Button";

import Card, { CardWithProps, DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SUBPARTS_MAP } from ".";

const COMPONENT_NAME = "Card";
Card.displayName = COMPONENT_NAME;
CardWithProps.displayName = COMPONENT_NAME;

export default {
  title: "Surfaces/Card",
  component: CardWithProps,
  decorators: [localeDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Card Component",
          url: "https://mui.com/components/cards/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          dataCyShortcut: DATA_CY_SHORTCUT,
          subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
        },
        localizableProps: LOCALIZABLE_PROPS,
      }),
    },
  },
} as ComponentMeta<typeof CardWithProps>;

const Template: ComponentStory<typeof CardWithProps> = (args) => <Card {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "A mosaic is an artistic picture or design made out of any materials assembled together.",
  subtitle: "UK: /mə(ʊ)ˈzeɪɪk/",
  title: "Mosaic",
};

export const Actions = Template.bind({});
Actions.args = {
  ...Primary.args,
  actions: [<Button key="gallery" icon={{ name: Icons.open_new }} label="Gallery" onClick={() => {}} />],
};

export const Collapsible = Template.bind({});
Collapsible.args = {
  ...Primary.args,
  collapsible: "Discover mosaics from all around the globe!",
};

export const CollapsibleActions = Template.bind({});
CollapsibleActions.args = {
  ...Actions.args,
  ...Collapsible.args,
};

export const Icon = Template.bind({});
Icon.args = {
  ...Primary.args,
  icon: Icons.apps,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Icon.args,
  loading: true,
};

export const Localized = Template.bind({});
Localized.args = {
  ...Primary.args,
  localized: true,
  title: MessageMock.title,
  subtitle: MessageMock.subtitle,
};
