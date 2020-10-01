# @melfore/mosaic

![Mosaic CI - Test](https://github.com/melfore/mosaic/workflows/Mosaic%20CI%20-%20Test/badge.svg) ![Mosaic CI - Release](https://github.com/melfore/mosaic/workflows/Mosaic%20CI%20-%20Release/badge.svg) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Melfore's UI kit library based on `@material-ui` and `react-intl`.

 <a href="https://github.com/melfore/mosaic/blob/master/CHANGELOG.md" target="_blank">**Changelog**</a> | <a href="https://github.com/melfore/mosaic/blob/master/CONTRIBUTING.md" target="_blank">**Contributing**</a> | <a href="https://melfore.github.io/mosaic/" target="_blank">**Demo**</a>

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
  "react-intl": "5.4.x"
```

## Usage

Simply import a `MosaicComponent` as follows:

```
  import { MosaicComponent } from '@melfore/mosaic';
```

Browse <a href="https://melfore.github.io/mosaic/" target="_blank">our StoryBook</a> to discover all available components.

## Migrating from 0.x
If you are approaching migration from 0.x please read the following notes.
1.x introduces some breaking changes and new features, described below:

- [Localization](###localization)
  - [Migration examples](###migration-examples)
- [Components](###components)
  - [Typography](###typography)
  - [Button](###button)
  - [ListItem and ListItemCollapsible](###listitem-and-listitemcollapsible)
  - [Others](###others)
- [Documentation](###documentation)
- [Contributing](###contributing)

### Localization
Export of `*Intl` components **has been removed** in favour of a new approach which simplifies for the final user to have localized components.

Mosaic localizable components now use a dedicated boolean flag called `localized` to make all supported strings localized.

For each component, the <a href="https://melfore.github.io/mosaic/" target="_blank">documentation</a> tells the user if the component can be localized and if so, it lists all the localizable properties under the `Intl` section.

The benefits from previous approach are several:
- same export / import for component: remove `Intl` import and just add `localize` property to standard component
- ability to localize n properties of the same component
- ability to localize nested components
- removed misleading `labelId` property
- less code to maintain
- door open to future possibility of defining which props to localize and which not...

Below three common use cases of migration for localized components.
For other components, use the same pattern, applying the related <a href="https://melfore.github.io/mosaic/" target="_blank">documentation</a>.

#### Migration examples

**Button**

Old code:

```
import { ButtonIntl } from '@melfore/mosaic';

...

<ButtonIntl
  disabled={disabled}
  labelId={labelId}
  icon={{ name: IconName }}
  onClick={() => {}}
/>
```

New code:

```
import { Button } from '@melfore/mosaic';

...

<Button
  disabled={disabled}
  label={labelId}
  localized
  icon={{ name: IconName }}
  onClick={() => {}}
/>
```

**InputNumber**

Old code:

```
import { InputNumberIntl } from '@melfore/mosaic';

<InputNumberIntl
  required
  labelId={labelId}
  minValue={1}
  onChange={() => {}}
  value={value}
/>
```

New code:

```
import { InputNumber } from '@melfore/mosaic';

<InputNumber
  required
  label={labelId}
  localized
  minValue={1}
  onChange={() => {}}
  value={value}
/>
```

**Typography**

Old code:

```
import { TypographyIntl } from '@melfore/mosaic';

...

<TypographyIntl labelId={titleId} variant={TypographyVariants.pagetitle} />
```

New code:

```
import { Typography } from '@melfore/mosaic';

...

<Typography localized variant={TypographyVariants.pagetitle}>
  {titleId}
</Typography>
```

### Components
Some components have had breaking changes:

#### Typography

- Text can be passed in as `children` or using the `content` property:

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

- property `bottomSpacing` is now defaulted to false

#### Button

- `label` property is now mandatory
- `onClick` property of `Button` and `IconButton` now internally handles click event, so method signature becomes `() => void` (previously it was `(event: any) => void`)

  Old code:

  ```
  <Button onClick={(event: any) => doSomething()} />
  ```

  New code:

  ```
  <Button onClick={() => doSomething()} />
  ```

#### ListItem and ListItemCollapsible
- dropped support for `title` and `titleVariant` properties but rather `header` and `content`

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

- property `dense` is now defaulted to `false`

#### Others
- `collapsible` property of `Card` is now a `ReactNode` (previously it was a `ReactElement`)
- renamed `InputDataType` enum to `InputType`
- added new `language` icon

### Documentation
While waiting for Storybook 6 to happen (see issue #), some changes were done to the current Documentation, most of which reflects most important code changes.

Quickly:
- Localizable and Testable icons on top of page near component name
- List of all localizable props
- Testing instructions targeting also component subparts (with examples)

### Contributing
We are commitizen friendly!
Meaning that each commit must respect most common commit message guidelines.
Using the script `npm run commit` a commit prompt is shown to guide the user in writing the commit message (thanks to `git-cz` package).

This kicks-in the `semantic-release` package that from next-version-on will take care of versioning, writing release notes and changelogs automagically.

