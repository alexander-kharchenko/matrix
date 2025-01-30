import { ReactNode } from "react";

export type Cell = {
  id: string;
  value: number;
};

export type Row = {
  id: string;
  cells: Cell[];
};

export type MatrixContextProps = {
  rows: Row[];
  addRow: () => void;
  deleteRow: (rowId: string) => void;
  increaseByOne: (rowId: string, cellId: string) => void;
  closestNumbers: number[];
  getClosest: (target: number) => void;
  resetClosest: () => void;
  children: ReactNode;
};
