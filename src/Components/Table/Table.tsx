import "./Table.scss";
import { useState, useEffect } from "react";
export const Table = (props: any) => {
  const tableNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const clickedArray: Array<boolean> = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  const [timer, setTimer] = useState(0);
  const [answerCards, setAnswerCards] = useState<number[]>(tableNumbers);
  const [isCorrect, setIsCorrect] = useState<boolean[]>(clickedArray);
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
  const handleTimer = (event: any) => {
    let start: number;
    let timeElapsed;
    if (answerCards.length == 12) {
      start = Date.now();
    } else if (answerCards.length < 12) {
      timeElapsed = Date.now() - start;
      setTimer(timeElapsed);
    } else {
      let start = 0;
    }
    console.log(start);
    console.log(timeElapsed);
  };
  const handleAnswer = (event: any) => {
    if (currentCard === event.target.textContent * table) {
      answerCards.splice(0, 1);
      setCurrentCard(answerCards[0]);

      let alteredArray = isCorrect.map((correct, i) => {
        if (event.target.textContent == i + 1) {
          return !correct;
        } else {
          return correct;
        }
      });
      console.log(alteredArray);
      setIsCorrect(alteredArray);
      console.log(isCorrect);
    }
  };
  const handleClick = (event: any) => {
    handleTimer(event);
    handleAnswer(event);
  };
  useEffect(() => {
    setCurrentCard(answerCards[0]);
  }, [handleAnswer]);
  return (
    <div className="table__container">
      <div className="currentAnswer">
        <p>{currentCard}</p>
      </div>
      <div>{timer}</div>
      <div className="table">
        {tableNumbers.map((number, i) => (
          <p
            className={`${isCorrect[i] ? "table__clickedBox" : "table__box"} `}
            onClick={handleClick}
            key={number}
          >
            {number}
          </p>
        ))}
      </div>
    </div>
  );
};
