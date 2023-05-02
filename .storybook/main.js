module.exports = {
  stories: ["../src/components/**/*.stories.mdx", "../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-mdx-gfm"],
  features: {
    emotionAlias: false,
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
