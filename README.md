# Melfore UI Kit
An example of a UI Kit library based on `@material-ui`

Right now it hosts a `Button` wrapper around `MUIButton` with some basic props mapping

## Available commands

- `npm start`

  Launches `storybook` on port `9009`

- `npm test`

  Launches `Jest` test suite

- `npm run-script build`

  Compiles the code with `tsc` and saves the output into `/dist`

## How to use in CRA-based project
This is temporary before publishing the package

1. Install `yalc` local package manager https://github.com/whitecolor/yalc

    `npm i yalc -g`

2. Build `@melfore/ui-kit`

    `npm run-script build`

3. Publish locally `@melfore/ui-kit`

    `yalc publish --push --private`

    You will get something similar in the output:

    `@melfore/ui-kit@0.1.0-6ea98d41 published in store.`

4. Move to the folder of the CRA-based project and add local dependency for `@melfore/ui-kit`

    `yalc add @melfore/ui-kit`

    You will see the new entry in your `package.json`
    Remember to add these two rules to your `.gitignore` to avoid pushing to repo:

    `/.yalc`

    `yalc.lock`

5. Update `node_modules` and local dependencies

    `npm install`

6. Import and use components in your code

    ```
    import { Button } from '@melfore/ui-kit';

    ...
    
    <Button
      label="Learn React"
      onClick={() => console.log('Test')}
    />
    ```


  
    



