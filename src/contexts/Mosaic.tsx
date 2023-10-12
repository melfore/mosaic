import React, { createContext, FC, PropsWithChildren } from "react";

import useViewState, { IUseViewStateOptions, IViewState } from "../hooks/useViewState";

export type ILocalizeMethod = (key: string) => string;

interface IMosaicContextOptions {
  breakpoints?: IUseViewStateOptions;
  localize?: ILocalizeMethod;
  timeZone?: string;
}

export interface IMosaicContext {
  localize?: ILocalizeMethod;
  view: IViewState;
  timeZone?: string;
}

export const MOSAIC_CONTEXT_DISPLAY_NAME = "MosaicContext";

export const MosaicContext = createContext<IMosaicContext | undefined>(undefined);

MosaicContext.displayName = MOSAIC_CONTEXT_DISPLAY_NAME;

export const MosaicContextProvider: FC<PropsWithChildren<IMosaicContextOptions>> = ({
  children,
  localize,
  breakpoints,
  timeZone,
}) => {
  const view = useViewState(breakpoints);
  return <MosaicContext.Provider value={{ localize, view, timeZone }}>{children}</MosaicContext.Provider>;
};
