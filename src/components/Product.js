import styled from "styled-components";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { mobile } from "../Responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.2);
  z-index: 4;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.7s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 350px;
  height: 420px;
  position: relative;
  background-color: #fcf1ed;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  background-color: white;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  margin: auto;
`;

const Image = styled.img`
  height: 68%;
  z-index: 3;
`;

const Icon = styled.div`
  margin: 10px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.7s ease;
  &:hover {
    background-color: #f7b7eb;
    transform: scale(1.3);
  }
`;

const product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Circle />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderRoundedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default product;
