import {Container, Button} from "components";
import styled from "styled-components";
import image from "components/assets/images/img.jpg";
import { Link } from "react-router-dom";

const Title = styled.h1`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 8px;
    text-align: center;
    color: ${(props) => props.theme.primaryColor100};
`;

const SubTitle = styled.h1`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 24px;
    text-align: center;
    color: ${(props) => props.theme.gray80};
`;

const StyledImage = styled.img`
    border-radius: 16px;
    opacity: 80%;
    margin-bottom: 16px;
    max-width: 100%;
    display: block;
`;

const Text = styled.p`
    font-size: 14px;
    margin-bottom: 24px;
    color: ${(props) => props.theme.gray80};
`;

const Landing = () => (
    <Container>
        <Title>무라카미 하루키 애정도 테스트</Title>
        <SubTitle>당신은 하루키에 대해 얼마나 알고 있나요?</SubTitle>
        <StyledImage src={image} alt="image"></StyledImage>
        <Text>
            무라카미 하루키는 한국 독자의 꾸준한 사랑을 받고 있습니다. 당신도 하루키를 좋아하시나요?
        </Text>
        <Link to="/quiz">
            <Button text="내가 얼마나 하루키를 좋아하는지 알아보기"></Button>
        </Link>
    </Container>
);

export default Landing;