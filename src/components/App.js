import "../App.css";
import React, {useState} from "react";
import {Quizzes} from "../Constants";
import Button from "./Button";

function App() {
  const [currentNo, setCurrentNo] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const handleClick = (isCorrect) => {
    if (isCorrect){
      setScore(score => score+1)
    } 
    if(currentNo === Quizzes.length-1) {
      setShowResult(true);
    } else {
      setCurrentNo((currentNo) => currentNo + 1);
    }
  };
  const convertedScore = Math.floor((score/Quizzes.length)*100);

  return <div className="container">
      {showResult ? (
        <div className="app">
          <h1 className="result-header">당신의 점수는?</h1>
          <p className="result-score">{convertedScore}</p>
        </div>
      ) : (
        <div className="app">
          <div className="question-section">
            <h1 className="question-header">
              <span>{Quizzes[currentNo].id}</span>/{Quizzes.length}
            </h1>
            <div className="question=text">{Quizzes[currentNo].question}</div>
          </div>
          <div className="answer-section">
            {Quizzes[currentNo].answers.map((answer) => (
              <Button 
                text={answer.text}
                onclick={() => handleClick(answer.isCorrect)}
              />
            ))}
          </div>
        </div>
      )}
  </div>    
}

export default App;
