# Contents

- [Scripts](#scripts)
- [Snippets for VSCode](#snippets-for-vscode)
  - [Available snippets](#available-snippets)
    - [New Component](#new-component)
    - [New Story](#new-story)
    - [New Test](#new-test)
  - [Adding snippets](#adding-snippets)
  - [Using snippets](#using-snippets)
- [Local testing](#local-testing)

# Contributing

## Scripts

- `npm start`

  Launches `storybook` on port `9009`

- `npm run build`

  Compiles the code with `tsc` and saves the output into `/dist`

- `npm test`

  Launches `Jest` test suite

- `npm run test-coverage`

  Launches `Jest` test suite in coverage mode and saves the output into `/coverage`

## Snippets for VSCode

We use `VSCode` type-based snippets in order to speed up the development process.

### Available snippets

#### New Component

```
	"TSReactComponent": {
		"prefix": "New Component",
		"body": [
			"import React, { FC } from 'react';",
			"import MUI$1 from '@material-ui/core/$1';",
			"",
			"// TODO: move this in a dedicated file into /types",
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
	}
```

#### New Story

```
	"TSReactStory": {
		"prefix": "New Story",
		"body": [
			"import React from 'react';",
			"import {  } from '@storybook/addon-actions';",
			"import {  } from '@storybook/addon-knobs';",
			"import {  } from '../../types/$1';",
			"import { getDocsPageStructure, StoriesWrapper } from '../../utils/stories';",
			"import $1 from '.';",
			"",
			"export default {",
			"  title: '$1',",
			"  component: $1,",
			"  parameters: {",
			"    ...getDocsPageStructure('$1'),",
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
```

#### New Test

```
	"TSReactTest": {
		"prefix": "New Test",
		"body": [
			"import React from 'react';",
			"import { mount } from 'enzyme';",
			"import $1 from '.';",
			"",
			"const defaultProps = {};",
			"",
			"const componentWrapper = (props = {}) => (",
			"  <$1",
			"    {...defaultProps}",
			"    {...props}",
			"  />",
			");",
			"",
			"describe('$1 test suite:', () => {",
			"  it('default', () => {",
			"    const component = componentWrapper();",
			"    const wrapper = mount(component);",
			"    expect('something').toEqual('something');",
			"  });",
			"});",
			"",
		],
		"description": "Snippet for a new TSReact story"
	}
```

### Adding snippets

Here's how to add the snippets for the category `typescriptreact` in `VSCode`:

1. Open the `VSCode > Preferences > User Snippets` menu

2. Scroll down the list of categories till you find `typescriptreact`

3. Copy and paste the desired code snippets (pick from available [here](#available-snippets) into the file opened by `VSCode`.

4. Save

### Using snippets

Here's how to use the snippets for the category `typescriptreact` in `VSCode`:

1. To use a snippet (ex: creating a new component), create the empty file in the desired location (ex: `NewComponent > index.tsx`).

2. Then open `VSCode` shortcuts menu (`CMD + Shift + P` on MacOS) and search for `Insert Snippet` option, it will give you hints based on file type

3. Pick the desired snipped by pressing enter

4. Start developing 🚀

## Local testing

Use this guide to locally use/test `@melfore/mosaic` on host projects, while developing new features on it.

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
