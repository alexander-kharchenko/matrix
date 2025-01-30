import { useState } from "react";
import styles from "./TableRow.module.scss";
import TrashIcon from "../../assets/trash.svg?react";
import TableCell from "../TableCell/TableCell";
import { Row } from "../../helpers/types";
import { useMatrixContext } from "../../context/matrixHooks";

type TableRowProps = {
  row: Row;
};

function TableRow({ row }: TableRowProps) {
  const [showPercent, setShowPercent] = useState<boolean>(false);
  const { deleteRow } = useMatrixContext();

  const sum = row.cells.reduce((total, current) => total + current.value, 0);

  const handleDeleteRow = () => {
    deleteRow(row.id);
  };

  return (
    <tr className={styles.tableRow}>
      {row.cells.map((cell) => (
        <TableCell
          key={cell.id}
          rowId={row.id}
          cell={cell}
          showPercent={showPercent}
          sum={sum}
        />
      ))}
      <td
        className={styles.sum}
        onMouseEnter={() => setShowPercent(true)}
        onMouseLeave={() => setShowPercent(false)}
      >
        {sum}
      </td>
      <button className={styles.deleteButton} onClick={handleDeleteRow}>
        <TrashIcon />
      </button>
    </tr>
  );
}

export default TableRow;
