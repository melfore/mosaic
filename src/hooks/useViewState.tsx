import { useMemo } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Breakpoint as MUIBreakpoint } from "@material-ui/core/styles/createBreakpoints";

export interface IUseViewStateOptions {
  mobile?: MUIBreakpoint;
  tablet?: MUIBreakpoint;
}

export interface IViewState {
  mobile: boolean;
  tablet: boolean;
}

export const DEFAULT_RESPONSIVE_VIEWS: IViewState = {
  mobile: false,
  tablet: false,
};

/**
 * Hook to get view state (mobile / tablet)
 * @param options the options to setup view definition (overrides MUI mobile / tablet breakpoints)
 */
const useViewState = (options?: IUseViewStateOptions): IViewState => {
  const { breakpoints } = useTheme();

  const mobileBreakpoint = useMemo(() => options?.mobile || "sm", [options]);
  const tabletBreakpoint = useMemo(() => options?.tablet || "md", [options]);

  return {
    mobile: useMediaQuery(breakpoints.down(mobileBreakpoint)),
    tablet: useMediaQuery(breakpoints.down(tabletBreakpoint)),
  };
};

export default useViewState;
