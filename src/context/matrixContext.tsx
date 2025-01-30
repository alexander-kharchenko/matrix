import { createContext, FC, ReactNode, useState } from "react";
import { createRows, createRow, findClosest } from "../helpers/utils";
import { Row, MatrixContextProps } from "../helpers/types";

export const MatrixContext = createContext<Partial<MatrixContextProps>>({});

export const MatrixContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [rows, setRows] = useState<Row[]>(() => createRows(3, 4));
  const [closestNumbers, setClosestNumbers] = useState<number[]>([]);

  const addRow = () => {
    if (!rows || rows.length === 0) return;

    const row = createRow(rows[0].cells.length);

    setRows((state) => {
      return [...state, row];
    });
  };

  const deleteRow = (rowId: string) => {
    setRows((state) => state.filter((row) => row.id !== rowId));
  };

  const increaseByOne = (rowId: string, cellId: string) => {
    setRows((state) =>
      state.map((row) => {
        if (row.id !== rowId) return row;
        return {
          ...row,
          cells: row.cells.map((cell) => {
            if (cell.id !== cellId) return cell;
            return {
              ...cell,
              value: cell.value + 1,
            };
          }),
        };
      }),
    );
  };

  const getClosest = (target: number) => {
    const values = rows
      .map((row) => row.cells.map((cell) => cell.value))
      .flat();

    const closest = findClosest(values, target, rows[0].cells.length);

    setClosestNumbers(closest);
  };

  const resetClosest = () => {
    setClosestNumbers([]);
  };

  const value = {
    rows,
    addRow,
    deleteRow,
    increaseByOne,
    closestNumbers,
    getClosest,
    resetClosest,
  };

  return (
    <MatrixContext.Provider value={value}>{children}</MatrixContext.Provider>
  );
};
