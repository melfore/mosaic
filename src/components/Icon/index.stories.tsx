// import React from "react";
// import MUIStyleIcon from "@material-ui/icons/Style";
// import { boolean, object, select, text } from "@storybook/addon-knobs";

// import { Icons, IconSize } from "../../types/Icon";
// import { getDocumentationPage, StoriesWrapper } from "../../utils/stories";

// import Icon, { DATA_CY_DEFAULT } from ".";

// export default {
//   title: "Icon",
//   component: Icon,
//   parameters: {
//     ...getDocumentationPage({
//       basedOn: "",
//       component: "Icon",
//       e2eTestInfo: {
//         dataCyDefault: DATA_CY_DEFAULT,
//       },
//     }),
//   },
// };

// export const Canvas = () => (
//   <Icon
//     dataCy={text("data-cy", DATA_CY_DEFAULT)}
//     forwarded={object("forwarded", {})}
//     loading={boolean("loading", false)}
//     name={select("icon", Icons, Icons.add)}
//     size={select("size", IconSize, IconSize.default)}
//   />
// );

// export const CustomIcon = () => (
//   <StoriesWrapper>
//     <Icon size={IconSize.small}>
//       <MUIStyleIcon />
//     </Icon>
//     <Icon rotate>
//       <MUIStyleIcon />
//     </Icon>
//     <Icon size={IconSize.large} style={{ backgroundColor: "red", borderRadius: "4px", color: "white", padding: "4px" }}>
//       <MUIStyleIcon />
//     </Icon>
//   </StoriesWrapper>
// );

// export const CustomStyle = () => (
//   <Icon name={Icons.send} style={{ backgroundColor: "red", borderRadius: "4px", color: "white", padding: "4px" }} />
// );

// export const Loading = () => (
//   <StoriesWrapper>
//     <Icon dataCy="loading-icon" loading name={Icons.send} size={IconSize.small} />
//     <Icon dataCy="loading-icon" loading name={Icons.send} />
//     <Icon dataCy="loading-icon" loading name={Icons.send} size={IconSize.large} />
//   </StoriesWrapper>
// );

// export const Rotate = () => (
//   <StoriesWrapper>
//     <Icon name={Icons.refresh} rotate size={IconSize.small} />
//     <Icon name={Icons.refresh} rotate />
//     <Icon name={Icons.refresh} rotate size={IconSize.large} />
//   </StoriesWrapper>
// );

// export const Size = () => (
//   <StoriesWrapper>
//     <Icon dataCy="icon-send" name={Icons.send} size={IconSize.small} />
//     <Icon dataCy="icon-send" name={Icons.send} />
//     <Icon dataCy="icon-send" name={Icons.send} size={IconSize.large} />
//   </StoriesWrapper>
// );

// const allIcons = Object.values(Icons);
// const getIcon = (icon: string) => allIcons.find((i) => i === icon);
// const allIconsJsx = allIcons.map((icon, index) => (
//   <div key={index} className="icon-wrapper">
//     <Icon dataCy={`icon-${icon}`} name={getIcon(icon) || Icons.add} />
//     <span>{icon}</span>
//   </div>
// ));

// export const AllIcons = () => <StoriesWrapper>{allIconsJsx}</StoriesWrapper>;
