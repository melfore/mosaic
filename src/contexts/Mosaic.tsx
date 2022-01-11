import React, { createContext, FC, useContext } from "react";

import { logError } from "../utils/logger";

export type ILocalizeMethod = (key: string) => string;

export interface ILocalizedContext {
  localize: ILocalizeMethod;
}

interface IMosaicContext extends ILocalizedContext {}

const MosaicContext = createContext<IMosaicContext | undefined>(undefined);
MosaicContext.displayName = "MosaicContext";

export const useMosaicContext = (): IMosaicContext | null => {
  const mosaicContext = useContext(MosaicContext);
  if (mosaicContext === undefined) {
    logError(
      "MosaicContext",
      "Some features require MosaicContext to be in place. Please add MosaicContextProvider in your component's tree"
    );
    return null;
  }

  return mosaicContext;
};

export const MosaicContextProvider: FC<IMosaicContext> = ({ children, localize }) => {
  return <MosaicContext.Provider value={{ localize }}>{children}</MosaicContext.Provider>;
};
