import styled from "styled-components";
import Anouncements from "../components/Anouncements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
import { mobile } from "../Responsive";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  // ${mobile({ flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 80%;
  object-fit: cover;
  ${mobile({ width: "100%" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  width: 80%;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
  font-size: 18px;
  font-weight: 200;
`;
const Price = styled.span`
  font-weight: 200;
  font-size: 30px;
`;
const FilterContainer = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${mobile({ flexDirection: "column" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ marginBottom: "20px" })}
`;
const FilterTitle = styled.h5`
  margin-right: 10px;
  font-weight: 200;
  font-size: 20px;
`;
const FilterColor = styled.div`
  font-size: 18px;
  margin-right: 5px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const FilterSize = styled.select``;
const FilterSizeOption = styled.option``;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  width: 60%;
  ${mobile({ width: "100%", marginTop: "10px" })}
`;
const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AddContainer = styled.div``;
const Contain = styled.div`
  display: flex;
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Anouncements />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.pinimg.com/originals/65/e4/4c/65e44c191055166f7e9c8fa703edbc74.png" />
        </ImageContainer>
        <InfoContainer>
          <Title>Carrow Skirt</Title>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            officia cupiditate ipsa. Ad ratione, asperiores eius voluptates iure
            optio, possimus iste ex recusandae, exercitationem corrupti placeat.
            Corporis soluta amet autem.
          </Description>
          <Price>25 $</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
                <FilterSizeOption>XXXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AmountContainer>
            <Contain>
              <RemoveIcon style={{ cursor: "pointer", margin: "5px" }} />
              <Amount>0</Amount>
              <AddIcon style={{ cursor: "pointer", margin: "5px" }} />
            </Contain>

            <AddContainer>
              <Button
                style={{
                  width: "fit-content",
                  fontSize: "14px",
                }}
                variant="outlined"
                size="small"
              >
                Add To Cart
              </Button>
            </AddContainer>
          </AmountContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
