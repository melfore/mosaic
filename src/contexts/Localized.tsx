import React, { createContext, FC } from "react";

export type ILocalizeMethod = (key: string) => string;

interface ILocalizedContext {
  localize: ILocalizeMethod;
}

const LocalizedContext = createContext<ILocalizedContext>({ localize: (key) => key });

export const LocalizedContextProvider: FC<ILocalizedContext> = ({ children, localize }) => {
  return <LocalizedContext.Provider value={{ localize }}>{children}</LocalizedContext.Provider>;
};

export default LocalizedContext;
