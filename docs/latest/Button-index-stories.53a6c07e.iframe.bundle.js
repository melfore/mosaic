"use strict";(self.webpackChunk_melfore_mosaic=self.webpackChunk_melfore_mosaic||[]).push([[640],{"./node_modules/@mui/icons-material/esm/Style.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.A=(0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__.A)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"m2.53 19.65 1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61m19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6M7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34z"}),"Style")},"./src/components/Button/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:function(){return Color},Disabled:function(){return Disabled},Elevated:function(){return Elevated},Icon:function(){return Icon},IconCustom:function(){return IconCustom},IconRight:function(){return IconRight},IconRotate:function(){return IconRotate},Localized:function(){return Localized},Primary:function(){return Primary},Styled:function(){return Styled},VariantOutlined:function(){return VariantOutlined},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_icons_material_Style__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/icons-material/esm/Style.js"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_types_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/types/Icon.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/index.ts"),_utils_logger__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/logger/index.ts"),_utils_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/stories/index.tsx"),_utils_stories_decorators_Locale__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/stories/decorators/Locale.tsx"),___WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Button/index.tsx");(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.jK)({testIdAttribute:"data-cy"});___WEBPACK_IMPORTED_MODULE_7__.Kt.displayName="Button";const meta={title:"Inputs/Button",component:___WEBPACK_IMPORTED_MODULE_7__.Kt,decorators:[_utils_stories_decorators_Locale__WEBPACK_IMPORTED_MODULE_6__.Ay],parameters:{docs:{...(0,_utils_stories__WEBPACK_IMPORTED_MODULE_5__.A)({basedOn:{label:"MUI Button Component",url:"https://mui.com/components/buttons/"},component:"Button",e2eTestInfo:{dataCyDefault:___WEBPACK_IMPORTED_MODULE_7__.Y5,dataCyShortcut:___WEBPACK_IMPORTED_MODULE_7__.Dx,subpartsSuffixes:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.kC)(___WEBPACK_IMPORTED_MODULE_7__.op)},localizableProps:___WEBPACK_IMPORTED_MODULE_7__.eH}),description:{component:"The Button component can be used to trigger an action."}}}};__webpack_exports__.default=meta;const onClickMock=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)((()=>(0,_utils_logger__WEBPACK_IMPORTED_MODULE_4__.fH)("Button","onClick handler"))),Primary={args:{label:"Button",onClick:onClickMock},play:async({canvasElement:canvasElement})=>{const button=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.Y5);button&&(_storybook_test__WEBPACK_IMPORTED_MODULE_1__.rC.click(button),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length),_storybook_test__WEBPACK_IMPORTED_MODULE_1__.rC.blur(button))}},Color={args:{...Primary.args,color:"success"}},Disabled={args:{...Primary.args,disabled:!0}},Elevated={args:{...Primary.args,elevated:!0}},Icon={args:{...Primary.args,icon:{name:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.F.send}}},IconCustom={args:{...Primary.args,icon:{component:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Style__WEBPACK_IMPORTED_MODULE_8__.A,null)}}},IconRight={args:{...Primary.args,icon:{name:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.F.send,position:"right"}}},IconRotate={args:{...Disabled.args,icon:{name:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.F.refresh,rotate:!0},label:"Loading"}},Localized={args:{...Primary.args,localized:!0,label:_utils_stories_decorators_Locale__WEBPACK_IMPORTED_MODULE_6__.Sp.button}},Styled={args:{...Primary.args,style:{backgroundColor:"red",color:"white"}}},VariantOutlined={args:{...Primary.args,variant:"outlined"}},__namedExportsOrder=["Primary","Color","Disabled","Elevated","Icon","IconCustom","IconRight","IconRotate","Localized","Styled","VariantOutlined"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Button",\n    onClick: onClickMock\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!button) {\n      return;\n    }\n    fireEvent.click(button);\n    await expect(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length);\n    fireEvent.blur(button);\n  }\n}',...Primary.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    color: "success"\n  }\n}',...Color.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Elevated.parameters={...Elevated.parameters,docs:{...Elevated.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    elevated: true\n  }\n}",...Elevated.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    icon: {\n      name: Icons.send\n    }\n  }\n}",...Icon.parameters?.docs?.source}}},IconCustom.parameters={...IconCustom.parameters,docs:{...IconCustom.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    icon: {\n      component: <MUIStyleIcon />\n    }\n  }\n}",...IconCustom.parameters?.docs?.source}}},IconRight.parameters={...IconRight.parameters,docs:{...IconRight.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    icon: {\n      name: Icons.send,\n      position: "right"\n    }\n  }\n}',...IconRight.parameters?.docs?.source}}},IconRotate.parameters={...IconRotate.parameters,docs:{...IconRotate.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Disabled.args,\n    icon: {\n      name: Icons.refresh,\n      rotate: true\n    },\n    label: "Loading"\n  }\n}',...IconRotate.parameters?.docs?.source}}},Localized.parameters={...Localized.parameters,docs:{...Localized.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    localized: true,\n    label: MessageMock.button\n  }\n}",...Localized.parameters?.docs?.source}}},Styled.parameters={...Styled.parameters,docs:{...Styled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    style: {\n      backgroundColor: "red",\n      color: "white"\n    }\n  }\n}',...Styled.parameters?.docs?.source}}},VariantOutlined.parameters={...VariantOutlined.parameters,docs:{...VariantOutlined.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    variant: "outlined"\n  }\n}',...VariantOutlined.parameters?.docs?.source}}}}}]);