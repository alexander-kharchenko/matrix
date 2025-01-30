import styles from "./TableCell.module.scss";
import { Cell } from "../../helpers/types";
import { useMatrixContext } from "../../context/matrixHooks";

type TableCellProps = {
  rowId: string;
  cell: Cell;
  showPercent: boolean;
  sum: number;
};

function TableCell({ rowId, cell, showPercent, sum }: TableCellProps) {
  const { increaseByOne, closestNumbers, getClosest, resetClosest } =
    useMatrixContext();
  const percent = Math.round((cell.value * 100) / sum);

  const handleIncreaseByOne = () => {
    increaseByOne(rowId, cell.id);
  };

  const handleGetClosest = () => {
    getClosest(cell.value);
  };

  let className = styles.tableCell;
  if (closestNumbers?.some((closestNumber) => closestNumber === cell.value)) {
    className += ` ${styles.closest}`;
  }

  return (
    <td
      className={className}
      onClick={handleIncreaseByOne}
      onMouseEnter={handleGetClosest}
      onMouseLeave={resetClosest}
    >
      {showPercent ? `${percent}%` : cell.value}
    </td>
  );
}

export default TableCell;
