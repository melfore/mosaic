# @melfore/mosaic

 ![Mosaic CI - Release](https://github.com/melfore/mosaic/workflows/Mosaic%20CI%20-%20Release/badge.svg) [![Mosaic CI - Release Beta](https://github.com/melfore/mosaic/actions/workflows/release-beta.yml/badge.svg)](https://github.com/melfore/mosaic/actions/workflows/release-beta.yml) ![Mosaic CI - Test](https://github.com/melfore/mosaic/workflows/Mosaic%20CI%20-%20Test/badge.svg) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Melfore's UI kit library based on `@material-ui`.

 <a href="https://github.com/melfore/mosaic/blob/master/CHANGELOG.md" target="_blank">**Changelog**</a> | <a href="https://github.com/melfore/mosaic/blob/master/CONTRIBUTING.md" target="_blank">**Contributing**</a> | <a href="https://github.com/melfore/mosaic/blob/master/MIGRATION.md" target="_blank">**Migration**</a> | <a href="https://melfore.github.io/mosaic/latest/" target="_blank">**Demo**</a>

## Getting started

Add the package to your project with:

`npm install @melfore/mosaic`

It requires these `peerDependencies` to be installed in host project:

```
  "@material-ui/core": ">= 4.12.3 < 5",
  "@material-ui/icons": ">= 4.11.2 < 5",
  "@material-ui/lab": ">= 4.0.0-alpha.57 < 5",
  "react": ">= 16.13.0 < 17",
  "react-dom": ">= 16.13.0 < 17",
```

## Usage

Simply import a `MosaicComponent` as follows:

```
  import { MosaicComponent } from '@melfore/mosaic';
```

Browse <a href="https://melfore.github.io/mosaic/latest/" target="_blank">StoryBook</a> to discover all available components.

## Beta channel

Beta channel adds pre-release support for `react v17.x` and `@mui-* v5.x`.

Add the beta version with the following command:

`npm install @melfore/mosaic@beta`

For more details see the `beta` <a href="https://github.com/melfore/mosaic/blob/beta/README.md" target="_blank">**README**</a> or browse <a href="https://melfore.github.io/mosaic/beta/" target="_blank">StoryBook</a>