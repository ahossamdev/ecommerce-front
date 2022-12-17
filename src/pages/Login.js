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
    url("https://appstore.mageworx.com/blog/wp-content/uploads/2019/11/7-blog_1060x454-Sell-a-Look-Products-Bundling-in-Fashion.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  background-color: rgba(500, 500, 500, 0.9);
  width: 25%;
  ${mobile({ width: "70%" })};
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 24px;
  ${mobile({ textAlign: "center" })};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  outline: none;
`;
const Account = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10px 0px;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="email" />
          <Input placeholder="password" type="password" />
          <Button
            style={{
              width: "8vw",
              fontSize: "14px",
              backgroundColor: "teal",
              border: "none",
              paddingTop: "10px",
              paddingBottom: "10px",
              color: "white",
              marginTop: "20px",
            }}
            variant="outlined"
            size="small"
          >
            LOGIN
          </Button>
        </Form>
        <Account>
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to="/forgetpassword"
          >
            Forgot your password?
          </Link>
          <Link
            style={{
              textDecoration: "inherit",
              color: "inherit",
              marginTop: "10px",
            }}
            to="/register"
          >
            Don't have account? Register now
          </Link>
        </Account>
      </Wrapper>
    </Container>
  );
};

export default Login;
