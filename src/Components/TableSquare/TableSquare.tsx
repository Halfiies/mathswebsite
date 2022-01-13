import { useState } from "react";
export const TableSquare = (props: any) => {
  const { handleAnswer, number } = props;
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  return (
    <>
      <p
        className={`${isCorrect ? "table__clickedBox" : "table__box"} `}
        onClick={handleAnswer}
        key={number}
      >
        {number}
      </p>
    </>
  );
};
