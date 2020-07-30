import React from "react";
import CustomDocsPage from "./DEPRECATED_CustomDocsPage";

export const getDocsPageStructure = (name, intlSupport = true, notes = null) => ({
  docs: {
    page: () => <CustomDocsPage intlSupport={intlSupport} name={name} notes={notes} />,
  },
});
