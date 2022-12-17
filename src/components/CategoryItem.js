import { Button } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 0%;
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1``;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button
          style={{
            width: "fit-content",
            fontSize: "16px",
            fontWeight: "600",
            marginTop: "10px",
          }}
          variant="outlined"
          size="small"
        >
          Shop now
        </Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
