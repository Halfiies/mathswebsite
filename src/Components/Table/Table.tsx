import "./Table.scss";
import { useState, useEffect } from "react";
export const Table = (props: any) => {
  const tableNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [answerCards, setAnswerCards] = useState<number[]>(tableNumbers);
  const { table } = props;
  const generateCards = (table: number): void => {
    let answerArray = [];
    for (let i = 0; i < 12; i++) {
      answerArray.push(tableNumbers[i] * table);
    }
    console.log(answerArray);
    setAnswerCards(answerArray);
    console.log(answerCards);
  };

  const [currentCard, setCurrentCard] = useState<number>();
  useEffect(() => {
    generateCards(table);
    setCurrentCard(answerCards[0]);
  }, [table]);

  const handleAnswer = (event: any) => {
    console.log(event.target.textContent);
    console.log(answerCards);

    if (currentCard === event.target.textContent * table) {
      answerCards.splice(0, 1);
      console.log(answerCards);
      setCurrentCard(answerCards[0]);
    } else {
      console.log(answerCards);
      console.log("git gud son");
    }
  };

  useEffect(() => {
    setCurrentCard(answerCards[0]);
  }, [handleAnswer]);
  return (
    <div className="table__container">
      <div className="currentAnswer">
        <p>{currentCard}</p>
      </div>
      <div className="table">
        {tableNumbers.map((number) => (
          <p className="table__box" onClick={handleAnswer} key={number}>
            {number}
          </p>
        ))}
      </div>
    </div>
  );
};
