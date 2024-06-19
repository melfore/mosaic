import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { configure, expect, fireEvent, waitFor, within } from "@storybook/test";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy, getComposedDataCy } from "../../utils";
import getDocsPage from "../../utils/stories";
import LocaleDecorator, { MessageMock } from "../../utils/stories/decorators/Locale";
import Button from "../Button";

import { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, LocalizedCard, SUBPARTS_MAP } from ".";

configure({ testIdAttribute: "data-cy" });

const COMPONENT_NAME = "Card";
LocalizedCard.displayName = COMPONENT_NAME;

const meta = {
  title: "Surfaces/Card",
  component: LocalizedCard,
  decorators: [LocaleDecorator],
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
} satisfies Meta<typeof LocalizedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "A mosaic is an artistic picture or design made out of any materials assembled together.",
    subtitle: "UK: /mə(ʊ)ˈzeɪɪk/",
    title: "Mosaic",
  },
};

export const Actions: Story = {
  args: {
    ...Primary.args,
    actions: [<Button key="gallery" icon={{ name: Icons.open_new }} label="Gallery" onClick={() => {}} />],
  },
};

export const Collapsible: Story = {
  args: {
    ...Primary.args,
    collapsible: "Discover mosaics from all around the globe!",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const collapseButton = canvas.getByTestId(getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.collapse));
    const collapsibleContentRoot = document.querySelector("div.MuiCollapse-root");
    if (!collapseButton || !collapsibleContentRoot) {
      return;
    }

    fireEvent.click(collapseButton);

    await waitFor(() => {
      expect(collapsibleContentRoot).not.toHaveClass("MuiCollapse-hidden");
      expect(collapsibleContentRoot).toHaveClass("MuiCollapse-entered");
    });
  },
};

export const CollapsibleActions: Story = {
  args: {
    ...Actions.args,
    ...Collapsible.args,
  },
};

export const Icon: Story = {
  args: {
    ...Primary.args,
    icon: Icons.apps,
  },
};

export const Loading: Story = {
  args: {
    ...Icon.args,
    loading: true,
  },
};

export const Localized: Story = {
  args: {
    ...Primary.args,
    localized: true,
    title: MessageMock.title,
    subtitle: MessageMock.subtitle,
  },
};
