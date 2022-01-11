import "./Selection.scss";
import { SelectionLogic } from "../../Containers/SelectionLogic/SelectionLogic";

export const Selection = (props: any) => {
  const { handleSet, table } = props;
  return (
    <div className="selection">
      <SelectionLogic handleSet={handleSet} table={table} />
    </div>
  );
};
