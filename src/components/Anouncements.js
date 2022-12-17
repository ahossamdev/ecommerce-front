import style from "styled-components";
const Container = style.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
font-weight: 500;
`;
const Anouncements = () => {
  return <Container>Super Deel ! Free Shipping an Orders Over 50$</Container>;
};

export default Anouncements;
