// import React from "react";
// import { action } from "@storybook/addon-actions";
// import { boolean, select, text } from "@storybook/addon-knobs";

// import { CheckboxSize } from "../../types/Checkbox";
// import { getAllComposedDataCy } from "../../utils";
// import FormMock from "../../utils/mocks/FormMock";
// import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
// import { getDocumentationPage, StoriesWrapper } from "../../utils/stories";

// import Checkbox, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SUBPARTS_MAP } from ".";

// export default {
//   title: "Checkbox",
//   component: Checkbox,
//   parameters: {
//     ...getDocumentationPage({
//       basedOn: "@material-ui/core/Checkbox",
//       component: "Checkbox",
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
//   // FormMock simulates external form component handling state
//   // In a real case scenario "onChange" and "value" props must be passed to Checkbox
//   <FormMock inputValue={boolean("value", true)} onInputChange={action("Change checkbox")}>
//     <Checkbox
//       dataCy={text("data-cy", "checkbox")}
//       disabled={boolean("disabled", false)}
//       intermediate={boolean("intermediate", false)}
//       label={text("label", "Checkbox")}
//       labelPlacement={select("labelPlacement", ["end", "start"], "start")}
//       onChange={action("Change checkbox")}
//       required={boolean("value", false)}
//       size={select("size", CheckboxSize, CheckboxSize.small, CheckboxSize.default)}
//       value={boolean("value", true)}
//     />
//   </FormMock>
// );

// export const CustomStyle = () => <Checkbox style={{ backgroundColor: "red", color: "white" }} value />;

// export const Disabled = () => (
//   <StoriesWrapper>
//     <Checkbox disabled />
//     <Checkbox disabled value />
//     <Checkbox disabled intermediate />
//   </StoriesWrapper>
// );

// export const Label = () => (
//   <StoriesWrapper>
//     <Checkbox label="Checkbox" />
//     <Checkbox label="Checkbox" labelPlacement="end" value />
//   </StoriesWrapper>
// );

// export const Localized = () => (
//   // IntlProviderMock simulates external IntlProvider context
//   <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
//     <Checkbox label={MessageMock.checkbox} localized />
//   </IntlProviderMock>
// );

// export const Size = () => (
//   <StoriesWrapper>
//     <Checkbox value />
//     <Checkbox value size={CheckboxSize.small} />
//     <Checkbox />
//     <Checkbox size={CheckboxSize.small} />
//   </StoriesWrapper>
// );

// export const Values = () => (
//   <StoriesWrapper>
//     <Checkbox onChange={() => {}} />
//     <Checkbox value onChange={() => {}} />
//     <Checkbox intermediate onChange={() => {}} />
//     <Checkbox value intermediate onChange={() => {}} />
//   </StoriesWrapper>
// );
