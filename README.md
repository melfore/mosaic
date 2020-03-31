# @melfore/mosaic
Melfore's UI kit library based on `@material-ui`

![Mosaic CI](https://github.com/melfore/mosaic/workflows/Mosaic%20CI/badge.svg)

## Usage
Add the package to your project with:

`npm install @melfore/mosaic`

## Contributors

### Available commands

- `npm run build`

  Compiles the code with `tsc` and saves the output into `/dist`

- `npm start`

  Launches `storybook` on port `9009`

- `npm test`

  Launches `Jest` test suite

- `npm run upload`

  Compiles the code with `tsc`, saves the output into `/dist` and uploads the package on npm

### Local usage / testing 
Use this guide to locally use/test `@melfore/mosaic` on projects, while developing new features.

1. Install `yalc` local package manager https://github.com/whitecolor/yalc

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
    import { Button } from '@melfore/mosaic';

    ...
    
    <Button
        label="Learn React"
        onClick={() => window.open('https://reactjs.org', '_blank')}
    />
    ```


  
    



