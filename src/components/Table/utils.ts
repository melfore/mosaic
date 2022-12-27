import { ITableColumn } from "../../types/Table";

export const COLUMN_CHECKBOX_PATH = "checkbox-selection";
export const COLUMN_CHECKBOX_WIDTH = 36;

export const COLUMN_PRIMARY_ACTIONS_PATH = "primary-actions";
export const COLUMN_PRIMARY_ACTIONS_WIDTH = 44;

export const COLUMN_ROW_ACTIONS_PATH = "row-actions";
export const COLUMN_ROW_ACTIONS_WIDTH = 48;

export const TOOLBAR_HEIGHT = 64;
export const TOOLBAR_HEIGHT_MOBILE = 56;

export const PAGINATION_DEFAULT_PAGESIZE = 10;
export const PAGINATION_DEFAULT_PAGESIZE_OPTIONS = [5, 10, 25];
export const PAGINATION_TOOLBAR_BORDER = 1;
export const PAGINATION_TOOLBAR_HEIGHT = 64;

export const DEFAULT_Z_INDEX = 0;
export const SELECTION_Z_INDEX = 1;
export const HEADER_Z_INDEX = 10;
export const LOADER_Z_INDEX = 100;

export const TABLE_MOCKED_COLUMNS: ITableColumn[] = [
  { label: "Name", path: "name" },
  { label: "Age", path: "age" },
];

export const TABLE_MOCKED_COLUMNS_FULL: ITableColumn[] = [
  { label: "Name", path: "name" },
  { label: "Last Name", path: "lastName" },
  { label: "Age", path: "age" },
  { label: "Email", path: "email" },
  { label: "City", path: "city" },
  { label: "Address", path: "address" },
  { label: "Department", path: "department" },
  { label: "School", path: "school" },
  { label: "Avatar", path: "avatar" },
];

export const TABLE_MOCKED_DATA = [
  {
    id: 1,
    name: "Devin",
    lastName: "Yukhnin",
    email: "dyukhnin0@t.co",
    age: 29,
    city: "Tutem",
    address: "1424 Ridge Oak Drive",
    department: "Research and Development",
    school: "Aichi Gakusen University",
    avatar: "http://dummyimage.com/199x100.png/ff4444/ffffff",
  },
  {
    id: 2,
    name: "Kale",
    lastName: "Domican",
    email: "kdomican1@archive.org",
    age: 44,
    city: "Culacling",
    address: "378 Loftsgordon Drive",
    department: "Services",
    school: "Medical Academy in Lodz",
    avatar: "http://dummyimage.com/212x100.png/dddddd/000000",
  },
  {
    id: 3,
    name: "Harcourt",
    lastName: "Hackleton",
    email: "hhackleton2@mozilla.com",
    age: 19,
    city: "Klirou",
    address: "385 Prairie Rose Junction",
    department: "Support",
    school: "Universidad Autónoma de Fresnillo",
    avatar: "http://dummyimage.com/235x100.png/ff4444/ffffff",
  },
  {
    id: 4,
    name: "Keri",
    lastName: "Robard",
    email: "krobard3@unblog.fr",
    age: 21,
    city: "Van Nuys",
    address: "883 Straubel Way",
    department: "Business Development",
    school: "Fachhochschule Hamburg",
    avatar: "http://dummyimage.com/229x100.png/cc0000/ffffff",
  },
  {
    id: 5,
    name: "Trueman",
    lastName: "Jedrys",
    email: "tjedrys4@eventbrite.com",
    age: 36,
    city: "Sumberagung",
    address: "72 Independence Street",
    department: "Business Development",
    school: "Illinois School of Professional Psychology - Meadows Campus",
    avatar: "http://dummyimage.com/249x100.png/5fa2dd/ffffff",
  },
  {
    id: 6,
    name: "Nevsa",
    lastName: "Gelderd",
    email: "ngelderd5@wisc.edu",
    age: 22,
    city: "Qandala",
    address: "2 Lakewood Gardens Trail",
    department: "Accounting",
    school: "Universiti Malaysia Sabah",
    avatar: "http://dummyimage.com/136x100.png/5fa2dd/ffffff",
  },
];
