"use strict";(self.webpackChunk_melfore_mosaic=self.webpackChunk_melfore_mosaic||[]).push([[994],{"./src/components/Tabs/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:function(){return Color},Orientation:function(){return Orientation},Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var _utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/mocks/LocaleMock.tsx"),_utils_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/stories/index.tsx"),_Progress__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Progress/index.tsx"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Tabs/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");___WEBPACK_IMPORTED_MODULE_4__.Z.displayName="Tabs",__webpack_exports__.default={title:"Navigation/Tabs",component:___WEBPACK_IMPORTED_MODULE_4__.Z,decorators:[_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_1__.U4],parameters:{docs:{...(0,_utils_stories__WEBPACK_IMPORTED_MODULE_2__.Z)({basedOn:{label:"MUI Tabs Component",url:"https://mui.com/material-ui/react-tabs/"},component:"Tabs",e2eTestInfo:{dataCyDefault:___WEBPACK_IMPORTED_MODULE_4__.j}})}}};const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Z,{...args,dataCy:___WEBPACK_IMPORTED_MODULE_4__.j});Template.displayName="Template";const Primary=Template.bind({});Primary.args={labelList:[{label:"PAGE1",content:"PAGE1"},{label:"PAGE2",content:"PAGE2"},{label:"PAGE3",content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Progress__WEBPACK_IMPORTED_MODULE_3__.Z,{type:"Circular",withLabel:!1})}]};const Color=Template.bind({});Color.args={...Primary.args,color:"secondary"};const Orientation=Template.bind({});Orientation.args={...Primary.args,orientation:"vertical"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Tabs {...args} dataCy={DATA_CY_DEFAULT} />",...Primary.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:"args => <Tabs {...args} dataCy={DATA_CY_DEFAULT} />",...Color.parameters?.docs?.source}}},Orientation.parameters={...Orientation.parameters,docs:{...Orientation.parameters?.docs,source:{originalSource:"args => <Tabs {...args} dataCy={DATA_CY_DEFAULT} />",...Orientation.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Color","Orientation"]},"./src/utils/mocks/LocaleMock.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{RC:function(){return MessageMock},U4:function(){return localeDecorator}});__webpack_require__("./node_modules/react/index.js");var _contexts_Mosaic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/contexts/Mosaic.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1pl9h87nja(){var path="/home/runner/work/mosaic/mosaic/src/utils/mocks/LocaleMock.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"bd98ce82e7b43ba407f42d63d80a1b3da8787c70"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/mosaic/mosaic/src/utils/mocks/LocaleMock.tsx",statementMap:{0:{start:{line:42,column:44},end:{line:97,column:1}},1:{start:{line:99,column:32},end:{line:99,column:116}},2:{start:{line:99,column:83},end:{line:99,column:116}},3:{start:{line:101,column:35},end:{line:105,column:1}},4:{start:{line:102,column:2},end:{line:104,column:26}},5:{start:{line:102,column:44},end:{line:102,column:96}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:99,column:32},end:{line:99,column:33}},loc:{start:{line:99,column:83},end:{line:99,column:116}},line:99},1:{name:"(anonymous_1)",decl:{start:{line:101,column:35},end:{line:101,column:36}},loc:{start:{line:102,column:2},end:{line:104,column:26}},line:102},2:{name:"(anonymous_2)",decl:{start:{line:102,column:35},end:{line:102,column:36}},loc:{start:{line:102,column:44},end:{line:102,column:96}},line:102}},branchMap:{0:{loc:{start:{line:99,column:83},end:{line:99,column:116}},type:"binary-expr",locations:[{start:{line:99,column:83},end:{line:99,column:109}},{start:{line:99,column:113},end:{line:99,column:116}}],line:99}},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0,2:0},b:{0:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bd98ce82e7b43ba407f42d63d80a1b3da8787c70"});var actualCoverage=coverage[path];return cov_1pl9h87nja=function(){return actualCoverage},actualCoverage}cov_1pl9h87nja();let MessageMock=function(MessageMock){return MessageMock.page1="locale.page1",MessageMock.page2="locale.page2",MessageMock.page3="locale.page3",MessageMock.step1="locale.step1",MessageMock.step2="locale.step2",MessageMock.step3="locale.step3",MessageMock.next="locale.next",MessageMock.back="locale.back",MessageMock.finish="locale.finish",MessageMock.dateTime="locale.dateTime",MessageMock.button="locale.button",MessageMock.cancel="locale.cancel",MessageMock.checkbox="locale.checkbox",MessageMock.confirm="locale.confirm",MessageMock.inputNumber="locale.inputNumber",MessageMock.inputText="locale.inputText",MessageMock.label="locale.label",MessageMock.placeholder="locale.placeholder",MessageMock.select="locale.select",MessageMock.subtitle="locale.subtitle",MessageMock.switch="locale.switch",MessageMock.text="locale.text",MessageMock.title="locale.title",MessageMock.typography="locale.typography",MessageMock.value="locale.value",MessageMock}({});const MESSAGES_MOCK=(cov_1pl9h87nja().s[0]++,{en:{[MessageMock.page1]:"Page1",[MessageMock.page2]:"Page2",[MessageMock.page3]:"Page3",[MessageMock.step1]:"Step1",[MessageMock.step2]:"Step2",[MessageMock.step3]:"Step3",[MessageMock.next]:"Next",[MessageMock.back]:"Back",[MessageMock.finish]:"Finish",[MessageMock.dateTime]:"Date Time",[MessageMock.button]:"Button",[MessageMock.cancel]:"Cancel",[MessageMock.checkbox]:"Checkbox",[MessageMock.confirm]:"Confirm",[MessageMock.inputNumber]:"Input Number",[MessageMock.inputText]:"Input Text",[MessageMock.label]:"Label",[MessageMock.placeholder]:"Enter value...",[MessageMock.select]:"Dropdown",[MessageMock.subtitle]:"Subtitle",[MessageMock.switch]:"Switch",[MessageMock.text]:"Some lines of text...",[MessageMock.title]:"Title",[MessageMock.typography]:"Text",[MessageMock.value]:"Value"},"it-IT":{[MessageMock.page1]:"Pagina 1",[MessageMock.page2]:"Pagina 2",[MessageMock.page3]:"Pagina 3",[MessageMock.step1]:"1°Passo",[MessageMock.step2]:"2°Passo",[MessageMock.step3]:"3°Passo",[MessageMock.next]:"Avanti",[MessageMock.back]:"Dietro",[MessageMock.finish]:"Finito",[MessageMock.dateTime]:"Data Ore",[MessageMock.button]:"Bottone",[MessageMock.cancel]:"Annulla",[MessageMock.checkbox]:"Spunta",[MessageMock.confirm]:"Conferma",[MessageMock.inputNumber]:"Campo numerico",[MessageMock.inputText]:"Campo testuale",[MessageMock.label]:"Etichetta",[MessageMock.placeholder]:"Inserire valore...",[MessageMock.select]:"Menu a tendina",[MessageMock.subtitle]:"Sottotitolo",[MessageMock.switch]:"Interruttore",[MessageMock.text]:"Qualche riga di testo...",[MessageMock.title]:"Titolo",[MessageMock.typography]:"Testo",[MessageMock.value]:"Valore"}});cov_1pl9h87nja().s[1]++;cov_1pl9h87nja().s[3]++;const localeDecorator=Story=>(cov_1pl9h87nja().f[1]++,cov_1pl9h87nja().s[4]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contexts_Mosaic__WEBPACK_IMPORTED_MODULE_1__.IA,{localize:key=>(cov_1pl9h87nja().f[2]++,cov_1pl9h87nja().s[5]++,((key,locale)=>(cov_1pl9h87nja().f[0]++,cov_1pl9h87nja().s[2]++,cov_1pl9h87nja().b[0][0]++,MESSAGES_MOCK[locale][key]||(cov_1pl9h87nja().b[0][1]++,key)))(key,"it-IT")),children:Story()}));localeDecorator.displayName="localeDecorator"}}]);