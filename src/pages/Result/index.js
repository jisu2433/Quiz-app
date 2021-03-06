import {Button, Container, ResultSection} from "components";
import { Link } from "react-router-dom";
import { QUIZZES } from "../../constants";

const Result = ({score, setScore}) => {
    const convertedScore = Math.floor((score / QUIZZES.length)*100);

    return (
    <Container>
        <ResultSection convertedScore={convertedScore}></ResultSection>
        <Link to="/">
            <Button onClick={() => setScore(0)}>테스트 다시하기</Button>
        </Link>
    </Container>
    );
};

export default Result;
