(self.webpackChunk_melfore_mosaic=self.webpackChunk_melfore_mosaic||[]).push([[996],{"./src/utils/mocks/FormDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function cov_q4fkb96vn(){var path="/home/runner/work/mosaic/mosaic/src/utils/mocks/FormDecorator.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/mosaic/mosaic/src/utils/mocks/FormDecorator.tsx",statementMap:{0:{start:{line:2,column:22},end:{line:27,column:1}},1:{start:{line:9,column:28},end:{line:9,column:51}},2:{start:{line:10,column:2},end:{line:15,column:22}},3:{start:{line:11,column:4},end:{line:13,column:5}},4:{start:{line:12,column:6},end:{line:12,column:30}},5:{start:{line:16,column:19},end:{line:19,column:24}},6:{start:{line:17,column:4},end:{line:17,column:48}},7:{start:{line:18,column:4},end:{line:18,column:20}},8:{start:{line:20,column:2},end:{line:26,column:5}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:22},end:{line:2,column:23}},loc:{start:{line:8,column:6},end:{line:27,column:1}},line:8},1:{name:"(anonymous_1)",decl:{start:{line:10,column:12},end:{line:10,column:13}},loc:{start:{line:10,column:18},end:{line:15,column:3}},line:10},2:{name:"(anonymous_2)",decl:{start:{line:16,column:31},end:{line:16,column:32}},loc:{start:{line:16,column:40},end:{line:19,column:3}},line:16}},branchMap:{0:{loc:{start:{line:11,column:4},end:{line:13,column:5}},type:"if",locations:[{start:{line:11,column:4},end:{line:13,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:11},1:{loc:{start:{line:17,column:4},end:{line:17,column:47}},type:"binary-expr",locations:[{start:{line:17,column:4},end:{line:17,column:20}},{start:{line:17,column:24},end:{line:17,column:47}}],line:17}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:void 0,names:["useCallback","useEffect","useState","FormDecorator","Story","args","onChange","externalOnChange","value","externalValue","setValue"],sourceRoot:void 0,sources:["/home/runner/work/mosaic/mosaic/src/utils/mocks/FormDecorator.tsx"],sourcesContent:['import { useCallback, useEffect, useState } from "react";\nimport { DecoratorFn } from "@storybook/react";\n\nexport type FormValue = boolean | number | string | null;\n\nconst FormDecorator: DecoratorFn = (Story, { args: { onChange: externalOnChange, value: externalValue, ...args } }) => {\n  const [value, setValue] = useState(externalValue);\n\n  useEffect(() => {\n    if (externalValue !== value) {\n      setValue(externalValue);\n    }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, [externalValue]);\n\n  const onChange = useCallback(\n    (value: FormValue) => {\n      externalOnChange && externalOnChange(value);\n      setValue(value);\n    },\n    [externalOnChange]\n  );\n\n  return Story({\n    args: {\n      ...args,\n      onChange,\n      value,\n    },\n  });\n};\n\nexport default FormDecorator;\n'],mappings:"AAAA,SAASA,WAAW,EAAEC,SAAS,EAAEC,QAAQ,QAAQ,OAAO;AAKxD,MAAMC,aAA0B,GAAGA,CAACC,KAAK,EAAE;EAAEC,IAAI,EAAE;IAAEC,QAAQ,EAAEC,gBAAgB;IAAEC,KAAK,EAAEC,aAAa;IAAE,GAAGJ;EAAK;AAAE,CAAC,KAAK;EACrH,MAAM,CAACG,KAAK,EAAEE,QAAQ,CAAC,GAAGR,QAAQ,CAACO,aAAa,CAAC;EAEjDR,SAAS,CAAC,MAAM;IACd,IAAIQ,aAAa,KAAKD,KAAK,EAAE;MAC3BE,QAAQ,CAACD,aAAa,CAAC;IACzB;IACA;EACF,CAAC,EAAE,CAACA,aAAa,CAAC,CAAC;EAEnB,MAAMH,QAAQ,GAAGN,WAAW,CACzBQ,KAAgB,IAAK;IACpBD,gBAAgB,IAAIA,gBAAgB,CAACC,KAAK,CAAC;IAC3CE,QAAQ,CAACF,KAAK,CAAC;EACjB,CAAC,EACD,CAACD,gBAAgB,CACnB,CAAC;EAED,OAAOH,KAAK,CAAC;IACXC,IAAI,EAAE;MACJ,GAAGA,IAAI;MACPC,QAAQ;MACRE;IACF;EACF,CAAC,CAAC;AACJ,CAAC;AAED,eAAeL,aAAa",ignoreList:[]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"e4eb69be5315125f1d9da7b75a699a0609d3dc50"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"e4eb69be5315125f1d9da7b75a699a0609d3dc50"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_q4fkb96vn=function(){return actualCoverage},actualCoverage}cov_q4fkb96vn(),cov_q4fkb96vn().s[0]++;__webpack_exports__.A=(Story,{args:{onChange:externalOnChange,value:externalValue,...args}})=>{cov_q4fkb96vn().f[0]++;const[value,setValue]=(cov_q4fkb96vn().s[1]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(externalValue));cov_q4fkb96vn().s[2]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{cov_q4fkb96vn().f[1]++,cov_q4fkb96vn().s[3]++,externalValue!==value?(cov_q4fkb96vn().b[0][0]++,cov_q4fkb96vn().s[4]++,setValue(externalValue)):cov_q4fkb96vn().b[0][1]++}),[externalValue]);const onChange=(cov_q4fkb96vn().s[5]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{cov_q4fkb96vn().f[2]++,cov_q4fkb96vn().s[6]++,cov_q4fkb96vn().b[1][0]++,externalOnChange&&(cov_q4fkb96vn().b[1][1]++,externalOnChange(value)),cov_q4fkb96vn().s[7]++,setValue(value)}),[externalOnChange]));return cov_q4fkb96vn().s[8]++,Story({args:{...args,onChange:onChange,value:value}})}},"./src/components/Select/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoSort:function(){return AutoSort},Autocomplete:function(){return Autocomplete},AutocompleteChange:function(){return AutocompleteChange},Disabled:function(){return Disabled},Grouped:function(){return Grouped},GroupedCustomLabel:function(){return GroupedCustomLabel},Loading:function(){return Loading},Localized:function(){return Localized},Multiple:function(){return Multiple},OnScrollEndCallback:function(){return OnScrollEndCallback},OptionCustomLabel:function(){return OptionCustomLabel},OptionCustomRendering:function(){return OptionCustomRendering},Primary:function(){return Primary},Required:function(){return Required},SizeSmall:function(){return SizeSmall},Styled:function(){return Styled},VariantFilled:function(){return VariantFilled},VariantStandard:function(){return VariantStandard},Virtualized:function(){return Virtualized},VirtualizedWith1000Elements:function(){return VirtualizedWith1000Elements},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/index.ts"),_utils_logger__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/logger/index.ts"),_utils_mocks_FormDecorator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/mocks/FormDecorator.tsx"),_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/mocks/LocaleMock.tsx"),_utils_stories__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/stories/index.tsx"),___WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Select/index.tsx");(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.jK)({testIdAttribute:"data-cy"});___WEBPACK_IMPORTED_MODULE_7__.Gz.displayName="Select";const meta={title:"Inputs/Select",component:___WEBPACK_IMPORTED_MODULE_7__.Gz,decorators:[_utils_mocks_FormDecorator__WEBPACK_IMPORTED_MODULE_4__.A,_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_5__.aK],parameters:{docs:{...(0,_utils_stories__WEBPACK_IMPORTED_MODULE_6__.A)({basedOn:{label:"MUI Autocomplete Component",url:"https://mui.com/components/autocomplete/"},component:"Select",e2eTestInfo:{dataCyDefault:___WEBPACK_IMPORTED_MODULE_7__.Y5,dataCyShortcut:___WEBPACK_IMPORTED_MODULE_7__.Dx,subpartsSuffixes:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.kC)(___WEBPACK_IMPORTED_MODULE_7__.op)},localizableProps:___WEBPACK_IMPORTED_MODULE_7__.eH})}}};__webpack_exports__.default=meta;const onInputChangeMock=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)((value=>(0,_utils_logger__WEBPACK_IMPORTED_MODULE_3__.fH)("Select",`onInputChange handler '${value||null}'`))),onChangeMock=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)((value=>(0,_utils_logger__WEBPACK_IMPORTED_MODULE_3__.fH)("Select",`onChange handler '${value||null}'`))),onScrollEndMock=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)((()=>(0,_utils_logger__WEBPACK_IMPORTED_MODULE_3__.fH)("Select","onScroll handler"))),options=["Paintings","Sculpture","Mosaic","Murales","Photography"],Primary={args:{label:"Select",multiple:!1,onClose:void 0,onInputChange:void 0,onScrollEnd:void 0,onChange:onChangeMock,options:options,placeholder:"Select a value"},play:async({canvasElement:canvasElement})=>{const select=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.Y5);if(!select)return;await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(select);const listbox=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(_storybook_test__WEBPACK_IMPORTED_MODULE_1__.nj.getByRole("presentation")).getByRole("listbox"),options=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(listbox).getAllByRole("option");_storybook_test__WEBPACK_IMPORTED_MODULE_1__.rC.click(options[1]),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length)}},Autocomplete={args:{...Primary.args,autoComplete:!1},play:async({canvasElement:canvasElement})=>{const select=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.Y5);select&&await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.type(select,"M")}},AutocompleteChange={args:{...Primary.args,autoComplete:!1,onInputChange:onInputChangeMock},play:async({canvasElement:canvasElement})=>{const select=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.Y5);select&&(await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.type(select,"M"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(onInputChangeMock).toHaveBeenCalledTimes(onInputChangeMock.mock.calls.length))}},AutoSort={args:{...Primary.args,autoSort:"asc"}},Disabled={args:{...Primary.args,disabled:!0}},Grouped={args:{...Primary.args,groupBy:option=>option.slice(0,1)},play:async({canvasElement:canvasElement})=>{const select=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.Y5);select&&await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(select)}},GroupedCustomLabel={args:{...Grouped.args,getGroupLabel:groupName=>`Letter: ${groupName}`},play:async({canvasElement:canvasElement})=>{const select=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.Y5);select&&await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(select)}},Loading={args:{...Primary.args,loading:!0}},Localized={args:{...Primary.args,localized:!0,label:_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_5__.Sp.select,placeholder:_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_5__.Sp.placeholder}},Multiple={args:{...Primary.args,multiple:!0,value:[]},play:async({canvasElement:canvasElement})=>{const select=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.Y5);if(!select)return;await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(select);const listbox=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(_storybook_test__WEBPACK_IMPORTED_MODULE_1__.nj.getByRole("presentation")).getByRole("listbox"),options=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(listbox).getAllByRole("option");_storybook_test__WEBPACK_IMPORTED_MODULE_1__.rC.click(options[1]),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length)}},OnScrollEndCallback={args:{...Primary.args,onScrollEnd:onScrollEndMock,options:[...options,...options,...options]},play:async({canvasElement:canvasElement})=>{const select=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.Y5);if(!select)return;await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(select);const listbox=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(_storybook_test__WEBPACK_IMPORTED_MODULE_1__.nj.getByRole("presentation")).getByRole("listbox"),scrollTop=listbox.scrollHeight-listbox.clientHeight-.5;(0,_utils_logger__WEBPACK_IMPORTED_MODULE_3__.fH)("Select.fireScroll",`ch ${listbox.clientHeight} / st ${scrollTop} / sh ${listbox.scrollHeight}`),_storybook_test__WEBPACK_IMPORTED_MODULE_1__.rC.scroll(listbox,{target:{scrollTop:scrollTop}}),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(onScrollEndMock).toHaveBeenCalledTimes(onScrollEndMock.mock.calls.length)}},OptionCustomLabel={args:{...Primary.args,getOptionLabel:option=>option.slice(0,3)},play:async({canvasElement:canvasElement})=>{const select=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.Y5);select&&await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(select)}},OptionCustomRendering={args:{...Primary.args,customOptionRendering:option=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,option.slice(0,3).toUpperCase())},play:async({canvasElement:canvasElement})=>{const select=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.Y5);select&&await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(select)}},Required={args:{...Primary.args,required:!0}},SizeSmall={args:{...Primary.args,size:"small"}},Styled={args:{...Primary.args,style:{color:"red",fontWeight:"bold",fontSize:"large",textAlign:"center"}}},VariantFilled={args:{...Primary.args,variant:"filled"}},VariantStandard={args:{...Primary.args,variant:"standard"}},Virtualized={args:{...Primary.args,virtualized:!0},play:async({canvasElement:canvasElement})=>{const select=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.Y5);select&&await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(select)}},options1000=[];for(let i=0;i<1e3;i++)options1000.push(i+1+" Element");const VirtualizedWith1000Elements={args:{...Primary.args,options:options1000,virtualized:!0},play:async({canvasElement:canvasElement})=>{const select=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.Y5);select&&await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(select)}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Select",\n    multiple: false,\n    onClose: undefined,\n    onInputChange: undefined,\n    onScrollEnd: undefined,\n    onChange: onChangeMock,\n    options,\n    placeholder: "Select a value"\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n    const listbox = within(screen.getByRole("presentation")).getByRole("listbox");\n    const options = within(listbox).getAllByRole("option");\n    fireEvent.click(options[1]);\n    await expect(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length);\n  }\n}',...Primary.parameters?.docs?.source}}},Autocomplete.parameters={...Autocomplete.parameters,docs:{...Autocomplete.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    autoComplete: false\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.type(select, "M");\n  }\n}',...Autocomplete.parameters?.docs?.source}}},AutocompleteChange.parameters={...AutocompleteChange.parameters,docs:{...AutocompleteChange.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    autoComplete: false,\n    onInputChange: onInputChangeMock\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.type(select, "M");\n    await expect(onInputChangeMock).toHaveBeenCalledTimes(onInputChangeMock.mock.calls.length);\n  }\n}',...AutocompleteChange.parameters?.docs?.source}}},AutoSort.parameters={...AutoSort.parameters,docs:{...AutoSort.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    autoSort: "asc"\n  }\n}',...AutoSort.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Grouped.parameters={...Grouped.parameters,docs:{...Grouped.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    groupBy: option => (option as string).slice(0, 1)\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n  }\n}",...Grouped.parameters?.docs?.source}}},GroupedCustomLabel.parameters={...GroupedCustomLabel.parameters,docs:{...GroupedCustomLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Grouped.args,\n    getGroupLabel: groupName => `Letter: ${groupName}`\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n  }\n}",...GroupedCustomLabel.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    loading: true\n  }\n}",...Loading.parameters?.docs?.source}}},Localized.parameters={...Localized.parameters,docs:{...Localized.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    localized: true,\n    label: MessageMock.select,\n    placeholder: MessageMock.placeholder\n  }\n}",...Localized.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    multiple: true,\n    value: []\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n    const listbox = within(screen.getByRole("presentation")).getByRole("listbox");\n    const options = within(listbox).getAllByRole("option");\n    fireEvent.click(options[1]);\n    await expect(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length);\n  }\n}',...Multiple.parameters?.docs?.source}}},OnScrollEndCallback.parameters={...OnScrollEndCallback.parameters,docs:{...OnScrollEndCallback.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    onScrollEnd: onScrollEndMock,\n    options: [...options, ...options, ...options]\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n    const listbox = within(screen.getByRole("presentation")).getByRole("listbox");\n    const scrollTop = listbox.scrollHeight - listbox.clientHeight - 0.5;\n    logInfo("Select.fireScroll", `ch ${listbox.clientHeight} / st ${scrollTop} / sh ${listbox.scrollHeight}`);\n    fireEvent.scroll(listbox, {\n      target: {\n        scrollTop\n      }\n    });\n    await expect(onScrollEndMock).toHaveBeenCalledTimes(onScrollEndMock.mock.calls.length);\n  }\n}',...OnScrollEndCallback.parameters?.docs?.source}}},OptionCustomLabel.parameters={...OptionCustomLabel.parameters,docs:{...OptionCustomLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    getOptionLabel: option => (option as string).slice(0, 3)\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n  }\n}",...OptionCustomLabel.parameters?.docs?.source}}},OptionCustomRendering.parameters={...OptionCustomRendering.parameters,docs:{...OptionCustomRendering.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    customOptionRendering: option => <b>{(option as string).slice(0, 3).toUpperCase()}</b>\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n  }\n}",...OptionCustomRendering.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    required: true\n  }\n}",...Required.parameters?.docs?.source}}},SizeSmall.parameters={...SizeSmall.parameters,docs:{...SizeSmall.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    size: "small"\n  }\n}',...SizeSmall.parameters?.docs?.source}}},Styled.parameters={...Styled.parameters,docs:{...Styled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    style: {\n      color: "red",\n      fontWeight: "bold",\n      fontSize: "large",\n      textAlign: "center"\n    }\n  }\n}',...Styled.parameters?.docs?.source}}},VariantFilled.parameters={...VariantFilled.parameters,docs:{...VariantFilled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    variant: "filled"\n  }\n}',...VariantFilled.parameters?.docs?.source}}},VariantStandard.parameters={...VariantStandard.parameters,docs:{...VariantStandard.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    variant: "standard"\n  }\n}',...VariantStandard.parameters?.docs?.source}}},Virtualized.parameters={...Virtualized.parameters,docs:{...Virtualized.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    virtualized: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n  }\n}",...Virtualized.parameters?.docs?.source}}},VirtualizedWith1000Elements.parameters={...VirtualizedWith1000Elements.parameters,docs:{...VirtualizedWith1000Elements.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    options: options1000,\n    virtualized: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n  }\n}",...VirtualizedWith1000Elements.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Autocomplete","AutocompleteChange","AutoSort","Disabled","Grouped","GroupedCustomLabel","Loading","Localized","Multiple","OnScrollEndCallback","OptionCustomLabel","OptionCustomRendering","Required","SizeSmall","Styled","VariantFilled","VariantStandard","Virtualized","VirtualizedWith1000Elements"]},"./node_modules/@storybook/test/dist sync recursive":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext}}]);