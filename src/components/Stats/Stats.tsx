import { v4 } from "uuid";
import styles from "./Stats.module.scss";
import { useMatrixContext } from "../../context/matrixHooks";

function Stats() {
  const { rows } = useMatrixContext();

  const indexes = rows
    ? Array.from({ length: rows[0].cells.length }, (_, index) => index)
    : 0;

  if (!indexes || !rows || rows.length === 0) return;

  return (
    <tr className={styles.stats}>
      {indexes.map((index) => (
        <td key={v4()}>
          {(
            rows
              .map((row) => row.cells[index])
              .reduce((total, current) => total + current.value, 0) /
            rows.length
          ).toFixed(2)}
        </td>
      ))}
    </tr>
  );
}

export default Stats;
