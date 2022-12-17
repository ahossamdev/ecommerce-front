import { categories } from "../Serverdata";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  ${mobile({ width: "100%", flexDirection: "column" , padding: "0px" })};
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
