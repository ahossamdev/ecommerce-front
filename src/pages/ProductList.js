import styled from "styled-components";
import Anouncements from "../components/Anouncements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../Responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
const Select = styled.select`
  padding: 10px;
  margin: 0px 10px;
  ${mobile({ width: "100%", margin: "10px 0px" })}
`;
const Option = styled.option`
  padding: 20px;
`;
const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Anouncements />
      <Title>Dresss</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Black</Option>
            <Option>White</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
            <Option>XXXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
