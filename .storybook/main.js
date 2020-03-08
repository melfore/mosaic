module.exports = {
  stories: ['../src/components/**/index.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links',
    '@storybook/preset-create-react-app'
  ],
};
