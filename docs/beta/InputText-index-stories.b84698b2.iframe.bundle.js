"use strict";(self.webpackChunk_melfore_mosaic=self.webpackChunk_melfore_mosaic||[]).push([[738],{"./src/components/InputText/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Adornment:function(){return Adornment},AdornmentClickable:function(){return AdornmentClickable},Disabled:function(){return Disabled},Multiline:function(){return Multiline},Placeholder:function(){return Placeholder},Primary:function(){return Primary},Required:function(){return Required},SizeSmall:function(){return SizeSmall},Styled:function(){return Styled},VariantFilled:function(){return VariantFilled},VariantStandard:function(){return VariantStandard},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var _types_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/types/Icon.ts"),_utils_mocks_FormMock__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/mocks/FormMock.tsx"),_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/mocks/LocaleMock.tsx"),_utils_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/stories/index.tsx"),___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/InputText/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");___WEBPACK_IMPORTED_MODULE_5__.ZP.displayName="InputText",___WEBPACK_IMPORTED_MODULE_5__.yE.displayName="InputText",__webpack_exports__.default={title:"Inputs/InputText",component:___WEBPACK_IMPORTED_MODULE_5__.yE,decorators:[_utils_mocks_FormMock__WEBPACK_IMPORTED_MODULE_2__.B,_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_3__.U4],parameters:{docs:{...(0,_utils_stories__WEBPACK_IMPORTED_MODULE_4__.Z)({basedOn:{label:"MUI Text Field",url:"https://mui.com/components/text-fields/"},component:"InputText",e2eTestInfo:{dataCyDefault:___WEBPACK_IMPORTED_MODULE_5__.jg,dataCyShortcut:___WEBPACK_IMPORTED_MODULE_5__.QA},localizableProps:___WEBPACK_IMPORTED_MODULE_5__.H$})}}};const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.ZP,{...args,dataCy:___WEBPACK_IMPORTED_MODULE_5__.jg});Template.displayName="Template";const Primary=Template.bind({});Primary.args={label:"Label",value:"Value"};const Adornment=Template.bind({});Adornment.args={...Primary.args,adornment:{icon:_types_Icon__WEBPACK_IMPORTED_MODULE_1__.P.close}};const AdornmentClickable=Template.bind({});AdornmentClickable.args={...Primary.args,adornment:{icon:_types_Icon__WEBPACK_IMPORTED_MODULE_1__.P.close,onClick:()=>{}}};const Disabled=Template.bind({});Disabled.args={...Primary.args,disabled:!0};const Multiline=Template.bind({});Multiline.args={...Primary.args,multiline:{rows:3,rowsMax:5}};const Placeholder=Template.bind({});Placeholder.args={label:"Label",placeholder:"Enter value...",value:void 0};const Required=Template.bind({});Required.args={...Primary.args,required:!0};const SizeSmall=Template.bind({});SizeSmall.args={...Primary.args,size:"small"};const Styled=Template.bind({});Styled.args={...Primary.args,style:{color:"red",fontWeight:"bold",fontSize:"large",textAlign:"center"}};const VariantFilled=Template.bind({});VariantFilled.args={...Primary.args,variant:"filled"};const VariantStandard=Template.bind({});VariantStandard.args={...Primary.args,variant:"standard"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <InputText {...args} dataCy={DATA_CY_DEFAULT} />",...Primary.parameters?.docs?.source}}},Adornment.parameters={...Adornment.parameters,docs:{...Adornment.parameters?.docs,source:{originalSource:"args => <InputText {...args} dataCy={DATA_CY_DEFAULT} />",...Adornment.parameters?.docs?.source}}},AdornmentClickable.parameters={...AdornmentClickable.parameters,docs:{...AdornmentClickable.parameters?.docs,source:{originalSource:"args => <InputText {...args} dataCy={DATA_CY_DEFAULT} />",...AdornmentClickable.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <InputText {...args} dataCy={DATA_CY_DEFAULT} />",...Disabled.parameters?.docs?.source}}},Multiline.parameters={...Multiline.parameters,docs:{...Multiline.parameters?.docs,source:{originalSource:"args => <InputText {...args} dataCy={DATA_CY_DEFAULT} />",...Multiline.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:"args => <InputText {...args} dataCy={DATA_CY_DEFAULT} />",...Placeholder.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"args => <InputText {...args} dataCy={DATA_CY_DEFAULT} />",...Required.parameters?.docs?.source}}},SizeSmall.parameters={...SizeSmall.parameters,docs:{...SizeSmall.parameters?.docs,source:{originalSource:"args => <InputText {...args} dataCy={DATA_CY_DEFAULT} />",...SizeSmall.parameters?.docs?.source}}},Styled.parameters={...Styled.parameters,docs:{...Styled.parameters?.docs,source:{originalSource:"args => <InputText {...args} dataCy={DATA_CY_DEFAULT} />",...Styled.parameters?.docs?.source}}},VariantFilled.parameters={...VariantFilled.parameters,docs:{...VariantFilled.parameters?.docs,source:{originalSource:"args => <InputText {...args} dataCy={DATA_CY_DEFAULT} />",...VariantFilled.parameters?.docs?.source}}},VariantStandard.parameters={...VariantStandard.parameters,docs:{...VariantStandard.parameters?.docs,source:{originalSource:"args => <InputText {...args} dataCy={DATA_CY_DEFAULT} />",...VariantStandard.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Adornment","AdornmentClickable","Disabled","Multiline","Placeholder","Required","SizeSmall","Styled","VariantFilled","VariantStandard"]},"./src/utils/mocks/FormMock.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:function(){return formDecorator}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FormMock=({children:children,onChangePropName:onChangePropName="onChange",value:externalValue,valuePropName:valuePropName="value"})=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(externalValue);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children,{[onChangePropName]:setValue,[valuePropName]:value})),[children,onChangePropName,value,valuePropName])},formDecorator=(Story,{args:args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FormMock,{value:args.value,children:Story()});formDecorator.displayName="formDecorator";try{FormMock.displayName="FormMock",FormMock.__docgenInfo={description:"",displayName:"FormMock",props:{onChangePropName:{defaultValue:{value:"onChange"},description:"",name:"onChangePropName",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"IFormValue"}},valuePropName:{defaultValue:{value:"value"},description:"",name:"valuePropName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/mocks/FormMock.tsx#FormMock"]={docgenInfo:FormMock.__docgenInfo,name:"FormMock",path:"src/utils/mocks/FormMock.tsx#FormMock"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/mocks/LocaleMock.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U4:function(){return localeDecorator}});__webpack_require__("./node_modules/react/index.js");var _contexts_Mosaic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/contexts/Mosaic.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");let MessageMock=function(MessageMock){return MessageMock.button="locale.button",MessageMock.cancel="locale.cancel",MessageMock.checkbox="locale.checkbox",MessageMock.confirm="locale.confirm",MessageMock.inputNumber="locale.inputNumber",MessageMock.inputText="locale.inputText",MessageMock.subtitle="locale.subtitle",MessageMock.switch="locale.switch",MessageMock.title="locale.title",MessageMock.typography="locale.typography",MessageMock}({});const MESSAGES_MOCK={en:{[MessageMock.button]:"Button",[MessageMock.cancel]:"Cancel",[MessageMock.checkbox]:"Checkbox",[MessageMock.confirm]:"Confirm",[MessageMock.inputNumber]:"Input Number",[MessageMock.inputText]:"Input Text",[MessageMock.subtitle]:"Subtitle",[MessageMock.switch]:"Switch",[MessageMock.title]:"Title",[MessageMock.typography]:"Typography"},"it-IT":{[MessageMock.button]:"Bottone",[MessageMock.cancel]:"Annulla",[MessageMock.checkbox]:"Spunta",[MessageMock.confirm]:"Conferma",[MessageMock.inputNumber]:"Numero in input",[MessageMock.inputText]:"Testo in input",[MessageMock.subtitle]:"Sottotitolo",[MessageMock.switch]:"Interruttore",[MessageMock.title]:"Titolo",[MessageMock.typography]:"Tipografia"}},localeDecorator=Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contexts_Mosaic__WEBPACK_IMPORTED_MODULE_1__.IA,{localize:key=>((key,locale)=>MESSAGES_MOCK[locale][key]||key)(key,"it-IT"),children:Story()});localeDecorator.displayName="localeDecorator"}}]);