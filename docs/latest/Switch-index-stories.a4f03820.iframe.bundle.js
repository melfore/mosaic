"use strict";(self.webpackChunk_melfore_mosaic=self.webpackChunk_melfore_mosaic||[]).push([[512],{"./src/utils/stories/decorators/Form.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function cov_2fykcyndz6(){var path="/home/runner/work/mosaic/mosaic/src/utils/stories/decorators/Form.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/mosaic/mosaic/src/utils/stories/decorators/Form.tsx",statementMap:{0:{start:{line:3,column:17},end:{line:25,column:1}},1:{start:{line:9,column:28},end:{line:9,column:51}},2:{start:{line:10,column:2},end:{line:15,column:22}},3:{start:{line:11,column:4},end:{line:13,column:5}},4:{start:{line:12,column:6},end:{line:12,column:30}},5:{start:{line:16,column:19},end:{line:19,column:24}},6:{start:{line:17,column:4},end:{line:17,column:48}},7:{start:{line:18,column:4},end:{line:18,column:20}},8:{start:{line:20,column:2},end:{line:24,column:6}},9:{start:{line:26,column:22},end:{line:28,column:63}},10:{start:{line:28,column:19},end:{line:28,column:63}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:17},end:{line:3,column:18}},loc:{start:{line:8,column:6},end:{line:25,column:1}},line:8},1:{name:"(anonymous_1)",decl:{start:{line:10,column:12},end:{line:10,column:13}},loc:{start:{line:10,column:18},end:{line:15,column:3}},line:10},2:{name:"(anonymous_2)",decl:{start:{line:16,column:31},end:{line:16,column:32}},loc:{start:{line:16,column:40},end:{line:19,column:3}},line:16},3:{name:"(anonymous_3)",decl:{start:{line:26,column:22},end:{line:26,column:23}},loc:{start:{line:28,column:19},end:{line:28,column:63}},line:28}},branchMap:{0:{loc:{start:{line:11,column:4},end:{line:13,column:5}},type:"if",locations:[{start:{line:11,column:4},end:{line:13,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:11},1:{loc:{start:{line:17,column:4},end:{line:17,column:47}},type:"binary-expr",locations:[{start:{line:17,column:4},end:{line:17,column:20}},{start:{line:17,column:24},end:{line:17,column:47}}],line:17}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},f:{0:0,1:0,2:0,3:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:void 0,names:["React","cloneElement","useCallback","useEffect","useState","FormMock","children","onChange","externalOnChange","value","externalValue","props","setValue","createElement","Fragment","FormDecorator","Story","args"],sourceRoot:void 0,sources:["/home/runner/work/mosaic/mosaic/src/utils/stories/decorators/Form.tsx"],sourcesContent:['/* eslint-disable @typescript-eslint/no-explicit-any */\nimport React, { cloneElement, ReactElement, useCallback, useEffect, useState } from "react";\nimport { PropsWithChildren } from "react";\nimport { Decorator } from "@storybook/react";\n\ninterface BaseFormProps {\n  onChange?: (value: any) => void;\n  value?: any;\n}\n\nexport type FormMockProps = BaseFormProps & {\n  [key: string]: any;\n};\n\nconst FormMock = ({\n  children,\n  onChange: externalOnChange,\n  value: externalValue,\n  ...props\n}: PropsWithChildren<FormMockProps>) => {\n  const [value, setValue] = useState(externalValue);\n\n  useEffect(() => {\n    if (externalValue !== value) {\n      setValue(externalValue);\n    }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, [externalValue]);\n\n  const onChange = useCallback(\n    (value: any) => {\n      externalOnChange && externalOnChange(value);\n      setValue(value);\n    },\n    [externalOnChange]\n  );\n\n  return <>{cloneElement(children as ReactElement<any>, { onChange, value, ...props })}</>;\n};\n\nconst FormDecorator: Decorator<FormMockProps> = (Story, { args }) => <FormMock {...args}>{Story()}</FormMock>;\n\nexport default FormDecorator;\n'],mappings:"AAAA;AACA,OAAOA,KAAK,IAAIC,YAAY,EAAgBC,WAAW,EAAEC,SAAS,EAAEC,QAAQ,QAAQ,OAAO;AAa3F,MAAMC,QAAQ,GAAGA,CAAC;EAChBC,QAAQ;EACRC,QAAQ,EAAEC,gBAAgB;EAC1BC,KAAK,EAAEC,aAAa;EACpB,GAAGC;AAC6B,CAAC,KAAK;EACtC,MAAM,CAACF,KAAK,EAAEG,QAAQ,CAAC,GAAGR,QAAQ,CAACM,aAAa,CAAC;EAEjDP,SAAS,CAAC,MAAM;IACd,IAAIO,aAAa,KAAKD,KAAK,EAAE;MAC3BG,QAAQ,CAACF,aAAa,CAAC;IACzB;IACA;EACF,CAAC,EAAE,CAACA,aAAa,CAAC,CAAC;EAEnB,MAAMH,QAAQ,GAAGL,WAAW,CACzBO,KAAU,IAAK;IACdD,gBAAgB,IAAIA,gBAAgB,CAACC,KAAK,CAAC;IAC3CG,QAAQ,CAACH,KAAK,CAAC;EACjB,CAAC,EACD,CAACD,gBAAgB,CACnB,CAAC;EAED,oBAAOR,KAAA,CAAAa,aAAA,CAAAb,KAAA,CAAAc,QAAA,qBAAGb,YAAY,CAACK,QAAQ,EAAuB;IAAEC,QAAQ;IAAEE,KAAK;IAAE,GAAGE;EAAM,CAAC,CAAI,CAAC;AAC1F,CAAC;AAED,MAAMI,aAAuC,GAAGA,CAACC,KAAK,EAAE;EAAEC;AAAK,CAAC,kBAAKjB,KAAA,CAAAa,aAAA,CAACR,QAAQ,EAAKY,IAAI,EAAGD,KAAK,CAAC,CAAY,CAAC;AAE7G,eAAeD,aAAa",ignoreList:[]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"633496fd3e9087efba38d3ed4b3f7a383e9e7453"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"633496fd3e9087efba38d3ed4b3f7a383e9e7453"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_2fykcyndz6=function(){return actualCoverage},actualCoverage}cov_2fykcyndz6(),cov_2fykcyndz6().s[0]++;const FormMock=({children:children,onChange:externalOnChange,value:externalValue,...props})=>{cov_2fykcyndz6().f[0]++;const[value,setValue]=(cov_2fykcyndz6().s[1]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(externalValue));cov_2fykcyndz6().s[2]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{cov_2fykcyndz6().f[1]++,cov_2fykcyndz6().s[3]++,externalValue!==value?(cov_2fykcyndz6().b[0][0]++,cov_2fykcyndz6().s[4]++,setValue(externalValue)):cov_2fykcyndz6().b[0][1]++}),[externalValue]);const onChange=(cov_2fykcyndz6().s[5]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{cov_2fykcyndz6().f[2]++,cov_2fykcyndz6().s[6]++,cov_2fykcyndz6().b[1][0]++,externalOnChange&&(cov_2fykcyndz6().b[1][1]++,externalOnChange(value)),cov_2fykcyndz6().s[7]++,setValue(value)}),[externalOnChange]));return cov_2fykcyndz6().s[8]++,react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children,{onChange:onChange,value:value,...props}))};cov_2fykcyndz6().s[9]++;__webpack_exports__.A=(Story,{args:args})=>(cov_2fykcyndz6().f[3]++,cov_2fykcyndz6().s[10]++,react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormMock,args,Story()))},"./src/components/Switch/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DisableRipple:function(){return DisableRipple},Disabled:function(){return Disabled},Label:function(){return Label},LabelEnd:function(){return LabelEnd},Localized:function(){return Localized},Primary:function(){return Primary},SizeSmall:function(){return SizeSmall},Styled:function(){return Styled},__namedExportsOrder:function(){return __namedExportsOrder}});var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/index.ts"),_utils_stories__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/stories/index.tsx"),_utils_stories_decorators_Form__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/stories/decorators/Form.tsx"),_utils_stories_decorators_Locale__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/stories/decorators/Locale.tsx"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Switch/index.tsx");___WEBPACK_IMPORTED_MODULE_4__.et.displayName="Switch";const meta={title:"Inputs/Switch",component:___WEBPACK_IMPORTED_MODULE_4__.et,decorators:[_utils_stories_decorators_Form__WEBPACK_IMPORTED_MODULE_2__.A,_utils_stories_decorators_Locale__WEBPACK_IMPORTED_MODULE_3__.Ay],parameters:{docs:{...(0,_utils_stories__WEBPACK_IMPORTED_MODULE_1__.A)({basedOn:{label:"MUI Switch Component",url:"https://mui.com/components/switches/"},component:"Switch",e2eTestInfo:{dataCyDefault:___WEBPACK_IMPORTED_MODULE_4__.Y5,dataCyShortcut:___WEBPACK_IMPORTED_MODULE_4__.Dx,subpartsSuffixes:(0,_utils__WEBPACK_IMPORTED_MODULE_0__.kC)(___WEBPACK_IMPORTED_MODULE_4__.op)},localizableProps:___WEBPACK_IMPORTED_MODULE_4__.eH}),description:{component:"The Switch is used to display a toggle switch."}}}};__webpack_exports__.default=meta;const Primary={args:{value:!0}},Disabled={args:{...Primary.args,disabled:!0}},DisableRipple={args:{...Primary.args,disableRipple:!0}},Label={args:{...Primary.args,label:"Switch"}},LabelEnd={args:{...Label.args,labelPlacement:"end"}},Localized={args:{...Primary.args,localized:!0,label:_utils_stories_decorators_Locale__WEBPACK_IMPORTED_MODULE_3__.Sp.switch}},SizeSmall={args:{...Primary.args,size:"small"}},Styled={args:{...Primary.args,style:{color:"red"}}},__namedExportsOrder=["Primary","Disabled","DisableRipple","Label","LabelEnd","Localized","SizeSmall","Styled"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: true\n  }\n}",...Primary.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},DisableRipple.parameters={...DisableRipple.parameters,docs:{...DisableRipple.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    disableRipple: true\n  }\n}",...DisableRipple.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    label: "Switch"\n  }\n}',...Label.parameters?.docs?.source}}},LabelEnd.parameters={...LabelEnd.parameters,docs:{...LabelEnd.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Label.args,\n    labelPlacement: "end"\n  }\n}',...LabelEnd.parameters?.docs?.source}}},Localized.parameters={...Localized.parameters,docs:{...Localized.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    localized: true,\n    label: MessageMock.switch\n  }\n}",...Localized.parameters?.docs?.source}}},SizeSmall.parameters={...SizeSmall.parameters,docs:{...SizeSmall.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    size: "small"\n  }\n}',...SizeSmall.parameters?.docs?.source}}},Styled.parameters={...Styled.parameters,docs:{...Styled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    style: {\n      color: "red"\n    }\n  }\n}',...Styled.parameters?.docs?.source}}}}}]);