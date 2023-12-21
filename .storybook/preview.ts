import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

const lightTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: process.env.STORYBOOK_CI_FIX === "true",
      },
    },
  },
});

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: "alphabetical",
    },
  },
  previewTabs: {
    canvas: {
      hidden: true,
    },
  },
  viewMode: "docs",
  viewport: {
    viewports: {
      desktopDefault: {
        name: "desktopDefault",
        styles: {
          height: "900px",
          width: "1450px",
        },
      },
    },
    defaultViewport: "desktopDefault",
  },
};
