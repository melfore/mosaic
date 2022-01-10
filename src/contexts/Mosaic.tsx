import React, { createContext, FC } from "react";

export type ILocalizeMethod = (key: string) => string;

export interface ILocalizedContext {
  localize: ILocalizeMethod;
}

interface IMosaicContext extends ILocalizedContext {}

const MosaicContext = createContext<IMosaicContext>({ localize: (key) => key });

export const MosaicContextProvider: FC<IMosaicContext> = ({ children, localize }) => {
  return <MosaicContext.Provider value={{ localize }}>{children}</MosaicContext.Provider>;
};

export default MosaicContext;
