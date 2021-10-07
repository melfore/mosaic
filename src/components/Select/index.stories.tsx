// import React from "react";
// import { action } from "@storybook/addon-actions";
// import { boolean, number, select, text } from "@storybook/addon-knobs";

// import { InputSize, InputVariant } from "../../types/Input";
// import { getAllComposedDataCy } from "../../utils";
// import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
// import { getDocumentationPage } from "../../utils/stories";

// import Select, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SelectWithProps, SUBPARTS_MAP } from ".";

// export default {
//   title: "Select",
//   component: SelectWithProps,
//   parameters: {
//     ...getDocumentationPage({
//       basedOn: "@material-ui/core/Autocomplete",
//       component: "Select",
//       e2eTestInfo: {
//         dataCyDefault: DATA_CY_DEFAULT,
//         dataCyShortcut: DATA_CY_SHORTCUT,
//         subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
//       },
//       localizableProps: LOCALIZABLE_PROPS,
//     }),
//   },
// };

// export const Canvas = () => (
//   <Select
//     autoComplete={boolean("autoComplete", true)}
//     disabled={boolean("disabled", false)}
//     label={text("label", "Label")}
//     loading={boolean("loading", false)}
//     multiple={boolean("multiple", false)}
//     onChange={action("On Change")}
//     onClose={action("On Close")}
//     onInputChange={action("On Input Change")}
//     options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
//     popperWidth={number("popperWidth", 300)}
//   />
// );

// export const Basic = () => (
//   <Select
//     label="Arts & Creativity"
//     multiple={false}
//     onChange={(value) => {}}
//     options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
//   />
// );

// export const CustomStyle = () => (
//   <Select
//     label="Custom Style"
//     multiple={false}
//     onChange={(value) => {}}
//     options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
//     style={{ color: "red", fontWeight: "bold", fontSize: "large", textAlign: "center" }}
//   />
// );

// export const CustomType = () => {
//   interface ICustom {
//     name: string;
//   }

//   return (
//     <Select<ICustom>
//       disabled
//       label="Arts & Creativity"
//       multiple={false}
//       onChange={(value) => value?.name}
//       options={[{ name: "Mosaic" }]}
//     />
//   );
// };

// export const Disabled = () => (
//   <Select
//     disabled
//     label="Arts & Creativity"
//     multiple={false}
//     onChange={(value) => {}}
//     options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
//   />
// );

// export const Grouped = () => (
//   <Select
//     groupBy={(option) => option.slice(0, 1)}
//     label="Arts & Creativity"
//     multiple={false}
//     onChange={(value) => {}}
//     options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
//   />
// );

// export const InitialValue = () => (
//   <Select
//     label="Arts & Creativity"
//     multiple={false}
//     onChange={(value) => {}}
//     options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
//     value="Mosaic"
//   />
// );

// export const Loading = () => (
//   <Select
//     label="Arts & Creativity"
//     loading
//     multiple={false}
//     onChange={(value) => {}}
//     options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
//   />
// );

// export const Localized = () => (
//   // IntlProviderMock simulates external IntlProvider context
//   <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
//     <Select
//       label={MessageMock.title}
//       localized
//       multiple={false}
//       onChange={(value) => {}}
//       options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
//       placeholder={MessageMock.title}
//     />
//   </IntlProviderMock>
// );

// export const Multiple = () => (
//   <Select
//     label="Arts & Creativity"
//     multiple
//     onChange={(value) => {}}
//     options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
//   />
// );

// export const Required = () => (
//   <Select
//     label="Arts & Creativity"
//     multiple={false}
//     onChange={(value) => {}}
//     options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
//     required
//   />
// );

// export const Small = () => (
//   <Select
//     label="Arts & Creativity"
//     multiple={false}
//     onChange={(value) => {}}
//     options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
//     size={InputSize.small}
//   />
// );

// export const Variant = () => (
//   <Select
//     label="Arts & Creativity"
//     multiple={false}
//     onChange={(value) => {}}
//     options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
//     variant={InputVariant.filled}
//   />
// );

// export const CustomGroupLabel = () => (
//   <Select
//     getGroupLabel={(groupName) => `Letter: ${groupName}`}
//     groupBy={(option) => option.slice(0, 1)}
//     label="Arts & Creativity"
//     multiple={false}
//     onChange={(value) => {}}
//     options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
//   />
// );

// export const CustomOptionRendering = () => (
//   <Select
//     customOptionRendering={(option) => <b>{option.slice(0, 3).toUpperCase()}</b>}
//     label="Arts & Creativity"
//     multiple={false}
//     onChange={(value) => {}}
//     options={["Mosaic", "Murales", "Paintings", "Photography", "Sculpture"]}
//   />
// );
