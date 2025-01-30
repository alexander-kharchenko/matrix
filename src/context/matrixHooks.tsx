import { useContext } from "react";
import { MatrixContext } from "./matrixContext";
import { MatrixContextProps } from "../helpers/types";

export const useMatrixContext = () => {
  const matrixContext = useContext(MatrixContext);
  return matrixContext as MatrixContextProps;
};
