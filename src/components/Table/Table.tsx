import styles from "./Table.module.scss";
import TableRow from "../TableRow/TableRow";
import Stats from "../Stats/Stats";
import { useMatrixContext } from "../../context/matrixHooks";

function Table() {
  const { rows } = useMatrixContext();

  if (!rows || rows.length === 0) {
    return <h1>No data</h1>;
  }

  return (
    <table className={styles.table}>
      <tbody>
        {rows.map((row) => (
          <TableRow key={row.id} row={row} />
        ))}
        <Stats />
      </tbody>
    </table>
  );
}

export default Table;
