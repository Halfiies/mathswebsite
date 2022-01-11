//should accept a value of 1-10, and provide this to the table logic
import "./SelectionLogic.scss";

export const SelectionLogic = (props: any) => {
  const tableOptions: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { handleSet, table } = props;
  return (
    <div className="selection-options">
      <div className="selection-options__selection-box">
        {tableOptions.map((number) => (
          <p
            className="selection-options__selection"
            onClick={handleSet}
            key={number}
          >
            {number}
          </p>
        ))}
      </div>
      <div
        className="selection-options__selected-box
      "
      >
        <p className="selection-options__selected">{table}</p>
      </div>
    </div>
  );
};
