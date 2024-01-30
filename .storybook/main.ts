import type { StorybookConfig } from "@storybook/react-webpack5";

type MosaicStorybookConfig = StorybookConfig & {
  features: StorybookConfig["features"] & {
    emotionAlias: boolean;
  };
};

const config: MosaicStorybookConfig = {
  stories: ["../src/components/**/*.stories.mdx", "../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-coverage",
    "@storybook/addon-interactions",
  ],
  docs: {
    autodocs: true,
  },
  features: {
    emotionAlias: false,
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};

export default config;
