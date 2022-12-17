import styled from "styled-components";
import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { mobile } from "../Responsive";

const Navbar = () => {
  const Container = styled.div`
    height: 60px;
  `;
  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;
  const Language = styled.span`
    cursor: pointer;
    font-size: 16px;
    ${mobile({ fontSize: "12px" })};
  `;
  const SearchContainer = styled.div`
    display: flex;
    border: 1px solid #d8d8d8;
    margin-left: 25px;
    padding: 5px;
    align-items: center;
    ${mobile({ width: "60px", marginLeft: "10px", marginRight: "10px" })};
  `;
  const SearchInput = styled.input`
    border: none;
    outline: none;
    ${mobile({ width: "100%" })};
  `;
  const Center = styled.div`
    flex: 1;
    text-align: center;
  `;
  const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px", textAlign: "right" })};
  `;
  const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;
  const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
  `;
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <SearchInput />
            <Search style={{ color: "gray", fontSize: "15px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>D&B.</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link
              style={{ textDecoration: "inherit", color: "inherit" }}
              to="/register"
            >
              Register
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              style={{ textDecoration: "inherit", color: "inherit" }}
              to="/login"
            >
              Login
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              style={{ textDecoration: "inherit", color: "inherit" }}
              to="/cart"
            >
              <Badge badgeContent={10} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
