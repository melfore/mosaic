"use strict";(self.webpackChunk_melfore_mosaic=self.webpackChunk_melfore_mosaic||[]).push([[909],{"./node_modules/@mui/icons-material/esm/Style.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.A=(0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__.A)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"m2.53 19.65 1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61m19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6M7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34z"}),"Style")},"./src/components/Menu/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomIcon:function(){return CustomIcon},CustomIconButton:function(){return CustomIconButton},IconButton:function(){return IconButton},Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_icons_material_Style__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/icons-material/esm/Style.js"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_utils_logger__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/logger/index.ts"),_utils_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/stories/index.tsx"),_utils_stories_decorators_Locale__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/stories/decorators/Locale.tsx"),___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Menu/index.tsx");(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.jK)({testIdAttribute:"data-cy"});const COMPONENT_NAME=___WEBPACK_IMPORTED_MODULE_5__.A.displayName,meta={title:"Navigation/Menu",component:___WEBPACK_IMPORTED_MODULE_5__.A,decorators:[_utils_stories_decorators_Locale__WEBPACK_IMPORTED_MODULE_4__.Ay],parameters:{docs:{...(0,_utils_stories__WEBPACK_IMPORTED_MODULE_3__.A)({basedOn:{label:"MUI Menu Component",url:"https://mui.com/material-ui/react-menu/"},component:COMPONENT_NAME,e2eTestInfo:{dataCyDefault:___WEBPACK_IMPORTED_MODULE_5__.Y}}),description:{component:"The Menu component is used to display a list of menu items."}}}};__webpack_exports__.default=meta;const onClickMock=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)((()=>(0,_utils_logger__WEBPACK_IMPORTED_MODULE_2__.fH)(COMPONENT_NAME,"onClick handler"))),onItemClickMock=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)((()=>(0,_utils_logger__WEBPACK_IMPORTED_MODULE_2__.fH)(COMPONENT_NAME,"onClick item handler"))),Primary={args:{items:[{label:"Item1",onClick:onItemClickMock,value:"Value"},{label:"Item2",value:"Value"}],label:"Label",onItemClick:onClickMock},play:async({canvasElement:canvasElement})=>{const button=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement).getByTestId(`${___WEBPACK_IMPORTED_MODULE_5__.Y}-button`);if(!button)return;_storybook_test__WEBPACK_IMPORTED_MODULE_1__.rC.click(button),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length);const listbox=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(_storybook_test__WEBPACK_IMPORTED_MODULE_1__.nj.getByRole("presentation")).getByRole("menu"),options=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(listbox).getAllByRole("menuitem");_storybook_test__WEBPACK_IMPORTED_MODULE_1__.rC.click(options[0]),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(onItemClickMock).toHaveBeenCalledTimes(onItemClickMock.mock.calls.length),_storybook_test__WEBPACK_IMPORTED_MODULE_1__.rC.click(options[1]),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length),_storybook_test__WEBPACK_IMPORTED_MODULE_1__.rC.blur(button)}},CustomIcon={args:{...Primary.args,icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Style__WEBPACK_IMPORTED_MODULE_6__.A,null)}},IconButton={args:{dataCy:"icon-menu",items:[{label:"Item",value:"Value"}],label:"Label",onItemClick:onClickMock,type:"icon"}},CustomIconButton={args:{...IconButton.args,icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Style__WEBPACK_IMPORTED_MODULE_6__.A,null)}},__namedExportsOrder=["Primary","CustomIcon","IconButton","CustomIconButton"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    items: [{\n      label: "Item1",\n      onClick: onItemClickMock,\n      value: "Value"\n    }, {\n      label: "Item2",\n      value: "Value"\n    }],\n    label: "Label",\n    onItemClick: onClickMock\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByTestId(`${DATA_CY_DEFAULT}-button`);\n    if (!button) {\n      return;\n    }\n    fireEvent.click(button);\n    await expect(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length);\n    const listbox = within(screen.getByRole("presentation")).getByRole("menu");\n    const options = within(listbox).getAllByRole("menuitem");\n    fireEvent.click(options[0]);\n    await expect(onItemClickMock).toHaveBeenCalledTimes(onItemClickMock.mock.calls.length);\n    fireEvent.click(options[1]);\n    await expect(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length);\n    fireEvent.blur(button);\n  }\n}',...Primary.parameters?.docs?.source}}},CustomIcon.parameters={...CustomIcon.parameters,docs:{...CustomIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    icon: <MUIStyleIcon />\n  }\n}",...CustomIcon.parameters?.docs?.source}}},IconButton.parameters={...IconButton.parameters,docs:{...IconButton.parameters?.docs,source:{originalSource:'{\n  args: {\n    dataCy: "icon-menu",\n    items: [{\n      label: "Item",\n      value: "Value"\n    }],\n    label: "Label",\n    onItemClick: onClickMock,\n    type: "icon"\n  }\n}',...IconButton.parameters?.docs?.source}}},CustomIconButton.parameters={...CustomIconButton.parameters,docs:{...CustomIconButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...IconButton.args,\n    icon: <MUIStyleIcon />\n  }\n}",...CustomIconButton.parameters?.docs?.source}}}}}]);