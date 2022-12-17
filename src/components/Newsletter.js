import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #d3efff;
`;
const Title = styled.h1`
  font-size: 70px;
  margin: 20px;
`;
const Description = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", padding: "0px 10px" })};
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  border: 1px solid lightgray;
  height: 40px;
  margin-bottom: 30px;
`;
const Input = styled.input`
  font-size: 24px;
  flex: 8;
  border: none;
  outline: none;
  padding-left: 15px;
  height: 100%;
`;
const Button = styled.button`
  flex: 1;
  height: 100%;
  font-size: 24px;
  background-color: teal;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely update from your favorite product</Description>
      <InputContainer>
        <Input />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
      <title></title>
    </Container>
  );
};

export default Newsletter;
