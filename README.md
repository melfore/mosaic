# @melfore/mosaic

Melfore's UI kit library based on `@material-ui`.

<a href="https://melfore.github.io/mosaic/" target="_blank">**View StoryBook**</a>

![Mosaic CI - Test](https://github.com/melfore/mosaic/workflows/Mosaic%20CI%20-%20Test/badge.svg) ![Mosaic CI - Release](https://github.com/melfore/mosaic/workflows/Mosaic%20CI%20-%20Release/badge.svg)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Getting started

Add the package to your project with:

`npm install @melfore/mosaic`

It requires these `peerDependencies` to be installed in host project:

```
  "@material-ui/core": "4.11.x",
  "@material-ui/icons": "4.9.x",
  "@material-ui/lab": "4.0.0-alpha.56",
  "react": "16.13.x",
  "react-dom": "16.13.x",
  "react-intl": "4.3.x"
```

## Usage

Simply import a `MosaicComponent` as follows:

```
  import { MosaicComponent } from '@melfore/mosaic';
```

Browse <a href="https://melfore.github.io/mosaic/" target="_blank">our StoryBook</a> to discover all available components.

## Migrating from 0.x

### Localization
Export of *Intl components has been removed in favour of a new approach which simplifies for the final user to have localized components.

Mosaic localizable components now use a dedicated boolean flag called `localized` to make all supported strings localized.
For each component, the Documentation tells the user if the component can be localized and if so, it lists all the localizable properties under the `Intl` section.

This is an example of using this new approach:

```
<Button
    anotherLocalizableProp="intl.my.localizable.prop"
    label="intl.my.localizable.label"
    localized
    onClick={action("Click on Button")}
 />
```

The benefits from previous approach are several:
- same export / import for component
- ability to localize n properties of the same component
- ability to localize nested components
- removed misleading `labelId` property
- less code to maintain
- door open to future possibility of defining which props to localize and which not...

### Components
Some components have breaking changes:
- `Typography` text can be passed in as `children` or using the `content` property

  Old code:

  ```
  <Typography label="Text to display" />
  ```

  New code:

  ```
  <Typography>
    Text to display
  </Typography>
  ```

- `Typography` property `bottomSpacing` is now defaulted to false
- `label` property is now mandatory in `Button`
- `onClick` property of `Button` and `IconButton` now internally handles click event, so method signature becomes `() => void` (previously it was `(event: any) => void`)

  Old code:

  ```
  <Button onClick={(event: any) => doSomething()} />
  ```

  New code:

  ```
  <Button onClick={() => doSomething()} />
  ```

- `collapsible` property of `Card` is now a `ReactNode` (previously it was a `ReactElement`)
- `ListItem` and `ListItemCollapsible` no longer support `title` and `titleVariant` properties but rather `header` and `content`

  Old code:

  ```
  <ListItem title="List Item Text" />
  ```

  New code:

  ```
  <ListItem>
    List Item Text
  </ListItem>
  ```

- `ListItem` property `dense` is now defaulted to `false`
- renamed `InputDataType` enum to `InputType`
- added new `language` icon

### New Documentation
While waiting for Storybook 6 to happen, some changes were done to the current Documentation, most of which reflects most important code changes.

Quickly:
- Localizable and Testable icons on top of page near component name
- List of all localizable props
- Testing instructions targeting also component subparts (with examples)

### We are commitizen friendly (contributors only)
Meaning that each commit must respect most common commit message guidelines.
Using the script `npm run commit` a commit prompt is shown to guide the user in writing the commit message (thanks to `git-cz` package).

This kicks-in the `semantic-release` package that from next-version-on will take care of versioning, writing release notes and changelogs automagically.

