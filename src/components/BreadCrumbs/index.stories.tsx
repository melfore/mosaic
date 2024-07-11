import React from "react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { Meta, StoryObj } from "@storybook/react";
import { configure, expect, fireEvent, fn, within } from "@storybook/test";

import { Icons } from "../../types/Icon";
import { getComposedDataCy } from "../../utils";
import { logInfo } from "../../utils/logger";
import getDocsPage from "../../utils/stories";
import LocaleDecorator from "../../utils/stories/decorators/Locale";

import { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, LocalizedBreadCrumbs, SUBPARTS_MAP } from ".";

configure({ testIdAttribute: "data-cy" });

const COMPONENT_NAME = "BreadCrumbs";
LocalizedBreadCrumbs.displayName = COMPONENT_NAME;

const meta = {
  title: "Navigation/BreadCrumbs",
  component: LocalizedBreadCrumbs,
  decorators: [LocaleDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI BreadCrumbs Component",
          url: "https://mui.com/material-ui/react-breadcrumbs/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          dataCyShortcut: DATA_CY_SHORTCUT,
        },
        localizableProps: LOCALIZABLE_PROPS,
      }),
    },
  },
} satisfies Meta<typeof LocalizedBreadCrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

const linksMock = [
  { label: "page1", href: "//google.com/page1" },
  { label: "page2", href: "//google.com/page2" },
  { label: "page3", href: "//google.com/page3" },
];

const onClickMock = fn(() => logInfo(COMPONENT_NAME, "onClick handler"));

export const Primary: Story = {
  args: {
    dataCy: DATA_CY_DEFAULT,
    links: linksMock,
    onClick: onClickMock,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("First Link", async () => {
      const firstIndex = 0;
      const firstLinkDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.links, firstIndex);
      const firstLink = canvas.getAllByTestId(firstLinkDataCy).at(0);
      if (!firstLink) {
        return;
      }

      fireEvent.click(firstLink);
      await expect(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length);
      await expect(onClickMock).toHaveBeenCalledWith(linksMock[firstIndex].href);
    });

    await step("Last Link", async () => {
      const lastIndex = linksMock.length - 1;
      const lastLinkDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.links, lastIndex);
      const lastLink = canvas.getAllByTestId(lastLinkDataCy).at(0);
      if (!lastLink) {
        return;
      }

      fireEvent.click(lastLink);
      await expect(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length);
    });
  },
};

export const CustomSeparator: Story = {
  args: {
    ...Primary.args,
    separator: ">",
  },
};

export const SizeMedium: Story = {
  args: {
    ...Primary.args,
    size: "medium",
  },
};

export const SizeLarge: Story = {
  args: {
    ...Primary.args,
    size: "large",
  },
};

export const WithIcons: Story = {
  args: {
    ...Primary.args,
    links: linksMock.map((link, index) => ({ ...link, icon: index % 2 === 0 ? Icons.clock : <AccessibilityIcon /> })),
  },
};

export const Localized: Story = {
  args: {
    ...Primary.args,
    localized: true,
    links: linksMock.map((link) => ({ ...link, label: `locale.${link.label}` })),
  },
};
