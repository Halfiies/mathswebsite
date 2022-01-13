import { useState } from "react";
import { Table } from "../Table/Table";
import { Selection } from "../Selection/Selection";
export const TablesGame = () => {
  const [table, setTable] = useState(2);
  const handleSet = (event: any) => {
    console.log(event.target.textContent);
    setTable(event.target.textContent);
  };
  return (
    <div className="tablesGame">
      <Selection handleSet={handleSet} />
      <Table table={table} />
    </div>
  );
};
