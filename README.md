# @melfore/mosaic

 ![Mosaic CI - Release](https://github.com/melfore/mosaic/workflows/Mosaic%20CI%20-%20Release/badge.svg) [![Mosaic CI - Release Beta](https://github.com/melfore/mosaic/actions/workflows/release-beta.yml/badge.svg)](https://github.com/melfore/mosaic/actions/workflows/release-beta.yml) ![Mosaic CI - Test](https://github.com/melfore/mosaic/workflows/Mosaic%20CI%20-%20Test/badge.svg) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Melfore's UI kit library based on `@mui/*`.

 <a href="https://github.com/melfore/mosaic/blob/master/CHANGELOG.md" target="_blank">**Changelog**</a> | <a href="https://github.com/melfore/mosaic/blob/master/CONTRIBUTING.md" target="_blank">**Contributing**</a> | <a href="https://github.com/melfore/mosaic/blob/master/MIGRATION.md" target="_blank">**Migration**</a> | <a href="https://melfore.github.io/mosaic/latest/" target="_blank">**Demo**</a>

## Getting started

Starting from @melfore/mosaic v7.6.6 Mosaic dropped support for React < v18.x and Material UI < v5.x

Add the package to your project with:

`npm install @melfore/mosaic`

It requires these `peerDependencies` to be installed in host project:

```
  "@emotion/react": ">= 11.8.2 < 12",
  "@emotion/styled": ">= 11.8.1 < 12",
  "@mui/icons-material": ">= 5.5.1 < 6",
  "@mui/material": ">= 5.5.3 < 6",
  "react": ">= 18 < 19",
  "react-dom": ">= 18 < 19"
```

## Usage

Simply import a `MosaicComponent` as follows:

```
  import { MosaicComponent } from '@melfore/mosaic';
```

Browse <a href="https://melfore.github.io/mosaic/latest/" target="_blank">StoryBook</a> to discover all available components.