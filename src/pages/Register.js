import styled from "styled-components";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { mobile } from "../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(250, 250, 250, 0.5),
      rgba(250, 250, 250, 0.5)
    ),
    url("https://stylecaster.com/wp-content/uploads/2018/12/patchwork-fi.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  background-color: rgba(500, 500, 500, 0.9);
  width: 40%;
  ${mobile({ width: "70%" })};
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 24px;
  ${mobile({ textAlign: "center" })};
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  outline: none;
`;
const Agreement = styled.p`
  margin: 20px 0px;
`;
const Account = styled.p`
  text-align: center;
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" type="password" />
          <Input placeholder="re-password" type="password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in according with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button
            style={{
              width: "fit-content",
              fontSize: "14px",
              backgroundColor: "teal",
              border: "none",
              paddingTop: "10px",
              paddingBottom: "10px",
              color: "white",
            }}
            variant="outlined"
            size="small"
          >
            Register
          </Button>
        </Form>
        <Account>
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to="/login"
          >
            Already have an account? login now
          </Link>
        </Account>
      </Wrapper>
    </Container>
  );
};

export default Register;
