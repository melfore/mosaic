(self.webpackChunk_melfore_mosaic=self.webpackChunk_melfore_mosaic||[]).push([[356],{"./node_modules/@mui/icons-material/Style.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.Z=void 0;var _createSvgIcon=_interopRequireDefault(__webpack_require__("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_default=(0,_createSvgIcon.default)((0,_jsxRuntime.jsx)("path",{d:"m2.53 19.65 1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"}),"Style");exports.Z=_default},"./src/components/Table/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColumnFilters:function(){return ColumnFilters},ColumnFiltersSticky:function(){return ColumnFiltersSticky},ColumnFiltersStickyWithActions:function(){return ColumnFiltersStickyWithActions},ColumnFiltersStickyWithActionsStickySelection:function(){return ColumnFiltersStickyWithActionsStickySelection},DataActions:function(){return DataActions},EmptyState:function(){return EmptyState},Loading:function(){return Loading},Localized:function(){return Localized},NoData:function(){return NoData},PageSizeCustom:function(){return PageSizeCustom},Pagination:function(){return Pagination},Primary:function(){return Primary},RowClickable:function(){return RowClickable},Selectable:function(){return Selectable},Sortable:function(){return Sortable},Sticky:function(){return Sticky},StickyPagination:function(){return StickyPagination},Styled:function(){return Styled},StyledRow:function(){return StyledRow},TableLayoutAuto:function(){return TableLayoutAuto},TableLayoutAutoSelectionSticky:function(){return TableLayoutAutoSelectionSticky},TableLayoutSticky:function(){return TableLayoutSticky},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var _mui_icons_material_Style__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/icons-material/Style.js"),_mui_material_TextField__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),_storybook_jest__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@storybook/jest/dist/index.mjs"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),_types_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/types/Icon.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/index.ts"),_utils_logger__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/logger/index.ts"),_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/mocks/LocaleMock.tsx"),_utils_stories__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/stories/index.tsx"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Table/utils.ts"),___WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Table/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react/jsx-runtime.js");(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.jQ)({testIdAttribute:"data-cy"});___WEBPACK_IMPORTED_MODULE_8__.bO.displayName="Table";const meta={title:"Display/Table",component:___WEBPACK_IMPORTED_MODULE_8__.bO,decorators:[_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_5__.U4],parameters:{docs:{...(0,_utils_stories__WEBPACK_IMPORTED_MODULE_6__.Z)({basedOn:{label:"MUI Table Component",url:"https://mui.com/components/tables/"},component:"Table",e2eTestInfo:{dataCyDefault:___WEBPACK_IMPORTED_MODULE_8__.jg,dataCyShortcut:___WEBPACK_IMPORTED_MODULE_8__.QA,subpartsSuffixes:(0,_utils__WEBPACK_IMPORTED_MODULE_3__.cA)(___WEBPACK_IMPORTED_MODULE_8__.nZ)},localizableProps:___WEBPACK_IMPORTED_MODULE_8__.H$})}}};__webpack_exports__.default=meta;const onPageMock=_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.e.fn((()=>(0,_utils_logger__WEBPACK_IMPORTED_MODULE_4__.PN)("Table","onPageChange handler"))),onPageSizeMock=_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.e.fn((()=>(0,_utils_logger__WEBPACK_IMPORTED_MODULE_4__.PN)("Table","onPageSizeChange handler"))),onRowMock=_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.e.fn((()=>(0,_utils_logger__WEBPACK_IMPORTED_MODULE_4__.PN)("Table","onRow handler"))),onSelectMock=_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.e.fn((()=>(0,_utils_logger__WEBPACK_IMPORTED_MODULE_4__.PN)("Table","onSelect handler"))),onSortMock=_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.e.fn((()=>(0,_utils_logger__WEBPACK_IMPORTED_MODULE_4__.PN)("Table","onSort handler"))),Primary={args:{columns:_utils__WEBPACK_IMPORTED_MODULE_7__.US,onPageChange:void 0,onPageSizeChange:void 0,onRowClick:void 0,onSelectionChange:void 0,onSortChange:void 0,rows:_utils__WEBPACK_IMPORTED_MODULE_7__.UL,title:"Table"}},onActionMock=_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.e.fn((()=>{})),onDataAction=(actionName,data,options)=>{console.info({data:data},{options:options}),(0,_utils_logger__WEBPACK_IMPORTED_MODULE_4__.PN)("Table",`=> on '${actionName}' handler`),onActionMock()},DataActions={args:{...Primary.args,actions:[{callback:(data,options)=>onDataAction("Add",data,options),icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.add,label:"Add"},{callback:(data,options)=>onDataAction("Custom",data,options),icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_icons_material_Style__WEBPACK_IMPORTED_MODULE_11__.Z,{}),label:"Custom"},{callback:(data,options)=>onDataAction("Send",data,options),disabled:!0,icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.block,label:"Send"},{badge:{color:"secondary",overlap:"circular",value:"1",variant:"standard"},callback:(data,options)=>onDataAction("Filter",data,options),icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.filter,label:"Filter",position:"icon",tooltip:"1 filter applied"},{callback:(data,options)=>onDataAction("Close",data,options),icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.close,label:"Close",position:"icon"},{callback:(data,options)=>onDataAction("Custom",data,options),icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_icons_material_Style__WEBPACK_IMPORTED_MODULE_11__.Z,{}),label:"Custom",position:"row"},{callback:(data,options)=>onDataAction("Edit",data,options),icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.edit,label:"Edit",position:"primary"},{callback:(data,options)=>onDataAction("Notify",data,options),disabled:data=>data.age>40,icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.notifications,label:"Notify",position:"row"},{callback:(data,options)=>onDataAction("Delete",data,options),disabled:!0,icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.delete,label:"Delete",position:"row"},{callback:(data,options)=>onDataAction("Delete >= 3",data,options),disabled:data=>data.length<3,icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.delete,label:"Delete at least 3",position:"selection"}]}},Loading={args:{...Primary.args,loading:!0}},Localized={args:{...Primary.args,localized:!0,title:_utils_mocks_LocaleMock__WEBPACK_IMPORTED_MODULE_5__.RC.title}},NoData={args:{...Primary.args,rows:[]}},EmptyState={args:{...NoData.args,emptyState:"Custom Empty State"}},PageSizeCustom={args:{...Primary.args,onPageChange:onPageMock,onPageSizeChange:onPageSizeMock,pageSize:3,pageSizeOptions:[3,6,9],rows:[...Primary.args.rows.slice(0,3)],rowsTotal:30}},Pagination={args:{...Primary.args,onPageChange:onPageMock,rows:[...Primary.args.rows.slice(0,10)],rowsTotal:100},play:async({canvasElement:canvasElement})=>{const nextPageButton=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getByTestId((0,_utils__WEBPACK_IMPORTED_MODULE_3__.Mp)(___WEBPACK_IMPORTED_MODULE_8__.jg,___WEBPACK_IMPORTED_MODULE_8__.nZ.pagination,"next"));nextPageButton&&(_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.BX.click(nextPageButton),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.l)(onPageMock).toHaveBeenCalledTimes(onPageMock.mock.calls.length))}},RowClickable={args:{...Primary.args,onRowClick:onRowMock},play:async({canvasElement:canvasElement})=>{const secondRow=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getAllByRole("cell").at(1);secondRow&&(_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.BX.click(secondRow),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.l)(onRowMock).toHaveBeenCalledTimes(onRowMock.mock.calls.length))}},Selectable={args:{...Primary.args,onSelectionChange:onSelectMock},play:async({canvasElement:canvasElement,step:step})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement),selectAll=canvas.getByTestId((0,_utils__WEBPACK_IMPORTED_MODULE_3__.Mp)(___WEBPACK_IMPORTED_MODULE_8__.jg,___WEBPACK_IMPORTED_MODULE_8__.nZ.selectAll));if(!selectAll)return;await step("Select all",(async()=>{_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.BX.click(selectAll),await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.l)(onSelectMock).toHaveBeenCalledTimes(onSelectMock.mock.calls.length)})),await step("Deselect all",(async()=>{_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.BX.click(selectAll),await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.l)(onSelectMock).toHaveBeenCalledTimes(onSelectMock.mock.calls.length)}));const selectOne=canvas.getAllByTestId("checkbox-input").at(1);selectOne&&(await step("Select one",(async()=>{_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.BX.click(selectOne),await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.l)(onSelectMock).toHaveBeenCalledTimes(onSelectMock.mock.calls.length)})),await step("Deselect one",(async()=>{_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.BX.click(selectOne),await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.l)(onSelectMock).toHaveBeenCalledTimes(onSelectMock.mock.calls.length)})))}},Sortable={args:{...Primary.args,onSortChange:onSortMock},play:async({canvasElement:canvasElement})=>{const firstHeading=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.uh)(canvasElement).getAllByRole("columnheader").at(0);firstHeading&&(_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.BX.click(firstHeading),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_10__.l)(onSortMock).toHaveBeenCalledTimes(onSortMock.mock.calls.length))}},Sticky={args:{...Primary.args,height:400,onPageChange:void 0,onPageSizeChange:void 0,rows:[...Primary.args.rows,...Primary.args.rows,...Primary.args.rows],sticky:!0}},StickyPagination={args:{...Primary.args,height:400,onPageChange:onPageMock,rows:[...Primary.args.rows,...Primary.args.rows,...Primary.args.rows],sticky:!0}},Styled={args:{...Primary.args,style:{backgroundColor:"cyan"}}},StyledRow={args:{...Primary.args,actions:[{callback:(data,options)=>onDataAction("Edit",data,options),icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.edit,label:"Edit",position:"primary"}],getRowStyle:(row,options)=>({backgroundColor:(options?.indexes[0]||0)%2==0?"lightyellow":"lightgreen"})}},TableLayoutAuto={args:{...Primary.args,actions:[{callback:(data,options)=>onDataAction("Add",data,options),icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.add,label:"Add"},{callback:(data,options)=>onDataAction("Edit",data,options),icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.edit,label:"Edit",position:"primary"},{callback:(data,options)=>onDataAction("Delete",data,options),icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.close,label:"Delete",position:"primary"}],columns:_utils__WEBPACK_IMPORTED_MODULE_7__.wC,rows:_utils__WEBPACK_IMPORTED_MODULE_7__.UL,rowsTotal:6,tableLayout:"auto",title:"Try to scroll horizontally"}},TableLayoutAutoSelectionSticky={args:{...TableLayoutAuto.args,stickySelection:!0}},TableLayoutSticky={args:{...Primary.args,sticky:!0,height:400,actions:[{callback:(data,options)=>onDataAction("Add",data,options),icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.add,label:"Add"}],columns:_utils__WEBPACK_IMPORTED_MODULE_7__.wC,rows:_utils__WEBPACK_IMPORTED_MODULE_7__.UL,rowsTotal:6,tableLayout:"auto",title:"Try to scroll both ways"}},ColumnFilters={args:{...Primary.args,columns:[{label:"Name",path:"name",renderFilter:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_12__.Z,{label:"type to filter",type:"text",variant:"standard"})},{label:"Age",path:"age"}],height:400,rows:[...Primary.args.rows,...Primary.args.rows,...Primary.args.rows],showFilters:!0,title:"Column Filters"}},ColumnFiltersSticky={args:{...ColumnFilters.args,sticky:!0,title:"Column Filters (sticky)"}},ColumnFiltersStickyWithActions={args:{...ColumnFiltersSticky.args,actions:[{callback:(data,options)=>onDataAction("Add",data,options),icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.add,label:"Add"},{callback:(data,options)=>onDataAction("Close",data,options),icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.close,label:"Close",position:"icon"},{callback:(data,options)=>onDataAction("Custom",data,options),icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_icons_material_Style__WEBPACK_IMPORTED_MODULE_11__.Z,{}),label:"Custom",position:"row"},{callback:(data,options)=>onDataAction("Edit",data,options),icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.edit,label:"Edit",position:"primary"},{callback:(data,options)=>onDataAction("Delete >= 3",data,options),disabled:data=>data.length<3,icon:_types_Icon__WEBPACK_IMPORTED_MODULE_2__.P.delete,label:"Delete at least 3",position:"selection"}],columns:TableLayoutSticky.args.columns,rows:TableLayoutSticky.args.rows,tableLayout:"auto"}},ColumnFiltersStickyWithActionsStickySelection={args:{...ColumnFiltersStickyWithActions.args,stickySelection:!0}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    columns: TABLE_MOCKED_COLUMNS,\n    onPageChange: undefined,\n    onPageSizeChange: undefined,\n    onRowClick: undefined,\n    onSelectionChange: undefined,\n    onSortChange: undefined,\n    rows: TABLE_MOCKED_DATA,\n    title: "Table"\n  }\n}',...Primary.parameters?.docs?.source}}},DataActions.parameters={...DataActions.parameters,docs:{...DataActions.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    actions: [{\n      callback: (data: any, options: any) => onDataAction("Add", data, options),\n      icon: Icons.add,\n      label: "Add"\n    }, {\n      callback: (data: any, options: any) => onDataAction("Custom", data, options),\n      icon: <MUIStyleIcon />,\n      label: "Custom"\n    }, {\n      callback: (data: any, options: any) => onDataAction("Send", data, options),\n      disabled: true,\n      icon: Icons.block,\n      label: "Send"\n    }, {\n      badge: {\n        color: "secondary",\n        overlap: "circular",\n        value: "1",\n        variant: "standard"\n      },\n      callback: (data: any, options: any) => onDataAction("Filter", data, options),\n      icon: Icons.filter,\n      label: "Filter",\n      position: "icon",\n      tooltip: "1 filter applied"\n    }, {\n      callback: (data: any, options: any) => onDataAction("Close", data, options),\n      icon: Icons.close,\n      label: "Close",\n      position: "icon"\n    }, {\n      callback: (data: any, options: any) => onDataAction("Custom", data, options),\n      icon: <MUIStyleIcon />,\n      label: "Custom",\n      position: "row"\n    }, {\n      callback: (data: any, options: any) => onDataAction("Edit", data, options),\n      icon: Icons.edit,\n      label: "Edit",\n      position: "primary"\n    }, {\n      callback: (data: any, options: any) => onDataAction("Notify", data, options),\n      disabled: (data: any) => data.age > 40,\n      icon: Icons.notifications,\n      label: "Notify",\n      position: "row"\n    }, {\n      callback: (data: any, options: any) => onDataAction("Delete", data, options),\n      disabled: true,\n      icon: Icons.delete,\n      label: "Delete",\n      position: "row"\n    }, {\n      callback: (data: any, options: any) => onDataAction("Delete >= 3", data, options),\n      disabled: (data: any[]) => data.length < 3,\n      icon: Icons.delete,\n      label: "Delete at least 3",\n      position: "selection"\n    }]\n  }\n}',...DataActions.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    loading: true\n  }\n}",...Loading.parameters?.docs?.source}}},Localized.parameters={...Localized.parameters,docs:{...Localized.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    localized: true,\n    title: MessageMock.title\n  }\n}",...Localized.parameters?.docs?.source}}},NoData.parameters={...NoData.parameters,docs:{...NoData.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    rows: []\n  }\n}",...NoData.parameters?.docs?.source}}},EmptyState.parameters={...EmptyState.parameters,docs:{...EmptyState.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...NoData.args,\n    emptyState: "Custom Empty State"\n  }\n}',...EmptyState.parameters?.docs?.source}}},PageSizeCustom.parameters={...PageSizeCustom.parameters,docs:{...PageSizeCustom.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    onPageChange: onPageMock,\n    onPageSizeChange: onPageSizeMock,\n    pageSize: 3,\n    pageSizeOptions: [3, 6, 9],\n    rows: [...Primary.args.rows!.slice(0, 3)],\n    rowsTotal: 30\n  }\n}",...PageSizeCustom.parameters?.docs?.source}}},Pagination.parameters={...Pagination.parameters,docs:{...Pagination.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    onPageChange: onPageMock,\n    rows: [...Primary.args.rows!.slice(0, 10)],\n    rowsTotal: 100\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const nextPageButton = canvas.getByTestId(getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.pagination, "next"));\n    if (!nextPageButton) {\n      return;\n    }\n    fireEvent.click(nextPageButton);\n    expect(onPageMock).toHaveBeenCalledTimes(onPageMock.mock.calls.length);\n  }\n}',...Pagination.parameters?.docs?.source}}},RowClickable.parameters={...RowClickable.parameters,docs:{...RowClickable.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    onRowClick: onRowMock\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const secondRow = canvas.getAllByRole("cell").at(1);\n    if (!secondRow) {\n      return;\n    }\n    fireEvent.click(secondRow);\n    expect(onRowMock).toHaveBeenCalledTimes(onRowMock.mock.calls.length);\n  }\n}',...RowClickable.parameters?.docs?.source}}},Selectable.parameters={...Selectable.parameters,docs:{...Selectable.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    onSelectionChange: onSelectMock\n  },\n  play: async ({\n    canvasElement,\n    step\n  }) => {\n    const canvas = within(canvasElement);\n    const selectAll = canvas.getByTestId(getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.selectAll));\n    if (!selectAll) {\n      return;\n    }\n    await step("Select all", async () => {\n      fireEvent.click(selectAll);\n      await expect(onSelectMock).toHaveBeenCalledTimes(onSelectMock.mock.calls.length);\n    });\n    await step("Deselect all", async () => {\n      fireEvent.click(selectAll);\n      await expect(onSelectMock).toHaveBeenCalledTimes(onSelectMock.mock.calls.length);\n    });\n    const selectOne = canvas.getAllByTestId("checkbox-input").at(1);\n    if (!selectOne) {\n      return;\n    }\n    await step("Select one", async () => {\n      fireEvent.click(selectOne);\n      await expect(onSelectMock).toHaveBeenCalledTimes(onSelectMock.mock.calls.length);\n    });\n    await step("Deselect one", async () => {\n      fireEvent.click(selectOne);\n      await expect(onSelectMock).toHaveBeenCalledTimes(onSelectMock.mock.calls.length);\n    });\n  }\n}',...Selectable.parameters?.docs?.source}}},Sortable.parameters={...Sortable.parameters,docs:{...Sortable.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    onSortChange: onSortMock\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const firstHeading = canvas.getAllByRole("columnheader").at(0);\n    if (!firstHeading) {\n      return;\n    }\n    fireEvent.click(firstHeading);\n    expect(onSortMock).toHaveBeenCalledTimes(onSortMock.mock.calls.length);\n  }\n}',...Sortable.parameters?.docs?.source}}},Sticky.parameters={...Sticky.parameters,docs:{...Sticky.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    height: 400,\n    onPageChange: undefined,\n    onPageSizeChange: undefined,\n    rows: [...Primary.args.rows!, ...Primary.args.rows!, ...Primary.args.rows!],\n    sticky: true\n  }\n}",...Sticky.parameters?.docs?.source}}},StickyPagination.parameters={...StickyPagination.parameters,docs:{...StickyPagination.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    height: 400,\n    onPageChange: onPageMock,\n    rows: [...Primary.args.rows!, ...Primary.args.rows!, ...Primary.args.rows!],\n    sticky: true\n  }\n}",...StickyPagination.parameters?.docs?.source}}},Styled.parameters={...Styled.parameters,docs:{...Styled.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    style: {\n      backgroundColor: "cyan"\n    }\n  }\n}',...Styled.parameters?.docs?.source}}},StyledRow.parameters={...StyledRow.parameters,docs:{...StyledRow.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    actions: [{\n      callback: (data: any, options: any) => onDataAction("Edit", data, options),\n      icon: Icons.edit,\n      label: "Edit",\n      position: "primary"\n    }],\n    getRowStyle: (row: any, options: any) => {\n      const index = options?.indexes[0] || 0;\n      return {\n        backgroundColor: index % 2 === 0 ? "lightyellow" : "lightgreen"\n      };\n    }\n  }\n}',...StyledRow.parameters?.docs?.source}}},TableLayoutAuto.parameters={...TableLayoutAuto.parameters,docs:{...TableLayoutAuto.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    actions: [{\n      callback: (data: any, options: any) => onDataAction("Add", data, options),\n      icon: Icons.add,\n      label: "Add"\n    }, {\n      callback: (data: any, options: any) => onDataAction("Edit", data, options),\n      icon: Icons.edit,\n      label: "Edit",\n      position: "primary"\n    }, {\n      callback: (data: any, options: any) => onDataAction("Delete", data, options),\n      icon: Icons.close,\n      label: "Delete",\n      position: "primary"\n    }],\n    columns: TABLE_MOCKED_COLUMNS_FULL,\n    rows: TABLE_MOCKED_DATA,\n    rowsTotal: 6,\n    tableLayout: "auto",\n    title: "Try to scroll horizontally"\n  }\n}',...TableLayoutAuto.parameters?.docs?.source}}},TableLayoutAutoSelectionSticky.parameters={...TableLayoutAutoSelectionSticky.parameters,docs:{...TableLayoutAutoSelectionSticky.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...TableLayoutAuto.args,\n    stickySelection: true\n  }\n}",...TableLayoutAutoSelectionSticky.parameters?.docs?.source}}},TableLayoutSticky.parameters={...TableLayoutSticky.parameters,docs:{...TableLayoutSticky.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    sticky: true,\n    height: 400,\n    actions: [{\n      callback: (data: any, options: any) => onDataAction("Add", data, options),\n      icon: Icons.add,\n      label: "Add"\n    }],\n    columns: TABLE_MOCKED_COLUMNS_FULL,\n    rows: TABLE_MOCKED_DATA,\n    rowsTotal: 6,\n    tableLayout: "auto",\n    title: "Try to scroll both ways"\n  }\n}',...TableLayoutSticky.parameters?.docs?.source}}},ColumnFilters.parameters={...ColumnFilters.parameters,docs:{...ColumnFilters.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    columns: [{\n      label: "Name",\n      path: "name",\n      renderFilter: <MUITextField label="type to filter" type="text" variant="standard" />\n    }, {\n      label: "Age",\n      path: "age"\n    }],\n    height: 400,\n    rows: [...Primary.args.rows!, ...Primary.args.rows!, ...Primary.args.rows!],\n    showFilters: true,\n    title: "Column Filters"\n  }\n}',...ColumnFilters.parameters?.docs?.source}}},ColumnFiltersSticky.parameters={...ColumnFiltersSticky.parameters,docs:{...ColumnFiltersSticky.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...ColumnFilters.args,\n    sticky: true,\n    title: "Column Filters (sticky)"\n  }\n}',...ColumnFiltersSticky.parameters?.docs?.source}}},ColumnFiltersStickyWithActions.parameters={...ColumnFiltersStickyWithActions.parameters,docs:{...ColumnFiltersStickyWithActions.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...ColumnFiltersSticky.args,\n    actions: [{\n      callback: (data: any, options: any) => onDataAction("Add", data, options),\n      icon: Icons.add,\n      label: "Add"\n    }, {\n      callback: (data: any, options: any) => onDataAction("Close", data, options),\n      icon: Icons.close,\n      label: "Close",\n      position: "icon"\n    }, {\n      callback: (data: any, options: any) => onDataAction("Custom", data, options),\n      icon: <MUIStyleIcon />,\n      label: "Custom",\n      position: "row"\n    }, {\n      callback: (data: any, options: any) => onDataAction("Edit", data, options),\n      icon: Icons.edit,\n      label: "Edit",\n      position: "primary"\n    }, {\n      callback: (data: any, options: any) => onDataAction("Delete >= 3", data, options),\n      disabled: (data: any[]) => data.length < 3,\n      icon: Icons.delete,\n      label: "Delete at least 3",\n      position: "selection"\n    }],\n    columns: TableLayoutSticky.args.columns,\n    rows: TableLayoutSticky.args.rows,\n    tableLayout: "auto"\n  }\n}',...ColumnFiltersStickyWithActions.parameters?.docs?.source}}},ColumnFiltersStickyWithActionsStickySelection.parameters={...ColumnFiltersStickyWithActionsStickySelection.parameters,docs:{...ColumnFiltersStickyWithActionsStickySelection.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...ColumnFiltersStickyWithActions.args,\n    stickySelection: true\n  }\n}",...ColumnFiltersStickyWithActionsStickySelection.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","DataActions","Loading","Localized","NoData","EmptyState","PageSizeCustom","Pagination","RowClickable","Selectable","Sortable","Sticky","StickyPagination","Styled","StyledRow","TableLayoutAuto","TableLayoutAutoSelectionSticky","TableLayoutSticky","ColumnFilters","ColumnFiltersSticky","ColumnFiltersStickyWithActions","ColumnFiltersStickyWithActionsStickySelection"]},"./src/utils/mocks/LocaleMock.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{RC:function(){return MessageMock},U4:function(){return localeDecorator}});__webpack_require__("./node_modules/react/index.js");var _contexts_Mosaic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/contexts/Mosaic.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1pl9h87nja(){var path="/home/runner/work/mosaic/mosaic/src/utils/mocks/LocaleMock.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"bd98ce82e7b43ba407f42d63d80a1b3da8787c70"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/mosaic/mosaic/src/utils/mocks/LocaleMock.tsx",statementMap:{0:{start:{line:42,column:44},end:{line:97,column:1}},1:{start:{line:99,column:32},end:{line:99,column:116}},2:{start:{line:99,column:83},end:{line:99,column:116}},3:{start:{line:101,column:35},end:{line:105,column:1}},4:{start:{line:102,column:2},end:{line:104,column:26}},5:{start:{line:102,column:44},end:{line:102,column:96}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:99,column:32},end:{line:99,column:33}},loc:{start:{line:99,column:83},end:{line:99,column:116}},line:99},1:{name:"(anonymous_1)",decl:{start:{line:101,column:35},end:{line:101,column:36}},loc:{start:{line:102,column:2},end:{line:104,column:26}},line:102},2:{name:"(anonymous_2)",decl:{start:{line:102,column:35},end:{line:102,column:36}},loc:{start:{line:102,column:44},end:{line:102,column:96}},line:102}},branchMap:{0:{loc:{start:{line:99,column:83},end:{line:99,column:116}},type:"binary-expr",locations:[{start:{line:99,column:83},end:{line:99,column:109}},{start:{line:99,column:113},end:{line:99,column:116}}],line:99}},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0,2:0},b:{0:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bd98ce82e7b43ba407f42d63d80a1b3da8787c70"});var actualCoverage=coverage[path];return cov_1pl9h87nja=function(){return actualCoverage},actualCoverage}cov_1pl9h87nja();let MessageMock=function(MessageMock){return MessageMock.page1="locale.page1",MessageMock.page2="locale.page2",MessageMock.page3="locale.page3",MessageMock.step1="locale.step1",MessageMock.step2="locale.step2",MessageMock.step3="locale.step3",MessageMock.next="locale.next",MessageMock.back="locale.back",MessageMock.finish="locale.finish",MessageMock.dateTime="locale.dateTime",MessageMock.button="locale.button",MessageMock.cancel="locale.cancel",MessageMock.checkbox="locale.checkbox",MessageMock.confirm="locale.confirm",MessageMock.inputNumber="locale.inputNumber",MessageMock.inputText="locale.inputText",MessageMock.label="locale.label",MessageMock.placeholder="locale.placeholder",MessageMock.select="locale.select",MessageMock.subtitle="locale.subtitle",MessageMock.switch="locale.switch",MessageMock.text="locale.text",MessageMock.title="locale.title",MessageMock.typography="locale.typography",MessageMock.value="locale.value",MessageMock}({});const MESSAGES_MOCK=(cov_1pl9h87nja().s[0]++,{en:{[MessageMock.page1]:"Page1",[MessageMock.page2]:"Page2",[MessageMock.page3]:"Page3",[MessageMock.step1]:"Step1",[MessageMock.step2]:"Step2",[MessageMock.step3]:"Step3",[MessageMock.next]:"Next",[MessageMock.back]:"Back",[MessageMock.finish]:"Finish",[MessageMock.dateTime]:"Date Time",[MessageMock.button]:"Button",[MessageMock.cancel]:"Cancel",[MessageMock.checkbox]:"Checkbox",[MessageMock.confirm]:"Confirm",[MessageMock.inputNumber]:"Input Number",[MessageMock.inputText]:"Input Text",[MessageMock.label]:"Label",[MessageMock.placeholder]:"Enter value...",[MessageMock.select]:"Dropdown",[MessageMock.subtitle]:"Subtitle",[MessageMock.switch]:"Switch",[MessageMock.text]:"Some lines of text...",[MessageMock.title]:"Title",[MessageMock.typography]:"Text",[MessageMock.value]:"Value"},"it-IT":{[MessageMock.page1]:"Pagina 1",[MessageMock.page2]:"Pagina 2",[MessageMock.page3]:"Pagina 3",[MessageMock.step1]:"1°Passo",[MessageMock.step2]:"2°Passo",[MessageMock.step3]:"3°Passo",[MessageMock.next]:"Avanti",[MessageMock.back]:"Dietro",[MessageMock.finish]:"Finito",[MessageMock.dateTime]:"Data Ore",[MessageMock.button]:"Bottone",[MessageMock.cancel]:"Annulla",[MessageMock.checkbox]:"Spunta",[MessageMock.confirm]:"Conferma",[MessageMock.inputNumber]:"Campo numerico",[MessageMock.inputText]:"Campo testuale",[MessageMock.label]:"Etichetta",[MessageMock.placeholder]:"Inserire valore...",[MessageMock.select]:"Menu a tendina",[MessageMock.subtitle]:"Sottotitolo",[MessageMock.switch]:"Interruttore",[MessageMock.text]:"Qualche riga di testo...",[MessageMock.title]:"Titolo",[MessageMock.typography]:"Testo",[MessageMock.value]:"Valore"}});cov_1pl9h87nja().s[1]++;cov_1pl9h87nja().s[3]++;const localeDecorator=Story=>(cov_1pl9h87nja().f[1]++,cov_1pl9h87nja().s[4]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contexts_Mosaic__WEBPACK_IMPORTED_MODULE_1__.IA,{localize:key=>(cov_1pl9h87nja().f[2]++,cov_1pl9h87nja().s[5]++,((key,locale)=>(cov_1pl9h87nja().f[0]++,cov_1pl9h87nja().s[2]++,cov_1pl9h87nja().b[0][0]++,MESSAGES_MOCK[locale][key]||(cov_1pl9h87nja().b[0][1]++,key)))(key,"it-IT")),children:Story()}));localeDecorator.displayName="localeDecorator"},"?4f7e":function(){}}]);