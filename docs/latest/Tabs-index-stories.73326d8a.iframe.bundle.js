"use strict";(self.webpackChunk_melfore_mosaic=self.webpackChunk_melfore_mosaic||[]).push([[772],{"./src/components/Tabs/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:function(){return Color},DisabledTab:function(){return DisabledTab},Orientation:function(){return Orientation},Primary:function(){return Primary},SingleTabColor:function(){return SingleTabColor},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/mocks/LocaleMock.tsx"),_utils_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/stories/index.tsx"),_Progress__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Progress/index.tsx"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Tabs/index.tsx");___WEBPACK_IMPORTED_MODULE_4__.A.displayName="Tabs";const meta={title:"Navigation/Tabs",component:___WEBPACK_IMPORTED_MODULE_4__.A,decorators:[_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_1__.aK],parameters:{docs:{...(0,_utils_stories__WEBPACK_IMPORTED_MODULE_2__.A)({basedOn:{label:"MUI Tabs Component",url:"https://mui.com/material-ui/react-tabs/"},component:"Tabs",e2eTestInfo:{dataCyDefault:___WEBPACK_IMPORTED_MODULE_4__.Y}})}}};__webpack_exports__.default=meta;const Primary={args:{tabList:[{label:"PAGE1",content:"PAGE1"},{label:"PAGE2",content:"PAGE2"},{label:"PAGE3",content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Progress__WEBPACK_IMPORTED_MODULE_3__.A,{type:"circular",withLabel:!1})}]}},Color={args:{...Primary.args,color:"warning"}},Orientation={args:{...Primary.args,orientation:"vertical"}},DisabledTab={args:{tabList:[{label:"PAGE1",content:"PAGE1"},{label:"PAGE2",content:"PAGE2"},{label:"PAGE3",content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Progress__WEBPACK_IMPORTED_MODULE_3__.A,{type:"circular",withLabel:!1}),disabled:!0}]}},SingleTabColor={args:{tabList:[{label:"PAGE1",content:"PAGE1"},{label:"PAGE2",content:"PAGE2"},{label:"PAGE3",content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Progress__WEBPACK_IMPORTED_MODULE_3__.A,{type:"circular",withLabel:!1}),textColor:"error"}]}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    tabList: [{\n      label: "PAGE1",\n      content: "PAGE1"\n    }, {\n      label: "PAGE2",\n      content: "PAGE2"\n    }, {\n      label: "PAGE3",\n      content: <Progress type="circular" withLabel={false} />\n    }]\n  }\n}',...Primary.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    color: "warning"\n  }\n}',...Color.parameters?.docs?.source}}},Orientation.parameters={...Orientation.parameters,docs:{...Orientation.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    orientation: "vertical"\n  }\n}',...Orientation.parameters?.docs?.source}}},DisabledTab.parameters={...DisabledTab.parameters,docs:{...DisabledTab.parameters?.docs,source:{originalSource:'{\n  args: {\n    tabList: [{\n      label: "PAGE1",\n      content: "PAGE1"\n    }, {\n      label: "PAGE2",\n      content: "PAGE2"\n    }, {\n      label: "PAGE3",\n      content: <Progress type="circular" withLabel={false} />,\n      disabled: true\n    }]\n  }\n}',...DisabledTab.parameters?.docs?.source}}},SingleTabColor.parameters={...SingleTabColor.parameters,docs:{...SingleTabColor.parameters?.docs,source:{originalSource:'{\n  args: {\n    tabList: [{\n      label: "PAGE1",\n      content: "PAGE1"\n    }, {\n      label: "PAGE2",\n      content: "PAGE2"\n    }, {\n      label: "PAGE3",\n      content: <Progress type="circular" withLabel={false} />,\n      textColor: "error"\n    }]\n  }\n}',...SingleTabColor.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Color","Orientation","DisabledTab","SingleTabColor"]}}]);