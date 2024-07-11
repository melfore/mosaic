"use strict";(self.webpackChunk_melfore_mosaic=self.webpackChunk_melfore_mosaic||[]).push([[212],{"./src/components/Spacer/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HorizontalSpacing:function(){return HorizontalSpacing},InvalidSpacing:function(){return InvalidSpacing},Primary:function(){return Primary},VerticalSpacing:function(){return VerticalSpacing},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_stories__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/stories/index.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Spacer/index.tsx");___WEBPACK_IMPORTED_MODULE_2__.RQ.displayName="Spacer";const meta={title:"Display/Spacer",component:___WEBPACK_IMPORTED_MODULE_2__.RQ,decorators:[(Story,{args:{direction:direction}})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"flex-content",style:{display:"flex",flexDirection:"vertical"===direction?"column":"row"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"first-content"},"First Content"),Story(),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"second-content"},"Second Content"))],parameters:{docs:{...(0,_utils_stories__WEBPACK_IMPORTED_MODULE_1__.A)({basedOn:{label:"HTML Div"},component:"Spacer",e2eTestInfo:{dataCyDefault:___WEBPACK_IMPORTED_MODULE_2__.Y5}}),description:{component:"The Spacer component is used to add spacing between elements."}}}};__webpack_exports__.default=meta;const Primary={args:{}},InvalidSpacing={args:{...Primary.args,level:-999}},HorizontalSpacing={args:{...Primary.args,direction:"horizontal"}},VerticalSpacing={args:{...Primary.args,direction:"vertical"}},__namedExportsOrder=["Primary","InvalidSpacing","HorizontalSpacing","VerticalSpacing"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}},InvalidSpacing.parameters={...InvalidSpacing.parameters,docs:{...InvalidSpacing.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    level: -999\n  }\n}",...InvalidSpacing.parameters?.docs?.source}}},HorizontalSpacing.parameters={...HorizontalSpacing.parameters,docs:{...HorizontalSpacing.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    direction: "horizontal"\n  }\n}',...HorizontalSpacing.parameters?.docs?.source}}},VerticalSpacing.parameters={...VerticalSpacing.parameters,docs:{...VerticalSpacing.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    direction: "vertical"\n  }\n}',...VerticalSpacing.parameters?.docs?.source}}}}}]);