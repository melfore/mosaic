import renderer from "react-test-renderer";

import { Icons } from "../../types/Icon";
import { ITable, TableActionPosition } from "../../types/Table";
import { getComposedDataCy } from "../../utils";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Table, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<ITable> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "div",
  localized: true,
  props: {
    columns: [
      { path: "name", label: "Name" },
      { path: "rating", label: "Rating" },
    ],
    rows: [
      { id: "1", name: "Mosaic", rating: 4 },
      { id: "2", name: "Murales", rating: 3 },
      { id: "3", name: "Paintings", rating: 2.5 },
      { id: "4", name: "Photography", rating: 5 },
      { id: "5", name: "Sculpture", rating: 3 },
    ],
    title: "Table",
  },
};

const getTableTestable = (options?: IPartialTestOptions<ITable>) =>
  getTestableComponent(Table, DEFAULT_TEST_OPTIONS, options);

// TODO: missing localized test

describe("Table test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getTableTestable();
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getTableTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  // TODO: improve this
  it("callbacks", () => {
    getTableTestable({
      props: {
        onPageChange: jest.fn(),
        onPageSizeChange: jest.fn(),
        onRowClick: jest.fn(),
        onSelectionChange: jest.fn(),
        onSortChange: jest.fn(),
      },
    });
  });

  it("bulk selection - select all", () => {
    const onSelectionChange = jest.fn();
    const { element, wrapper } = getTableTestable({ props: { onSelectionChange } });

    const bulkSelectionDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.selectAll);
    const bulkSelection = wrapper.find(`[data-cy='${bulkSelectionDataCy}']`);
    const bulkSelectionInput = bulkSelection.find("input");
    bulkSelectionInput.simulate("change", { target: { checked: true } });
    expect(onSelectionChange).toHaveBeenCalledTimes(1);
    expect(onSelectionChange).toHaveBeenCalledWith(DEFAULT_TEST_OPTIONS.props.rows);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("bulk selection - select none", () => {
    const onSelectionChange = jest.fn();
    const { element, wrapper } = getTableTestable({ props: { onSelectionChange } });

    const bulkSelectionDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.selectAll);
    const bulkSelection = wrapper.find(`[data-cy='${bulkSelectionDataCy}']`);

    const bulkSelectionInput = bulkSelection.find("input");
    bulkSelectionInput.simulate("change", { target: { checked: false } });
    expect(onSelectionChange).toHaveBeenCalledTimes(1);
    expect(onSelectionChange).toHaveBeenCalledWith([]);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("complex column path", () => {
    const rows = [
      { data: { value: "01" } },
      {},
      { data: { value: "23" } },
      { data: { value: "45" } },
      { data: { value: "67" } },
      { data: null },
      { data: { value: "89" } },
    ];

    const { element, wrapper } = getTableTestable({
      props: { columns: [{ label: "Value", path: "data.value" }], rows },
    });

    const dataCells = wrapper.find("td.MuiTableCell-root");
    dataCells.forEach((dataCell, index) => expect(dataCell.text()).toEqual(rows[index].data?.value || ""));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("global action", () => {
    const callback = jest.fn();
    const label = "Account";
    const { element, wrapper } = getTableTestable({
      props: { actions: [{ callback, icon: Icons.account, label }] },
    });

    const actionDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.action, label);
    const action = wrapper.find(`button[data-cy='${actionDataCy}']`);
    action.simulate("click");
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith([]);

    const actionLabel = action.find("span.MuiButton-label");
    expect(actionLabel.text()).toEqual(label);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("hide header", () => {
    const { element } = getTableTestable({ props: { hideHeader: true } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("immutable options", () => {
    const frozenRows = Object.freeze([
      { name: "Mosaic" },
      { name: "Murales" },
      { name: "Paintings" },
      { name: "Photography" },
      { name: "Sculpture" },
    ]) as { name: string }[];
    const { element } = getTableTestable({ props: { rows: frozenRows } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading", () => {
    const { element } = getTableTestable({ props: { loading: true } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("pagination - links", () => {
    const onPageChange = jest.fn();
    const { wrapper } = getTableTestable({
      props: { onPageChange, pageSize: 3, rowsTotal: DEFAULT_TEST_OPTIONS.props.rows.length },
    });

    const firstPageButtonDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.pagination, "first");
    const firstPageButton = wrapper.find(`button[data-cy='${firstPageButtonDataCy}']`);
    expect(firstPageButton.prop("disabled")).toBeTruthy();

    const lastPageButtonDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.pagination, "last");
    const lastPageButton = wrapper.find(`button[data-cy='${lastPageButtonDataCy}']`);
    expect(lastPageButton.prop("disabled")).toBeFalsy();
    lastPageButton.simulate("click");

    expect(onPageChange).toHaveBeenCalledTimes(1);
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it("pre-selection", () => {
    const { element } = getTableTestable({ props: { selectionFilter: (d) => d.name.startsWith("P") } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("pre-sorting", () => {
    const { element } = getTableTestable({ props: { sorting: { path: "name", ordering: "asc" } } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("row action", () => {
    const callback = jest.fn();
    const label = "Account";
    const { element, wrapper } = getTableTestable({
      props: { actions: [{ callback, icon: Icons.account, label, position: TableActionPosition.row }] },
    });

    const actionDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.action, label);
    const action = wrapper.find(`button[data-cy='${actionDataCy}']`).first();
    action.simulate("click");
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(DEFAULT_TEST_OPTIONS.props.rows[0]);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("row style", () => {
    const getRowStyle = jest.fn();
    const { element } = getTableTestable({ props: { getRowStyle } });
    expect(getRowStyle).toHaveBeenCalledTimes(DEFAULT_TEST_OPTIONS.props.rows.length * 2);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("selection action", () => {
    const callback = jest.fn();
    const label = "Selection";
    const { element, wrapper } = getTableTestable({
      props: {
        actions: [{ callback, icon: Icons.account, label, position: TableActionPosition.selection }],
        selectionFilter: (d) => d.name.startsWith("P"),
      },
    });

    const actionDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.action, label);
    const action = wrapper.find(`button[data-cy='${actionDataCy}']`);
    action.simulate("click");
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith([
      { id: "3", name: "Paintings", rating: 2.5 },
      { id: "4", name: "Photography", rating: 5 },
    ]);

    const actionLabel = action.find("span.MuiButton-label");
    expect(actionLabel.text()).toEqual(label);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("sticky", () => {
    const { element } = getTableTestable({ props: { sticky: true } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("sortable - table defined", () => {
    const nameColumn = DEFAULT_TEST_OPTIONS.props.columns[0].label;
    const ratingColumn = DEFAULT_TEST_OPTIONS.props.columns[1].label;
    const onSortChange = jest.fn();
    const { element, wrapper } = getTableTestable({
      props: { onSortChange, sorting: { ordering: "asc", path: "name" } },
    });

    const ratingHeaderDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.headerCell, ratingColumn);
    const ratingHeader = wrapper.find(`th[data-cy='${ratingHeaderDataCy}'] span.MuiTableSortLabel-root`);
    ratingHeader.simulate("click");
    expect(onSortChange).toHaveBeenCalledTimes(1);
    expect(onSortChange).toHaveBeenCalledWith("rating", "asc");

    const nameHeaderDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.headerCell, nameColumn);
    const nameHeader = wrapper.find(`th[data-cy='${nameHeaderDataCy}'] span.MuiTableSortLabel-root`);
    nameHeader.simulate("click");
    expect(onSortChange).toHaveBeenCalledTimes(2);
    expect(onSortChange).toHaveBeenCalledWith("name", "asc");

    nameHeader.simulate("click");
    expect(onSortChange).toHaveBeenCalledTimes(3);
    expect(onSortChange).toHaveBeenCalledWith("name", "desc");

    nameHeader.simulate("click");
    expect(onSortChange).toHaveBeenCalledTimes(4);
    expect(onSortChange).toHaveBeenCalledWith(null, null);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("sortable - column defined", () => {
    const nameColumn = DEFAULT_TEST_OPTIONS.props.columns[0].label;
    const ratingColumn = DEFAULT_TEST_OPTIONS.props.columns[1].label;
    const onSortChange = jest.fn();
    const { element, wrapper } = getTableTestable({
      props: {
        columns: DEFAULT_TEST_OPTIONS.props.columns.map((column) => ({
          ...column,
          sortable: column.label !== nameColumn,
        })),
        onSortChange,
      },
    });

    const nameHeaderDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.headerCell, nameColumn);
    const nameHeader = wrapper.find(`th[data-cy='${nameHeaderDataCy}'] span.MuiTableSortLabel-root`);
    expect(nameHeader.length).toEqual(0);

    const ratingHeaderDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.headerCell, ratingColumn);
    const ratingHeader = wrapper.find(`th[data-cy='${ratingHeaderDataCy}'] span.MuiTableSortLabel-root`);
    ratingHeader.simulate("click");
    expect(onSortChange).toHaveBeenCalledTimes(1);
    expect(onSortChange).toHaveBeenCalledWith("rating", "asc");

    ratingHeader.simulate("click");
    expect(onSortChange).toHaveBeenCalledTimes(2);
    expect(onSortChange).toHaveBeenCalledWith("rating", "desc");

    ratingHeader.simulate("click");
    expect(onSortChange).toHaveBeenCalledTimes(3);
    expect(onSortChange).toHaveBeenCalledWith(null, null);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
