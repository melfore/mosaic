/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties, ReactNode, useCallback, useMemo } from "react";
import { VariableSizeList } from "react-window";

import { SelectProps } from "../../../../types/Select";
import useResetCache from "../../hooks/useResetCache";
import SelectListBoxRow from "../ListBoxRow";

type SelectListBoxProps<T extends any> = Pick<SelectProps<T>, "multiple" | "options" | "optionsNumber">;

const ITEM_HEIGHT_DEFAULT = 40;
const ITEM_HEIGHT_MULTIPLE = 55;
const ITEMS_THRESHOLD_DEFAULT = 5;
const ITEMS_THRESHOLD_MULTIPLE = 6;

const SelectListBox = <T extends any>({ multiple, options, optionsNumber }: SelectListBoxProps<T>) =>
  React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>(function ListboxComponent(props, ref) {
    const { children, ...other } = props;

    const optionsCount = useMemo(() => options.length, []);

    const items = useMemo(() => {
      const items: ReactNode[] = [];
      (children as React.ReactChild[]).forEach((item: React.ReactChild & { children?: React.ReactChild[] }) => {
        items.push(item);
        items.push(...(item.children || []));
      });

      return items;
    }, [children]);

    const gridRef = useResetCache(optionsCount);

    const getItemHeight = useCallback(() => (multiple ? ITEM_HEIGHT_MULTIPLE : ITEM_HEIGHT_DEFAULT), []);

    const innerElement = useCallback(
      <T extends object>(props: T) => <ul role="listbox" {...props} style={{ margin: 0, padding: 0 }} />,
      []
    );

    const adaptedHeight = useMemo(() => {
      const itemHeight = getItemHeight();
      const optionsThresholds = multiple ? ITEMS_THRESHOLD_MULTIPLE : ITEMS_THRESHOLD_DEFAULT;

      let itemsCount = 0;
      if (optionsNumber) {
        itemsCount = optionsNumber < 0 ? 1 : optionsNumber;
      } else {
        itemsCount = optionsCount < optionsThresholds ? optionsCount : optionsThresholds;
      }

      return itemHeight * itemsCount;
    }, [getItemHeight, optionsCount]);

    const wrapperStyle = useMemo(
      (): CSSProperties => ({
        maxHeight: "100%",
        width: "100%",
      }),
      []
    );

    return (
      <div ref={ref} {...other} style={wrapperStyle}>
        <VariableSizeList
          height={adaptedHeight}
          innerElementType={innerElement}
          itemCount={optionsCount}
          itemData={items}
          itemSize={getItemHeight}
          overscanCount={2}
          ref={gridRef}
          width="100%"
        >
          {SelectListBoxRow}
        </VariableSizeList>
      </div>
    );
  });

export default SelectListBox;
