import type { StorybookConfig } from "@storybook/react-webpack5";

type MosaicStorybookConfig = Omit<StorybookConfig, "features"> & {
  features: {
    emotionAlias: boolean;
  };
};

const config: MosaicStorybookConfig = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-coverage",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-webpack5-compiler-babel",
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
  stories: ["../src/components/**/*.mdx", "../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
};

export default config;
