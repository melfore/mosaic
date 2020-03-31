# @melfore/mosaic
Melfore's UI kit library based on `@material-ui`

![Mosaic CI](https://github.com/melfore/mosaic/workflows/Mosaic%20CI/badge.svg)

# Contents
- [Usage](#usage)
- [Contributing](#contributing)
  - [Available commands](#available-commands)
  - [Local usage](#local-usage)
  - [Snippets for VSCode](#snippets-for-vscode)

# Usage
Add the package to your project with:

`npm install @melfore/mosaic`

# Contributing

## Available commands

- `npm start` : Launches `storybook` on port `9009`

- `npm test` : Launches `Jest` test suite

- `npm run build` : Compiles the code with `tsc` and saves the output into `/dist`

- `npm run build-storybook` : Builds `storybook` app in static mode and saves the output into `/docs`

- `npm run upload` : Compiles the code with `tsc`, saves the output into `/dist` and uploads the package on npm

## Local usage 
Use this guide to locally use/test `@melfore/mosaic` on projects, while developing new features.

1. Install [`yalc`](https://github.com/whitecolor/yalc) local package manager 

    `npm i yalc -g`

2. Build `@melfore/mosaic`

    `npm run build`

3. Publish locally `@melfore/mosaic`

    `yalc publish --push --private`

    You will get something similar in the output:

    `@melfore/mosaic@0.1.0-6ea98d41 published in store.`

4. Move to the folder of the utilizing project and add local dependency for `@melfore/mosaic` (it will temporary replace the dependency for the online package)

    `yalc add @melfore/mosaic`

    You will see the new entry in your `package.json`
    Remember to add these two rules to your `.gitignore` to avoid pushing to repo:

    `/.yalc`

    `yalc.lock`

5. Update `node_modules` and local dependencies

    `npm install`

6. Import and use components in your code

    ```
    import { MosaicComponent } from '@melfore/mosaic';

    ...
    
    <MosaicComponent
        label="Learn React"
        onClick={() => window.open('https://reactjs.org', '_blank')}
    />
    ```
## Snippets for VSCode
In order to speed up development when working on `Mosaic` components please add the following snippets for the category `typescriptreact` in `VSCode`.

To add the snippets:

1. Open the `VSCode > Preferences > User Snippets` menu

2. Scroll down the list of categories till you find `typescriptreact`

3. Copy and paste the following code into the file opened by `VSCode`:

    ```
    {
      "TSReactComponent": {
        "prefix": "New Component",
        "body": [
          "import React, { FC } from 'react';",
          "import MUI$1 from '@material-ui/core/$1';",
          "",
          "interface $2 {",
          "",
          "}",
          "",
          "/**",
          " * $3 component made on top of `@material-ui/core/$1`",
          " */",
          "const $3: FC<$2> = ({}) => {",
          "  return null;",
          "};",
          "",
          "export default $3;",
          "",
        ],
        "description": "Snippet for a new TSReact Component"
      },
      "TSReactStory": {
        "prefix": "New Story",
        "body": [
          "import React from 'react';",
          "import {  } from '@storybook/addon-actions';",
          "import {  } from '@storybook/addon-knobs';",
          "import {  } from '../../types/$1';",
          "import { DOCS_PAGE_STRUCTURE, StoriesWrapper } from '../../utils/storybook';",
          "import $1 from '.';",
          "",
          "export default {",
          "  title: '$1',",
          "  component: $1,",
          "  parameters: {",
          "    ...DOCS_PAGE_STRUCTURE,",
          "  },",
          "}",
          "",
          "export const Canvas = () => (",
          "  <$1 />",
          ");",
          "",
          "export const OtherStories = () => (",
          "  <StoriesWrapper>",
          "    <$1 />",
          "  </StoriesWrapper>",
          ");",
          "",
        ],
        "description": "Snippet for a new TSReact story"
      }
    }
    ```

4. To use a snippet (ex: creating a new component), create the empty file in the desired location (ex: `NewComponent > index.tsx`).

5. Then open `VSCode` shortcuts menu and search for `Insert Snippet` option, it will give you hints based on file type

6. Pick the desired snipped and start developing 🚀
  
    



