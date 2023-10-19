"use strict";(self.webpackChunk_melfore_mosaic=self.webpackChunk_melfore_mosaic||[]).push([[633],{"./src/components/InputNumber/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Adornment:function(){return Adornment},AdornmentClickable:function(){return AdornmentClickable},Decimal:function(){return Decimal},Disabled:function(){return Disabled},Localized:function(){return Localized},MinMax:function(){return MinMax},Nullable:function(){return Nullable},Placeholder:function(){return Placeholder},Primary:function(){return Primary},Required:function(){return Required},SizeSmall:function(){return SizeSmall},Styled:function(){return Styled},VariantFilled:function(){return VariantFilled},VariantStandard:function(){return VariantStandard},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var _types_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/types/Icon.ts"),_utils_mocks_FormMock__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/mocks/FormMock.tsx"),_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/mocks/LocaleMock.tsx"),_utils_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/stories/index.tsx"),___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/InputNumber/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");___WEBPACK_IMPORTED_MODULE_5__.ZP.displayName="InputNumber",___WEBPACK_IMPORTED_MODULE_5__.B9.displayName="InputNumber",__webpack_exports__.default={title:"Inputs/InputNumber",component:___WEBPACK_IMPORTED_MODULE_5__.B9,decorators:[_utils_mocks_FormMock__WEBPACK_IMPORTED_MODULE_2__.B,_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_3__.U4],parameters:{docs:{...(0,_utils_stories__WEBPACK_IMPORTED_MODULE_4__.Z)({basedOn:{label:"MUI Text Field",url:"https://mui.com/components/text-fields/"},component:"InputNumber",e2eTestInfo:{dataCyDefault:___WEBPACK_IMPORTED_MODULE_5__.jg,dataCyShortcut:___WEBPACK_IMPORTED_MODULE_5__.QA},localizableProps:___WEBPACK_IMPORTED_MODULE_5__.H$})}}};const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.ZP,{...args,dataCy:___WEBPACK_IMPORTED_MODULE_5__.jg});Template.displayName="Template";const Primary=Template.bind({});Primary.args={label:"Label",value:5};const Adornment=Template.bind({});Adornment.args={...Primary.args,adornment:{icon:_types_Icon__WEBPACK_IMPORTED_MODULE_1__.P.close}};const AdornmentClickable=Template.bind({});AdornmentClickable.args={...Primary.args,adornment:{icon:_types_Icon__WEBPACK_IMPORTED_MODULE_1__.P.close,onClick:()=>{}}};const Decimal=Template.bind({});Decimal.args={...Primary.args,integer:!1,value:5.275};const Disabled=Template.bind({});Disabled.args={...Primary.args,disabled:!0};const Localized=Template.bind({});Localized.args={...Primary.args,localized:!0,label:_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_3__.RC.inputNumber,placeholder:_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_3__.RC.placeholder};const MinMax=Template.bind({});MinMax.args={...Primary.args,maxValue:1e3,minValue:20};const Nullable=Template.bind({});Nullable.args={...Primary.args,value:null};const Placeholder=Template.bind({});Placeholder.args={label:"Label",placeholder:"Enter value...",value:void 0};const Required=Template.bind({});Required.args={...Primary.args,required:!0};const SizeSmall=Template.bind({});SizeSmall.args={...Primary.args,size:"small"};const Styled=Template.bind({});Styled.args={...Primary.args,style:{color:"red",fontWeight:"bold",fontSize:"large",textAlign:"center"}};const VariantFilled=Template.bind({});VariantFilled.args={...Primary.args,variant:"filled"};const VariantStandard=Template.bind({});VariantStandard.args={...Primary.args,variant:"standard"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <InputNumber {...args} dataCy={DATA_CY_DEFAULT} />",...Primary.parameters?.docs?.source}}},Adornment.parameters={...Adornment.parameters,docs:{...Adornment.parameters?.docs,source:{originalSource:"args => <InputNumber {...args} dataCy={DATA_CY_DEFAULT} />",...Adornment.parameters?.docs?.source}}},AdornmentClickable.parameters={...AdornmentClickable.parameters,docs:{...AdornmentClickable.parameters?.docs,source:{originalSource:"args => <InputNumber {...args} dataCy={DATA_CY_DEFAULT} />",...AdornmentClickable.parameters?.docs?.source}}},Decimal.parameters={...Decimal.parameters,docs:{...Decimal.parameters?.docs,source:{originalSource:"args => <InputNumber {...args} dataCy={DATA_CY_DEFAULT} />",...Decimal.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <InputNumber {...args} dataCy={DATA_CY_DEFAULT} />",...Disabled.parameters?.docs?.source}}},Localized.parameters={...Localized.parameters,docs:{...Localized.parameters?.docs,source:{originalSource:"args => <InputNumber {...args} dataCy={DATA_CY_DEFAULT} />",...Localized.parameters?.docs?.source}}},MinMax.parameters={...MinMax.parameters,docs:{...MinMax.parameters?.docs,source:{originalSource:"args => <InputNumber {...args} dataCy={DATA_CY_DEFAULT} />",...MinMax.parameters?.docs?.source}}},Nullable.parameters={...Nullable.parameters,docs:{...Nullable.parameters?.docs,source:{originalSource:"args => <InputNumber {...args} dataCy={DATA_CY_DEFAULT} />",...Nullable.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:"args => <InputNumber {...args} dataCy={DATA_CY_DEFAULT} />",...Placeholder.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:"args => <InputNumber {...args} dataCy={DATA_CY_DEFAULT} />",...Required.parameters?.docs?.source}}},SizeSmall.parameters={...SizeSmall.parameters,docs:{...SizeSmall.parameters?.docs,source:{originalSource:"args => <InputNumber {...args} dataCy={DATA_CY_DEFAULT} />",...SizeSmall.parameters?.docs?.source}}},Styled.parameters={...Styled.parameters,docs:{...Styled.parameters?.docs,source:{originalSource:"args => <InputNumber {...args} dataCy={DATA_CY_DEFAULT} />",...Styled.parameters?.docs?.source}}},VariantFilled.parameters={...VariantFilled.parameters,docs:{...VariantFilled.parameters?.docs,source:{originalSource:"args => <InputNumber {...args} dataCy={DATA_CY_DEFAULT} />",...VariantFilled.parameters?.docs?.source}}},VariantStandard.parameters={...VariantStandard.parameters,docs:{...VariantStandard.parameters?.docs,source:{originalSource:"args => <InputNumber {...args} dataCy={DATA_CY_DEFAULT} />",...VariantStandard.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Adornment","AdornmentClickable","Decimal","Disabled","Localized","MinMax","Nullable","Placeholder","Required","SizeSmall","Styled","VariantFilled","VariantStandard"]},"./src/utils/mocks/FormMock.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:function(){return formDecorator}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_13qbcodxoq(){var path="/home/runner/work/mosaic/mosaic/src/utils/mocks/FormMock.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/mosaic/mosaic/src/utils/mocks/FormMock.tsx",statementMap:{0:{start:{line:12,column:54},end:{line:31,column:1}},1:{start:{line:18,column:28},end:{line:18,column:51}},2:{start:{line:20,column:2},end:{line:25,column:22}},3:{start:{line:21,column:4},end:{line:23,column:5}},4:{start:{line:22,column:6},end:{line:22,column:30}},5:{start:{line:27,column:2},end:{line:30,column:5}},6:{start:{line:33,column:35},end:{line:33,column:105}},7:{start:{line:33,column:56},end:{line:33,column:105}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:12,column:54},end:{line:12,column:55}},loc:{start:{line:17,column:6},end:{line:31,column:1}},line:17},1:{name:"(anonymous_1)",decl:{start:{line:20,column:12},end:{line:20,column:13}},loc:{start:{line:20,column:18},end:{line:25,column:3}},line:20},2:{name:"(anonymous_2)",decl:{start:{line:33,column:35},end:{line:33,column:36}},loc:{start:{line:33,column:56},end:{line:33,column:105}},line:33}},branchMap:{0:{loc:{start:{line:14,column:2},end:{line:14,column:31}},type:"default-arg",locations:[{start:{line:14,column:21},end:{line:14,column:31}}],line:14},1:{loc:{start:{line:16,column:2},end:{line:16,column:25}},type:"default-arg",locations:[{start:{line:16,column:18},end:{line:16,column:25}}],line:16},2:{loc:{start:{line:21,column:4},end:{line:23,column:5}},type:"if",locations:[{start:{line:21,column:4},end:{line:23,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:21}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},f:{0:0,1:0,2:0},b:{0:[0],1:[0],2:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"0d8e6dcce9bc55dbe7bd7978784825dbc6a46dc3"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"0d8e6dcce9bc55dbe7bd7978784825dbc6a46dc3"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_13qbcodxoq=function(){return actualCoverage},actualCoverage}cov_13qbcodxoq(),cov_13qbcodxoq().s[0]++;const FormMock=({children:children,onChangePropName:onChangePropName=(cov_13qbcodxoq().b[0][0]++,"onChange"),value:externalValue,valuePropName:valuePropName=(cov_13qbcodxoq().b[1][0]++,"value")})=>{cov_13qbcodxoq().f[0]++;const[value,setValue]=(cov_13qbcodxoq().s[1]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(externalValue));return cov_13qbcodxoq().s[2]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{cov_13qbcodxoq().f[1]++,cov_13qbcodxoq().s[3]++,externalValue!==value?(cov_13qbcodxoq().b[2][0]++,cov_13qbcodxoq().s[4]++,setValue(externalValue)):cov_13qbcodxoq().b[2][1]++}),[externalValue]),cov_13qbcodxoq().s[5]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children,{[onChangePropName]:setValue,[valuePropName]:value})};cov_13qbcodxoq().s[6]++;const formDecorator=(Story,{args:args})=>(cov_13qbcodxoq().f[2]++,cov_13qbcodxoq().s[7]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FormMock,{value:args.value,children:Story()}));formDecorator.displayName="formDecorator";try{FormMock.displayName="FormMock",FormMock.__docgenInfo={description:"",displayName:"FormMock",props:{onChangePropName:{defaultValue:{value:"onChange"},description:"",name:"onChangePropName",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"IFormValue"}},valuePropName:{defaultValue:{value:"value"},description:"",name:"valuePropName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/mocks/FormMock.tsx#FormMock"]={docgenInfo:FormMock.__docgenInfo,name:"FormMock",path:"src/utils/mocks/FormMock.tsx#FormMock"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/mocks/LocaleMock.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{RC:function(){return MessageMock},U4:function(){return localeDecorator}});__webpack_require__("./node_modules/react/index.js");var _contexts_Mosaic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/contexts/Mosaic.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1pl9h87nja(){var path="/home/runner/work/mosaic/mosaic/src/utils/mocks/LocaleMock.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"27d575af342b1f992362cd016c39dadd610a0a18"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/mosaic/mosaic/src/utils/mocks/LocaleMock.tsx",statementMap:{0:{start:{line:32,column:44},end:{line:67,column:1}},1:{start:{line:69,column:32},end:{line:69,column:116}},2:{start:{line:69,column:83},end:{line:69,column:116}},3:{start:{line:71,column:35},end:{line:75,column:1}},4:{start:{line:72,column:2},end:{line:74,column:26}},5:{start:{line:72,column:44},end:{line:72,column:96}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:69,column:32},end:{line:69,column:33}},loc:{start:{line:69,column:83},end:{line:69,column:116}},line:69},1:{name:"(anonymous_1)",decl:{start:{line:71,column:35},end:{line:71,column:36}},loc:{start:{line:72,column:2},end:{line:74,column:26}},line:72},2:{name:"(anonymous_2)",decl:{start:{line:72,column:35},end:{line:72,column:36}},loc:{start:{line:72,column:44},end:{line:72,column:96}},line:72}},branchMap:{0:{loc:{start:{line:69,column:83},end:{line:69,column:116}},type:"binary-expr",locations:[{start:{line:69,column:83},end:{line:69,column:109}},{start:{line:69,column:113},end:{line:69,column:116}}],line:69}},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0,2:0},b:{0:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"27d575af342b1f992362cd016c39dadd610a0a18"});var actualCoverage=coverage[path];return cov_1pl9h87nja=function(){return actualCoverage},actualCoverage}cov_1pl9h87nja();let MessageMock=function(MessageMock){return MessageMock.button="locale.button",MessageMock.cancel="locale.cancel",MessageMock.checkbox="locale.checkbox",MessageMock.confirm="locale.confirm",MessageMock.inputNumber="locale.inputNumber",MessageMock.inputText="locale.inputText",MessageMock.label="locale.label",MessageMock.placeholder="locale.placeholder",MessageMock.select="locale.select",MessageMock.subtitle="locale.subtitle",MessageMock.switch="locale.switch",MessageMock.text="locale.text",MessageMock.title="locale.title",MessageMock.typography="locale.typography",MessageMock.value="locale.value",MessageMock}({});const MESSAGES_MOCK=(cov_1pl9h87nja().s[0]++,{en:{[MessageMock.button]:"Button",[MessageMock.cancel]:"Cancel",[MessageMock.checkbox]:"Checkbox",[MessageMock.confirm]:"Confirm",[MessageMock.inputNumber]:"Input Number",[MessageMock.inputText]:"Input Text",[MessageMock.label]:"Label",[MessageMock.placeholder]:"Enter value...",[MessageMock.select]:"Dropdown",[MessageMock.subtitle]:"Subtitle",[MessageMock.switch]:"Switch",[MessageMock.text]:"Some lines of text...",[MessageMock.title]:"Title",[MessageMock.typography]:"Text",[MessageMock.value]:"Value"},"it-IT":{[MessageMock.button]:"Bottone",[MessageMock.cancel]:"Annulla",[MessageMock.checkbox]:"Spunta",[MessageMock.confirm]:"Conferma",[MessageMock.inputNumber]:"Campo numerico",[MessageMock.inputText]:"Campo testuale",[MessageMock.label]:"Etichetta",[MessageMock.placeholder]:"Inserire valore...",[MessageMock.select]:"Menu a tendina",[MessageMock.subtitle]:"Sottotitolo",[MessageMock.switch]:"Interruttore",[MessageMock.text]:"Qualche riga di testo...",[MessageMock.title]:"Titolo",[MessageMock.typography]:"Testo",[MessageMock.value]:"Valore"}});cov_1pl9h87nja().s[1]++;cov_1pl9h87nja().s[3]++;const localeDecorator=Story=>(cov_1pl9h87nja().f[1]++,cov_1pl9h87nja().s[4]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contexts_Mosaic__WEBPACK_IMPORTED_MODULE_1__.IA,{localize:key=>(cov_1pl9h87nja().f[2]++,cov_1pl9h87nja().s[5]++,((key,locale)=>(cov_1pl9h87nja().f[0]++,cov_1pl9h87nja().s[2]++,cov_1pl9h87nja().b[0][0]++,MESSAGES_MOCK[locale][key]||(cov_1pl9h87nja().b[0][1]++,key)))(key,"it-IT")),children:Story()}));localeDecorator.displayName="localeDecorator"}}]);