import styles from "./App.module.scss";
import Table from "./components/Table/Table";
import { useMatrixContext } from "./context/matrixHooks";

function App() {
  const { rows, addRow } = useMatrixContext();
  return (
    <div className={styles.app}>
      <Table />
      {rows && rows.length > 0 && (
        <button className={styles.addButton} onClick={addRow}>
          Add row
        </button>
      )}
    </div>
  );
}

export default App;
