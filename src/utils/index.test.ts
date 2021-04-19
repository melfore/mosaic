import { getAllComposedDataCy, getComposedDataCy, getObjectProperty, slugify, suppressEvent } from "./index";

describe("getAllComposedDataCy", () => {
  it("all", () => {
    expect(
      getAllComposedDataCy({
        label: {
          label: "Label",
        },
        value: {
          label: "Label",
          value: () => "value",
        },
      })
    ).toEqual([
      {
        label: "Label",
        suffix: "label",
      },
      {
        label: "Label",
        suffix: "value",
      },
    ]);
  });
});

describe("getComposedDataCy", () => {
  it("valid", () => {
    const subpart = { label: "Subpart Label" };
    expect(getComposedDataCy("data-cy", subpart)).toEqual("data-cy-subpart-label");
  });

  it("valid - explicit value", () => {
    const subpart = { label: "Subpart Label", value: () => "Subpart Value" };
    expect(getComposedDataCy("data-cy", subpart)).toEqual("data-cy-Subpart Value");
  });

  it("valid - explicit value with args", () => {
    const subpart = { label: "Subpart Label", value: (int: number) => `Subpart Value [${int}]` };
    expect(getComposedDataCy("data-cy", subpart, 123)).toEqual("data-cy-Subpart Value [123]");
  });
});

describe("getObjectProperty", () => {
  it("all", () => {
    expect(getObjectProperty(undefined, "path")).toEqual(undefined);
    expect(getObjectProperty(null, "path")).toEqual(undefined);
    expect(getObjectProperty({}, "path")).toEqual(undefined);
    expect(getObjectProperty({ path: "value" }, "path.nested")).toEqual(undefined);
    expect(getObjectProperty({ path: "value" }, "path")).toEqual("value");
    expect(getObjectProperty({ path: { nested: "value" } }, "path.nested")).toEqual("value");
  });
});

describe("slugify", () => {
  it("all", () => {
    expect(slugify("SlugifyPlease")).toEqual("slugifyplease");
    expect(slugify("Slugify Please")).toEqual("slugify-please");
  });
});

describe("suppressEvent", () => {
  it("invalid", () => {
    expect(suppressEvent(null));
  });

  it("valid", () => {
    const preventDefault = jest.fn();
    const stopPropagation = jest.fn();
    const mockedEvent: any = { preventDefault, stopPropagation };
    expect(suppressEvent(mockedEvent));
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });
});
