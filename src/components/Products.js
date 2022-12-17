import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../Serverdata";
import { mobile } from "../Responsive";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  ${mobile({ margin: "10px 0px", padding: "0px 10px" })};
`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
