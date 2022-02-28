# Contents

- [From 5.9.4 to 6.x ](#from-594-to-6x)
- [From 0.x to 1.x](#from-0x-to-1x)

# From 5.9.4 to 6.x

Version 6.0.0 introduces `MosaicContext` offering a centralized control over some of the main library features.

An instance of `MosaicContext` must be added up in the component tree in order to let Mosaic components leverage its features. Good starting points can either be `index` or `App` component:

```
<MosaicContextProvider ... >
  <App />
</MosaicContextProvider>
```

This is **mandatory** to use Mosaic localization and responsive flags of single components (e.g. `Modal`).

The key features currently available with the `MosaicContext` are:
- agnostic localization
- detection of view type (mobile / tablet)

This is the interface of the `MosaicContextProvider`:

```
{
  breakpoints?: {
    // Breakpoint MUI type: 'sm' | 'md' | 'lg' ... 
    mobile?: Breakpoint; // Defaults to 'sm'
    view?: Breakpoint; // Defaults to 'md'
  },
  localize: (key: string) => string;
}
```

# From 0.x to 1.x
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

## Localization
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

### Migration examples

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

## Components
Some components have had breaking changes:

### Typography

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

### Button

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

### ListItem and ListItemCollapsible
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

### Others
- `collapsible` property of `Card` is now a `ReactNode` (previously it was a `ReactElement`)
- renamed `InputDataType` enum to `InputType`
- added new `language` icon

## Documentation
While waiting for Storybook 6 to happen (see issue #), some changes were done to the current Documentation, most of which reflects most important code changes.

Quickly:
- Localizable and Testable icons on top of page near component name
- List of all localizable props
- Testing instructions targeting also component subparts (with examples)

## Contributing
We are commitizen friendly!
Meaning that each commit must respect most common commit message guidelines.
Using the script `npm run commit` a commit prompt is shown to guide the user in writing the commit message (thanks to `git-cz` package).

This kicks-in the `semantic-release` package that from next-version-on will take care of versioning, writing release notes and changelogs automagically.
