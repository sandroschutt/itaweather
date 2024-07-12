import "./style.scss";
import { PuffLoader } from "react-spinners";

export function DefaultLoader() {
  return (
    <div className="default-loader">
      <PuffLoader
        color={"blue"}
        size={96}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p>Carregando dados...</p>
    </div>
  );
}
