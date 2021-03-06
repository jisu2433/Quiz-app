import { useState } from "react";
import { useHistory } from "react-router-dom";
import AnswerGroup from "../../components/AnswerGroup";
import Container from "../../components/Container";
import QuestionSection from "../../components/QuestionSection";
import { QUIZZES } from "../../constants";

const Quiz = ({setScore}) => {
    const [currentNo, setCurrentNo] = useState(0);
    let history = useHistory();

    const handleClick = (isCorrect) => {
        if (isCorrect) {
            setScore((score) => score + 1);
        }
        if(currentNo === QUIZZES.length-1) {
            history.push("/result");
        } else {
        setCurrentNo((currentNo) => currentNo + 1);
        }
    };

return (
        <Container>
            <QuestionSection currentNo={currentNo}/>
            <AnswerGroup currentNo={currentNo} handleClick={handleClick}/>
        </Container>
    );
};

export default Quiz;