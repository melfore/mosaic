import React, { useEffect } from "react";
import { VariableSizeList } from "react-window";

const useResetCache = (itemsCount: number) => {
  const ref = React.useRef<VariableSizeList>(null);

  useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [itemsCount]);

  return ref;
};

export default useResetCache;
