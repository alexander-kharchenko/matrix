import { v4 } from "uuid";
import { Row } from "./types";

export const getRandomNumber = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min);
};

export const createRow = (cellCount: number) => {
  const row: Row = {
    id: v4(),
    cells: [],
  };

  for (let i = 0; i < cellCount; i++) {
    const cell = {
      id: v4(),
      value: getRandomNumber(0, 100),
    };

    row.cells.push(cell);
  }

  return row;
};

export const createRows = (rowCount: number, cellCount: number) => {
  const rows = [];

  for (let i = 0; i < rowCount; i++) {
    const row = createRow(cellCount);
    rows.push(row);
  }

  return rows;
};

export const findClosest = (arr: number[], target: number, count: number) => {
  const copy = [...arr];

  for (let i = 1; i < arr.length; i++) {
    let diff = Math.abs(copy[i] - target);
    let j = i - 1;

    if (Math.abs(copy[j] - target) > diff) {
      let temp = copy[i];

      while (j >= 0 && Math.abs(copy[j] - target) > diff) {
        copy[j + 1] = copy[j];
        j--;
      }

      copy[j + 1] = temp;
    }
  }

  return copy.slice(0, count);
};
