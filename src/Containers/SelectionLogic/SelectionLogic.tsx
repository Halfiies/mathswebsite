import "./SelectionLogic.scss";

export const SelectionLogic = (props: any) => {
  const tableOptions: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { handleSet } = props;
  return (
    <>
      <div className="selection-options">
        <h3 className="selection-options__title">
          Select the table you want to practice
        </h3>
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
      </div>
    </>
  );
};
