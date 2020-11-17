# [3.0.0](https://github.com/melfore/mosaic/compare/v2.3.0...v3.0.0) (2020-11-17)


### Features

* 🎸 Added label and localize support to Checkbox ([b956dfe](https://github.com/melfore/mosaic/commit/b956dfe6a663132542c9228d45936fa226b2ff9b))
* 🎸 Added label and localize support to Switch ([afd7426](https://github.com/melfore/mosaic/commit/afd74266990f6c25e9dc6cd9ea28d18c0cb575fa))
* 🎸 Added labelPlacement for Checkbox and Switch ([371be8b](https://github.com/melfore/mosaic/commit/371be8bf1e95087201d595c6fbc8235ad3157f3e))
* 🎸 Added new Icons ([8fa18b3](https://github.com/melfore/mosaic/commit/8fa18b33d4d9ecc6597957918f6dda4c6ba441b9))
* 🎸 Added style property to IBase interface ([c650f14](https://github.com/melfore/mosaic/commit/c650f149c790179822992111aec39b3596264df7))


### BREAKING CHANGES

* 🧨 Usage of FormControlLabel moved the root dataCy one level above, due to
this the selector for the input needs the suffix '-input'

✅ Closes: 172, 97
* 🧨 Usage of FormControlLabel moved the root dataCy one level above, due to
this the selector for the input needs the suffix '-input'

✅ Closes: 172

# [2.3.0](https://github.com/melfore/mosaic/compare/v2.2.0...v2.3.0) (2020-11-03)


### Features

* 🎸 Added getRowStyle method in Table interface ([e6edcaa](https://github.com/melfore/mosaic/commit/e6edcaa85d2e2161e88e678a4f4126f91695836f))
* 🎸 Added support for nested paths in Table ([702733f](https://github.com/melfore/mosaic/commit/702733f6e505a04d4b9977b81297a482269d9c56))

# [2.2.0](https://github.com/melfore/mosaic/compare/v2.1.0...v2.2.0) (2020-10-23)


### Bug Fixes

* 🐛 Fix row selection message ([e8193b8](https://github.com/melfore/mosaic/commit/e8193b830e86d4398ecdd1f4f523ceec32d7c4db))
* 🐛 Improved Table loading state ([c6f488e](https://github.com/melfore/mosaic/commit/c6f488ef621bf82d97a5a0b29114808969e7b2c8))
* 🐛 Removed effect for sort change ([535e501](https://github.com/melfore/mosaic/commit/535e501591a5d7e1fe1aa9abb8cc38af5b24f908))


### Features

* 🎸 Added first and last links for Table pagination ([0cfbcab](https://github.com/melfore/mosaic/commit/0cfbcab372bbd46f45173d941e836c72fa749f21))
* 🎸 Added multiple selection in Table ([ae289c7](https://github.com/melfore/mosaic/commit/ae289c73d213147000dc91e71ab1c4a8d4855cfc))
* 🎸 Added username display in AppBar component ([b5e1ca8](https://github.com/melfore/mosaic/commit/b5e1ca8f9e13f24e34a59400f42a310d06f51d4d))

# [2.1.0](https://github.com/melfore/mosaic/compare/v2.0.0...v2.1.0) (2020-10-07)


### Features

* 🎸 Added Power icon ([f3fa8b0](https://github.com/melfore/mosaic/commit/f3fa8b02af1f30688ce55f676f71dc45d6873826))
* 🎸 Added power icon in type mapping enum ([6e62681](https://github.com/melfore/mosaic/commit/6e626815dd45e5da83c41b9587c4a1bf7679f837))

# [2.0.0](https://github.com/melfore/mosaic/compare/v1.1.6...v2.0.0) (2020-10-01)


### Bug Fixes

* 🐛 Fixed data-cy reference for Select internal input ([eb954d5](https://github.com/melfore/mosaic/commit/eb954d59688284db71c8277fb517d2647c1b65df))
* 🐛 Fixed space between global action buttons ([a3534a4](https://github.com/melfore/mosaic/commit/a3534a43e27179f0a588d08b63a7f71413222478))


### Features

* 🎸 Added empty state option to Table ([7246b92](https://github.com/melfore/mosaic/commit/7246b92c518ff5f2b2c7f98f54deee8dc79786ac))
* 🎸 Baseline to move Table on MUITable ([b04fa20](https://github.com/melfore/mosaic/commit/b04fa209999587d14c94cd507ad57a194aa27b17))
* 🎸 Handling generic MouseEvents in suppressEvent util ([c1704b1](https://github.com/melfore/mosaic/commit/c1704b10db6ca3f29b47e02b724b06c807778617))
* 🎸 Handling generic MouseEvents in suppressEvent util ([73fb605](https://github.com/melfore/mosaic/commit/73fb6050de12235392e5ef6739b84c215d4e1ee9))
* 🎸 Restored actions in Table ([761d83d](https://github.com/melfore/mosaic/commit/761d83dcabce11bd4d079024113c8f55c63cf2d1))
* 🎸 Sticky applies to Footer as well ([1627fa4](https://github.com/melfore/mosaic/commit/1627fa4193e8aa480757dc7247dc0286c67c8afa))
* 🎸 StickyHeader applies to all header ([a03207b](https://github.com/melfore/mosaic/commit/a03207bc34666b7f4d5738e3566c56b0bead96d7))
* 🎸 Table feature parity and add-ons ([8ece2d0](https://github.com/melfore/mosaic/commit/8ece2d074fe538fb0a60d224d76e508e3eacae56))


### BREAKING CHANGES

* 🧨 Changed signature for onPageSizeChange and onSortChange

✅ Closes: 149
* 🧨 Removed material-table direct dependency and all related dependencies

✅ Closes: 149

## [1.1.6](https://github.com/melfore/mosaic/compare/v1.1.5...v1.1.6) (2020-08-17)

## [1.1.5](https://github.com/melfore/mosaic/compare/v1.1.4...v1.1.5) (2020-08-13)


### Bug Fixes

* 🐛 Select handling immutable options ([6bdd4da](https://github.com/melfore/mosaic/commit/6bdd4da63308670c6601cbc41d7b08e7d60a25f4))
* 🐛 Table handling immutable options ([d730be0](https://github.com/melfore/mosaic/commit/d730be0aea5e715e9bb39e00219c4d7ca605a948))

## [1.1.4](https://github.com/melfore/mosaic/compare/v1.1.3...v1.1.4) (2020-08-12)


### Bug Fixes

* 🐛 Restored typed export for Select ([a38effd](https://github.com/melfore/mosaic/commit/a38effd9cb77ac3d595e603317b993247c2f2fec))

## [1.1.3](https://github.com/melfore/mosaic/compare/v1.1.2...v1.1.3) (2020-08-12)

## [1.1.2](https://github.com/melfore/mosaic/compare/v1.1.1...v1.1.2) (2020-08-11)


### Bug Fixes

* 🐛 Added export for InputType enum ([6804432](https://github.com/melfore/mosaic/commit/6804432773b0f205bd2a57c0bdbe20afbe7e18b1))

## [1.1.1](https://github.com/melfore/mosaic/compare/v1.1.0...v1.1.1) (2020-08-11)

# [1.1.0](https://github.com/melfore/mosaic/compare/v1.0.3...v1.1.0) (2020-08-10)


### Bug Fixes

* 🐛 Added separator in composite dataCy ([6dc0617](https://github.com/melfore/mosaic/commit/6dc06174021da6d4a63d61bffc65e8f3233acd2b))


### Features

* 🎸 Added language icon ([da0e432](https://github.com/melfore/mosaic/commit/da0e43298c04b6ae1d9bd64fa7bc461a1a11a004))
