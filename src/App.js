import "./App.css";
import React, {useState} from "react";

function App() {
  const [currentNo, setCurrentNo] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const quizzes = [
    {
      id: 1,
      question : "다음 중 무라카미 하루키의 책은?",
      answer : [
        {text : "작별하지 않는다", isCorrect : false},
        {text : "1984", isCorrect : false},
        {text : "모순", isCorrect : false},
        {text : "여자 없는 남자들", isCorrect : true},
      ],
    },
    {
      id: 2,
      question : "무라카미 하루키의 데뷔작은?",
      answer : [
        {text : "상실의 시대", isCorrect : false},
        {text : "바람의 노래를 들어라", isCorrect : true},
        {text : "1Q84", isCorrect : false},
        {text : "해변의 카프카", isCorrect : false},
      ],
    },
    {
      id: 3,
      question : "무라카미 하루키가 가장 좋아하는 운동은?",
      answer : [
        {text : "복싱", isCorrect : false},
        {text : "야구", isCorrect : false},
        {text : "골프", isCorrect : false},
        {text : "달리기", isCorrect : true},
      ],
    },
    {
      id: 4,
      question : "다음 중 무라카미 하루키의 최신작은?",
      answer : [
        {text : "일인칭 단수", isCorrect : true},
        {text : "만년", isCorrect : false},
        {text : "금각사", isCorrect : false},
        {text : "변신", isCorrect : false},
      ],
    },
  ];  
  const convertedScore = Math.floor((score/quizzes.length)*100);
  const handleClick = (isCorrect) => {
    if (isCorrect){
      setScore(score => score+1)
    } 
    if(currentNo === quizzes.length-1) {
      setShowResult(true);
    } else {
      setCurrentNo((currentNo) => currentNo + 1);
    }
  };
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
              <span>{quizzes[currentNo].id}</span>/{quizzes.length}
            </h1>
            <div className="question=text">{quizzes[currentNo].question}</div>
          </div>
          <div className="answer-section">
            {quizzes[currentNo].answer.map((answer) => (
              <button value={answer.text} onClick={() => handleClick(answer.isCorrect)}>
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      )}
  </div>    
}

export default App;
