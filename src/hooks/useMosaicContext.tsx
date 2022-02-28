import { useContext } from "react";

import { IMosaicContext, MOSAIC_CONTEXT_DISPLAY_NAME, MosaicContext } from "../contexts/Mosaic";
import { logError } from "../utils/logger";

export const useMosaicContext = (): IMosaicContext => {
  const mosaicContext = useContext(MosaicContext);
  if (mosaicContext === undefined) {
    logError(
      MOSAIC_CONTEXT_DISPLAY_NAME,
      `Some features require ${MOSAIC_CONTEXT_DISPLAY_NAME} to be in place. Please add ${MOSAIC_CONTEXT_DISPLAY_NAME}Provider in your component's tree`
    );

    throw new Error(`Cannot find ${MOSAIC_CONTEXT_DISPLAY_NAME}`);
  }

  return mosaicContext;
};
