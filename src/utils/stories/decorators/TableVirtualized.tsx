import React from "react";
import { VirtuosoMockContext } from "react-virtuoso";
import { Decorator } from "@storybook/react";

const TableVirtualizedDecorator: Decorator = (Story, { args }) => {
  const isTestRunner = window.navigator.userAgent.match(/StorybookTestRunner/);

  if (isTestRunner) {
    return (
      <VirtuosoMockContext.Provider value={{ viewportHeight: 300, itemHeight: 100 }}>
        {Story({ args })}
      </VirtuosoMockContext.Provider>
    );
  }
  return Story({ args });
};

export default TableVirtualizedDecorator;
