(self.webpackChunk_melfore_mosaic=self.webpackChunk_melfore_mosaic||[]).push([[715],{"./src/components/Select/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoSort:()=>AutoSort,Autocomplete:()=>Autocomplete,AutocompleteChange:()=>AutocompleteChange,Disabled:()=>Disabled,Grouped:()=>Grouped,GroupedCustomLabel:()=>GroupedCustomLabel,Loading:()=>Loading,Localized:()=>Localized,Multiple:()=>Multiple,OnScrollEndCallback:()=>OnScrollEndCallback,OptionCustomLabel:()=>OptionCustomLabel,OptionCustomRendering:()=>OptionCustomRendering,Primary:()=>Primary,Required:()=>Required,SizeSmall:()=>SizeSmall,Styled:()=>Styled,VariantFilled:()=>VariantFilled,VariantStandard:()=>VariantStandard,Virtualized:()=>Virtualized,VirtualizedWith1000Elements:()=>VirtualizedWith1000Elements,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_jest__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@storybook/jest/dist/index.mjs"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/index.ts"),_utils_logger__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/logger/index.ts"),_utils_mocks_FormDecorator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/mocks/FormDecorator.tsx"),_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/mocks/LocaleMock.tsx"),_utils_stories__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/stories/index.tsx"),___WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Select/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/jsx-runtime.js");(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.jQ)({testIdAttribute:"data-cy"});___WEBPACK_IMPORTED_MODULE_7__.FY.displayName="Select";const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/Select",component:___WEBPACK_IMPORTED_MODULE_7__.FY,decorators:[_utils_mocks_FormDecorator__WEBPACK_IMPORTED_MODULE_4__.Z,_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_5__.U4],parameters:{docs:{...(0,_utils_stories__WEBPACK_IMPORTED_MODULE_6__.Z)({basedOn:{label:"MUI Autocomplete Component",url:"https://mui.com/components/autocomplete/"},component:"Select",e2eTestInfo:{dataCyDefault:___WEBPACK_IMPORTED_MODULE_7__.jg,dataCyShortcut:___WEBPACK_IMPORTED_MODULE_7__.QA,subpartsSuffixes:(0,_utils__WEBPACK_IMPORTED_MODULE_2__.cA)(___WEBPACK_IMPORTED_MODULE_7__.nZ)},localizableProps:___WEBPACK_IMPORTED_MODULE_7__.H$})}}},onInputChangeMock=_storybook_jest__WEBPACK_IMPORTED_MODULE_9__.e.fn((value=>(0,_utils_logger__WEBPACK_IMPORTED_MODULE_3__.PN)("Select",`onInputChange handler '${value||null}'`))),onChangeMock=_storybook_jest__WEBPACK_IMPORTED_MODULE_9__.e.fn((value=>(0,_utils_logger__WEBPACK_IMPORTED_MODULE_3__.PN)("Select",`onChange handler '${value||null}'`))),onScrollEndMock=_storybook_jest__WEBPACK_IMPORTED_MODULE_9__.e.fn((()=>(0,_utils_logger__WEBPACK_IMPORTED_MODULE_3__.PN)("Select","onScroll handler"))),options=["Paintings","Sculpture","Mosaic","Murales","Photography"],Primary={args:{label:"Select",multiple:!1,onClose:void 0,onInputChange:void 0,onScrollEnd:void 0,onChange:onChangeMock,options,placeholder:"Select a value"},play:async({canvasElement})=>{const select=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.jg);if(!select)return;await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.click(select);const listbox=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.sp.getByRole("presentation")).getByRole("listbox"),options=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(listbox).getAllByRole("option");_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.BX.click(options[1]),await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_9__.l)(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length)}},Autocomplete={args:{...Primary.args,autoComplete:!1},play:async({canvasElement})=>{const select=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.jg);select&&await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.type(select,"M")}},AutocompleteChange={args:{...Primary.args,autoComplete:!1,onInputChange:onInputChangeMock},play:async({canvasElement})=>{const select=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.jg);select&&(await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.type(select,"M"),await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_9__.l)(onInputChangeMock).toHaveBeenCalledTimes(onInputChangeMock.mock.calls.length))}},AutoSort={args:{...Primary.args,autoSort:!0}},Disabled={args:{...Primary.args,disabled:!0}},Grouped={args:{...Primary.args,groupBy:option=>option.slice(0,1)},play:async({canvasElement})=>{const select=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.jg);select&&await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.click(select)}},GroupedCustomLabel={args:{...Grouped.args,getGroupLabel:groupName=>`Letter: ${groupName}`},play:async({canvasElement})=>{const select=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.jg);select&&await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.click(select)}},Loading={args:{...Primary.args,loading:!0}},Localized={args:{...Primary.args,localized:!0,label:_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_5__.RC.select,placeholder:_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_5__.RC.placeholder}},Multiple={args:{...Primary.args,multiple:!0,value:[]},play:async({canvasElement})=>{const select=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.jg);if(!select)return;await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.click(select);const listbox=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.sp.getByRole("presentation")).getByRole("listbox"),options=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(listbox).getAllByRole("option");_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.BX.click(options[1]),await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_9__.l)(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length)}},OnScrollEndCallback={args:{...Primary.args,onScrollEnd:onScrollEndMock,options:[...options,...options,...options]},play:async({canvasElement})=>{const select=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.jg);if(!select)return;await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.click(select);const listbox=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.sp.getByRole("presentation")).getByRole("listbox"),scrollTop=listbox.scrollHeight-listbox.clientHeight-.5;(0,_utils_logger__WEBPACK_IMPORTED_MODULE_3__.PN)("Select.fireScroll",`ch ${listbox.clientHeight} / st ${scrollTop} / sh ${listbox.scrollHeight}`),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.BX.scroll(listbox,{target:{scrollTop}}),await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_9__.l)(onScrollEndMock).toHaveBeenCalledTimes(onScrollEndMock.mock.calls.length)}},OptionCustomLabel={args:{...Primary.args,getOptionLabel:option=>option.slice(0,3)},play:async({canvasElement})=>{const select=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.jg);select&&await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.click(select)}},OptionCustomRendering={args:{...Primary.args,customOptionRendering:option=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b",{children:option.slice(0,3).toUpperCase()})},play:async({canvasElement})=>{const select=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.jg);select&&await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.click(select)}},Required={args:{...Primary.args,required:!0}},SizeSmall={args:{...Primary.args,size:"small"}},Styled={args:{...Primary.args,style:{color:"red",fontWeight:"bold",fontSize:"large",textAlign:"center"}}},VariantFilled={args:{...Primary.args,variant:"filled"}},VariantStandard={args:{...Primary.args,variant:"standard"}},Virtualized={args:{...Primary.args,virtualized:!0},play:async({canvasElement})=>{const select=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.jg);select&&await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.click(select)}},options1000=[];for(let i=0;i<1e3;i++)options1000.push(i+1+" Element");const VirtualizedWith1000Elements={args:{...Primary.args,options:options1000,virtualized:!0},play:async({canvasElement})=>{const select=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByTestId(___WEBPACK_IMPORTED_MODULE_7__.jg);select&&await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.mV.click(select)}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Select",\n    multiple: false,\n    onClose: undefined,\n    onInputChange: undefined,\n    onScrollEnd: undefined,\n    onChange: onChangeMock,\n    options,\n    placeholder: "Select a value"\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n    const listbox = within(screen.getByRole("presentation")).getByRole("listbox");\n    const options = within(listbox).getAllByRole("option");\n    fireEvent.click(options[1]);\n    await expect(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length);\n  }\n}',...Primary.parameters?.docs?.source}}},Autocomplete.parameters={...Autocomplete.parameters,docs:{...Autocomplete.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    autoComplete: false\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.type(select, "M");\n  }\n}',...Autocomplete.parameters?.docs?.source}}},AutocompleteChange.parameters={...AutocompleteChange.parameters,docs:{...AutocompleteChange.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    autoComplete: false,\n    onInputChange: onInputChangeMock\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.type(select, "M");\n    await expect(onInputChangeMock).toHaveBeenCalledTimes(onInputChangeMock.mock.calls.length);\n  }\n}',...AutocompleteChange.parameters?.docs?.source}}},AutoSort.parameters={...AutoSort.parameters,docs:{...AutoSort.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    autoSort: true\n  }\n}",...AutoSort.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Grouped.parameters={...Grouped.parameters,docs:{...Grouped.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    groupBy: option => (option as string).slice(0, 1)\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n  }\n}",...Grouped.parameters?.docs?.source}}},GroupedCustomLabel.parameters={...GroupedCustomLabel.parameters,docs:{...GroupedCustomLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Grouped.args,\n    getGroupLabel: groupName => `Letter: ${groupName}`\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n  }\n}",...GroupedCustomLabel.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    loading: true\n  }\n}",...Loading.parameters?.docs?.source}}},Localized.parameters={...Localized.parameters,docs:{...Localized.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    localized: true,\n    label: MessageMock.select,\n    placeholder: MessageMock.placeholder\n  }\n}",...Localized.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    multiple: true,\n    value: []\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n    const listbox = within(screen.getByRole("presentation")).getByRole("listbox");\n    const options = within(listbox).getAllByRole("option");\n    fireEvent.click(options[1]);\n    await expect(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length);\n  }\n}',...Multiple.parameters?.docs?.source}}},OnScrollEndCallback.parameters={...OnScrollEndCallback.parameters,docs:{...OnScrollEndCallback.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    onScrollEnd: onScrollEndMock,\n    options: [...options, ...options, ...options]\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n    const listbox = within(screen.getByRole("presentation")).getByRole("listbox");\n    const scrollTop = listbox.scrollHeight - listbox.clientHeight - 0.5;\n    logInfo("Select.fireScroll", `ch ${listbox.clientHeight} / st ${scrollTop} / sh ${listbox.scrollHeight}`);\n    fireEvent.scroll(listbox, {\n      target: {\n        scrollTop\n      }\n    });\n    await expect(onScrollEndMock).toHaveBeenCalledTimes(onScrollEndMock.mock.calls.length);\n  }\n}',...OnScrollEndCallback.parameters?.docs?.source}}},OptionCustomLabel.parameters={...OptionCustomLabel.parameters,docs:{...OptionCustomLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    getOptionLabel: option => (option as string).slice(0, 3)\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n  }\n}",...OptionCustomLabel.parameters?.docs?.source}}},OptionCustomRendering.parameters={...OptionCustomRendering.parameters,docs:{...OptionCustomRendering.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    customOptionRendering: option => <b>{(option as string).slice(0, 3).toUpperCase()}</b>\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n  }\n}",...OptionCustomRendering.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    required: true\n  }\n}",...Required.parameters?.docs?.source}}},SizeSmall.parameters={...SizeSmall.parameters,docs:{...SizeSmall.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    size: "small"\n  }\n}',...SizeSmall.parameters?.docs?.source}}},Styled.parameters={...Styled.parameters,docs:{...Styled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    style: {\n      color: "red",\n      fontWeight: "bold",\n      fontSize: "large",\n      textAlign: "center"\n    }\n  }\n}',...Styled.parameters?.docs?.source}}},VariantFilled.parameters={...VariantFilled.parameters,docs:{...VariantFilled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    variant: "filled"\n  }\n}',...VariantFilled.parameters?.docs?.source}}},VariantStandard.parameters={...VariantStandard.parameters,docs:{...VariantStandard.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    variant: "standard"\n  }\n}',...VariantStandard.parameters?.docs?.source}}},Virtualized.parameters={...Virtualized.parameters,docs:{...Virtualized.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    virtualized: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n  }\n}",...Virtualized.parameters?.docs?.source}}},VirtualizedWith1000Elements.parameters={...VirtualizedWith1000Elements.parameters,docs:{...VirtualizedWith1000Elements.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    options: options1000,\n    virtualized: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const select = canvas.getByTestId(DATA_CY_DEFAULT);\n    if (!select) {\n      return;\n    }\n    await userEvent.click(select);\n  }\n}",...VirtualizedWith1000Elements.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Autocomplete","AutocompleteChange","AutoSort","Disabled","Grouped","GroupedCustomLabel","Loading","Localized","Multiple","OnScrollEndCallback","OptionCustomLabel","OptionCustomRendering","Required","SizeSmall","Styled","VariantFilled","VariantStandard","Virtualized","VirtualizedWith1000Elements"]},"?4f7e":()=>{}}]);