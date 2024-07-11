import type { StorybookConfig } from "@storybook/react-webpack5";

type MosaicStorybookConfig = Omit<StorybookConfig, "features"> & {
  features: {
    emotionAlias: boolean;
  };
};

const config: MosaicStorybookConfig = {
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-coverage",
    "@storybook/addon-interactions",
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
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    skipCompiler: false,
  },
};

export default config;
