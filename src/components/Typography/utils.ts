type VariantDefaultsType = {
  [key: string]: {
    bottomSpacing: boolean;
    truncated: boolean;
  };
};

const VARIANT_DEFAULTS: VariantDefaultsType = {
  body1: {
    bottomSpacing: false,
    truncated: false,
  },
  caption: {
    bottomSpacing: false,
    truncated: false,
  },
  h5: {
    bottomSpacing: true,
    truncated: true,
  },
  h6: {
    bottomSpacing: true,
    truncated: true,
  },
  overline: {
    bottomSpacing: false,
    truncated: false,
  },
  subtitle1: {
    bottomSpacing: false,
    truncated: false,
  },
};

export const getBottomSpacing = (variant: string, bottomSpacing?: boolean): boolean =>
  bottomSpacing === undefined ? VARIANT_DEFAULTS[variant].bottomSpacing : bottomSpacing;

export const getTruncate = (variant: string, truncated?: boolean): boolean =>
  truncated === undefined ? VARIANT_DEFAULTS[variant].truncated : truncated;

export const VARIANT_COMPONENT_MAP = {
  body1: "p",
  caption: "span",
  h5: "h1",
  h6: "h2",
  overline: "h4",
  subtitle1: "h3",
};
