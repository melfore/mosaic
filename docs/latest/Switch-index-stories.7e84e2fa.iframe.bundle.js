"use strict";(self.webpackChunk_melfore_mosaic=self.webpackChunk_melfore_mosaic||[]).push([[512],{"./src/utils/mocks/FormDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function cov_q4fkb96vn(){var path="/home/runner/work/mosaic/mosaic/src/utils/mocks/FormDecorator.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/mosaic/mosaic/src/utils/mocks/FormDecorator.tsx",statementMap:{0:{start:{line:2,column:22},end:{line:27,column:1}},1:{start:{line:9,column:28},end:{line:9,column:51}},2:{start:{line:10,column:2},end:{line:15,column:22}},3:{start:{line:11,column:4},end:{line:13,column:5}},4:{start:{line:12,column:6},end:{line:12,column:30}},5:{start:{line:16,column:19},end:{line:19,column:24}},6:{start:{line:17,column:4},end:{line:17,column:48}},7:{start:{line:18,column:4},end:{line:18,column:20}},8:{start:{line:20,column:2},end:{line:26,column:5}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:22},end:{line:2,column:23}},loc:{start:{line:8,column:6},end:{line:27,column:1}},line:8},1:{name:"(anonymous_1)",decl:{start:{line:10,column:12},end:{line:10,column:13}},loc:{start:{line:10,column:18},end:{line:15,column:3}},line:10},2:{name:"(anonymous_2)",decl:{start:{line:16,column:31},end:{line:16,column:32}},loc:{start:{line:16,column:40},end:{line:19,column:3}},line:16}},branchMap:{0:{loc:{start:{line:11,column:4},end:{line:13,column:5}},type:"if",locations:[{start:{line:11,column:4},end:{line:13,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:11},1:{loc:{start:{line:17,column:4},end:{line:17,column:47}},type:"binary-expr",locations:[{start:{line:17,column:4},end:{line:17,column:20}},{start:{line:17,column:24},end:{line:17,column:47}}],line:17}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:void 0,names:["useCallback","useEffect","useState","FormDecorator","Story","args","onChange","externalOnChange","value","externalValue","setValue"],sourceRoot:void 0,sources:["/home/runner/work/mosaic/mosaic/src/utils/mocks/FormDecorator.tsx"],sourcesContent:['import { useCallback, useEffect, useState } from "react";\nimport { DecoratorFn } from "@storybook/react";\n\nexport type FormValue = boolean | number | string | null;\n\nconst FormDecorator: DecoratorFn = (Story, { args: { onChange: externalOnChange, value: externalValue, ...args } }) => {\n  const [value, setValue] = useState(externalValue);\n\n  useEffect(() => {\n    if (externalValue !== value) {\n      setValue(externalValue);\n    }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, [externalValue]);\n\n  const onChange = useCallback(\n    (value: FormValue) => {\n      externalOnChange && externalOnChange(value);\n      setValue(value);\n    },\n    [externalOnChange]\n  );\n\n  return Story({\n    args: {\n      ...args,\n      onChange,\n      value,\n    },\n  });\n};\n\nexport default FormDecorator;\n'],mappings:"AAAA,SAASA,WAAW,EAAEC,SAAS,EAAEC,QAAQ,QAAQ,OAAO;AAKxD,MAAMC,aAA0B,GAAGA,CAACC,KAAK,EAAE;EAAEC,IAAI,EAAE;IAAEC,QAAQ,EAAEC,gBAAgB;IAAEC,KAAK,EAAEC,aAAa;IAAE,GAAGJ;EAAK;AAAE,CAAC,KAAK;EACrH,MAAM,CAACG,KAAK,EAAEE,QAAQ,CAAC,GAAGR,QAAQ,CAACO,aAAa,CAAC;EAEjDR,SAAS,CAAC,MAAM;IACd,IAAIQ,aAAa,KAAKD,KAAK,EAAE;MAC3BE,QAAQ,CAACD,aAAa,CAAC;IACzB;IACA;EACF,CAAC,EAAE,CAACA,aAAa,CAAC,CAAC;EAEnB,MAAMH,QAAQ,GAAGN,WAAW,CACzBQ,KAAgB,IAAK;IACpBD,gBAAgB,IAAIA,gBAAgB,CAACC,KAAK,CAAC;IAC3CE,QAAQ,CAACF,KAAK,CAAC;EACjB,CAAC,EACD,CAACD,gBAAgB,CACnB,CAAC;EAED,OAAOH,KAAK,CAAC;IACXC,IAAI,EAAE;MACJ,GAAGA,IAAI;MACPC,QAAQ;MACRE;IACF;EACF,CAAC,CAAC;AACJ,CAAC;AAED,eAAeL,aAAa",ignoreList:[]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"e4eb69be5315125f1d9da7b75a699a0609d3dc50"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"e4eb69be5315125f1d9da7b75a699a0609d3dc50"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_q4fkb96vn=function(){return actualCoverage},actualCoverage}cov_q4fkb96vn(),cov_q4fkb96vn().s[0]++;__webpack_exports__.A=(Story,{args:{onChange:externalOnChange,value:externalValue,...args}})=>{cov_q4fkb96vn().f[0]++;const[value,setValue]=(cov_q4fkb96vn().s[1]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(externalValue));cov_q4fkb96vn().s[2]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{cov_q4fkb96vn().f[1]++,cov_q4fkb96vn().s[3]++,externalValue!==value?(cov_q4fkb96vn().b[0][0]++,cov_q4fkb96vn().s[4]++,setValue(externalValue)):cov_q4fkb96vn().b[0][1]++}),[externalValue]);const onChange=(cov_q4fkb96vn().s[5]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{cov_q4fkb96vn().f[2]++,cov_q4fkb96vn().s[6]++,cov_q4fkb96vn().b[1][0]++,externalOnChange&&(cov_q4fkb96vn().b[1][1]++,externalOnChange(value)),cov_q4fkb96vn().s[7]++,setValue(value)}),[externalOnChange]));return cov_q4fkb96vn().s[8]++,Story({args:{...args,onChange:onChange,value:value}})}},"./src/components/Switch/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DisableRipple:function(){return DisableRipple},Disabled:function(){return Disabled},Label:function(){return Label},LabelEnd:function(){return LabelEnd},Localized:function(){return Localized},Primary:function(){return Primary},SizeSmall:function(){return SizeSmall},Styled:function(){return Styled},__namedExportsOrder:function(){return __namedExportsOrder}});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/index.ts"),_utils_mocks_FormDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/mocks/FormDecorator.tsx"),_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/mocks/LocaleMock.tsx"),_utils_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/stories/index.tsx"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Switch/index.tsx");___WEBPACK_IMPORTED_MODULE_4__.et.displayName="Switch";const meta={title:"Inputs/Switch",component:___WEBPACK_IMPORTED_MODULE_4__.et,decorators:[_utils_mocks_FormDecorator__WEBPACK_IMPORTED_MODULE_1__.A,_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_2__.aK],parameters:{docs:{...(0,_utils_stories__WEBPACK_IMPORTED_MODULE_3__.A)({basedOn:{label:"MUI Switch Component",url:"https://mui.com/components/switches/"},component:"Switch",e2eTestInfo:{dataCyDefault:___WEBPACK_IMPORTED_MODULE_4__.Y5,dataCyShortcut:___WEBPACK_IMPORTED_MODULE_4__.Dx,subpartsSuffixes:(0,_utils__WEBPACK_IMPORTED_MODULE_0__.kC)(___WEBPACK_IMPORTED_MODULE_4__.op)},localizableProps:___WEBPACK_IMPORTED_MODULE_4__.eH})}}};__webpack_exports__.default=meta;const Primary={args:{value:!0}},Disabled={args:{...Primary.args,disabled:!0}},DisableRipple={args:{...Primary.args,disableRipple:!0}},Label={args:{...Primary.args,label:"Switch"}},LabelEnd={args:{...Label.args,labelPlacement:"end"}},Localized={args:{...Primary.args,localized:!0,label:_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_2__.Sp.switch}},SizeSmall={args:{...Primary.args,size:"small"}},Styled={args:{...Primary.args,style:{color:"red"}}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: true\n  }\n}",...Primary.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},DisableRipple.parameters={...DisableRipple.parameters,docs:{...DisableRipple.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    disableRipple: true\n  }\n}",...DisableRipple.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    label: "Switch"\n  }\n}',...Label.parameters?.docs?.source}}},LabelEnd.parameters={...LabelEnd.parameters,docs:{...LabelEnd.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Label.args,\n    labelPlacement: "end"\n  }\n}',...LabelEnd.parameters?.docs?.source}}},Localized.parameters={...Localized.parameters,docs:{...Localized.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    localized: true,\n    label: MessageMock.switch\n  }\n}",...Localized.parameters?.docs?.source}}},SizeSmall.parameters={...SizeSmall.parameters,docs:{...SizeSmall.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    size: "small"\n  }\n}',...SizeSmall.parameters?.docs?.source}}},Styled.parameters={...Styled.parameters,docs:{...Styled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    style: {\n      color: "red"\n    }\n  }\n}',...Styled.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Disabled","DisableRipple","Label","LabelEnd","Localized","SizeSmall","Styled"]}}]);