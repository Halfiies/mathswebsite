import "./Table.scss";
import { useState, useEffect } from "react";
export const Table = (props: any) => {
  const tableNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [answerCards, setAnswerCards] = useState<number[]>(tableNumbers);
  const { table } = props;
  const shuffle = (array: Array<number>) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  const generateCards = (table: number): void => {
    let answerArray = [];
    for (let i = 0; i < 12; i++) {
      answerArray.push(tableNumbers[i] * table);
    }
    shuffle(answerArray);
    setAnswerCards(answerArray);
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
      setCurrentCard(answerCards[0]);
      //set background to green?
    } else {
      //set background to red?
      //reset this when?
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
