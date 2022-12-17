import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anouncements from "../components/Anouncements";
import Footer from "../components/Footer";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../Responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin: 10px 0px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })};
`;
const TopText = styled.span`
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({ flexDirection: "column" })};
`;
const Info = styled.div`
  flex: 2;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%", flexDirection: "column" })};
`;
const ProductDetails = styled.div`
  display: flex;
  justify-contnent: space-between;
  flex: 2;
`;
const Image = styled.img`
  width: 200px;
  padding-right: 20px;
  ${mobile({ width: "40%" })};
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  ${mobile({ width: "15px", height: "15px" })};
`;
const ProductSize = styled.span``;
const PriceDetails = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mobile({ marginTop: "15px" })};
`;
const ProductAmountContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-weight: 600;
`;
const Amount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid teal;
  width: fit-content;
  height: fit-content;
  border-radius: 5px;
  font-size: 18px;
  padding: 0px 5px;
`;
const ProductPrice = styled.span`
  margin-top: 20px;
  font-weight: 200px;
  font-size: 22px;
  ${mobile({ margin: "15px 0px" })};
`;
const Hr = styled.hr`
  background-color: #eee;
  height: 1px;
  border: none;
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 300;
`;
const SummaryItem = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SummaryItemText = styled.span`
  font-weight: ${(props) => props.type === "total" && 600};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemPrice = styled.span`
  font-weight: ${(props) => props.type === "total" && 600};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Anouncements />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Button
            style={{
              width: "fit-content",
              fontSize: "12px",
              marginLeft: "20px",
            }}
            variant="outlined"
            size="small"
          >
            Continue Shopping
          </Button>
          <TopTexts>
            <TopText>
              <Link style={{ color: "inherit" }} to="...">
                Shopping Bag (2)
              </Link>
            </TopText>
            <TopText>
              <Link style={{ color: "inherit" }} to="...">
                Your Wishlist (0)
              </Link>
            </TopText>
          </TopTexts>
          <Button
            style={{
              width: "fit-content",
              fontSize: "12px",
              border: "none",
              backgroundColor: "teal",
              marginRight: "20px",
            }}
            variant="contained"
            size="small"
          >
            Add To Cart
          </Button>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://www.seekpng.com/png/full/12-124307_free-icons-png-puma-shoes-png-hd.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Snorky Shoes
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 129837
                  </ProductId>
                  <ProductColor color="yellow"></ProductColor>
                  <ProductSize>
                    <b>Size:</b> 42
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <AddIcon style={{ cursor: "pointer" }} />
                  <Amount>2</Amount>
                  <RemoveIcon style={{ cursor: "pointer" }} />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://www.pngall.com/wp-content/uploads/4/Skirt.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Fashion Skirt
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 129837
                  </ProductId>
                  <ProductColor color="blue"></ProductColor>
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <AddIcon style={{ cursor: "pointer" }} />
                  <Amount>1</Amount>
                  <RemoveIcon style={{ cursor: "pointer" }} />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>

            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type="total">Total</SummaryItemText>
              <SummaryItemPrice type="total">$ 50</SummaryItemPrice>
            </SummaryItem>
            <Button
              style={{
                width: "100%",
                fontSize: "12px",
                border: "none",
                backgroundColor: "teal",
                padding: "10px",
              }}
              variant="contained"
              size="small"
            >
              CHECK OUT NOW
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
