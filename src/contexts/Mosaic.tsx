import React, { createContext, FC } from "react";

import useViewState, { IUseViewStateOptions, IViewState } from "../hooks/useViewState";

export type ILocalizeMethod = (key: string) => string;

interface IMosaicContextOptions {
  breakpoints?: IUseViewStateOptions;
  localize: ILocalizeMethod;
}

export interface IMosaicContext {
  localize: ILocalizeMethod;
  view: IViewState;
}

export const MOSAIC_CONTEXT_DISPLAY_NAME = "MosaicContext";

export const MosaicContext = createContext<IMosaicContext | undefined>(undefined);

MosaicContext.displayName = MOSAIC_CONTEXT_DISPLAY_NAME;

export const MosaicContextProvider: FC<IMosaicContextOptions> = ({ children, localize, breakpoints }) => {
  const view = useViewState(breakpoints);
  return <MosaicContext.Provider value={{ localize, view }}>{children}</MosaicContext.Provider>;
};
