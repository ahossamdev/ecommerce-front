import style from "styled-components";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import sliderPic1 from "../images/sliderpic1.png";
import sliderPic2 from "../images/Winter Dress Fashion Style Girl Corporate Women Lady PNG.png";
import sliderPic3 from "../images/third.png";
import { Button } from "@mui/material";
import { useState } from "react";
import { mobile } from "../Responsive";
const Container = style.div`
width: 100% ;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
${mobile({ display: "none" })};

`;
const Arrow = style.div`
width: 50px ;
height:50px;
background-color:#fff7f7;
border-radius:50%;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center; 
position:absolute;
top:0;
bottom:0;
left:${(props) => props.direction === "left" && "10px"} ;
right: ${(props) => props.direction === "right" && "10px"};
margin:auto;
opacity:0.75;
z-index:999;
`;
const Wrapper = style.div`
display: flex;
transition: all 0.9s ease-in-out;
transform: translate(${(props) => props.slideIndex * -100}vw);`;

const Slide = style.div`
display: flex;
width: 100vw;
heigh: 100vh
align-items: center;
background-color: #${(props) => props.bg}`;

const ImgContainer = style.div`
height: 100%;
flex: 1;
display:flex;
justify-content:center;
align-items:center;`;
const Image = style.img`
height:80%;
 `;
const ImgInfo = style.div`
flex:1;
padding:50px;
display:flex;
flex-direction:column;
justify-content:center;
`;
const Title = style.h1`
font-size:70px;`;

const Description = style.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      slideIndex > 0 ? setSlideIndex(slideIndex - 1) : setSlideIndex(2);
    } else {
      slideIndex < 2 ? setSlideIndex(slideIndex + 1) : setSlideIndex(0);
    }
  };

  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => {
          handleClick("left");
        }}
      >
        <ArrowLeftRoundedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slide bg="f1f0f4">
          <ImgContainer>
            <Image src={sliderPic1} />
          </ImgContainer>
          <ImgInfo>
            <Title>Summer Sale,</Title>
            <Description>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFFER FOR NEW ARRIVAL
            </Description>
            <Button
              style={{ width: "10vw", fontSize: "18px" }}
              variant="outlined"
              size="small"
            >
              Shop now
            </Button>
          </ImgInfo>
        </Slide>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src={sliderPic2} />
          </ImgContainer>
          <ImgInfo>
            <Title>Winter Sale,</Title>
            <Description>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFFER FOR NEW ARRIVAL
            </Description>
            <Button
              style={{ width: "10vw", fontSize: "18px" }}
              variant="outlined"
              size="small"
            >
              Shop now
            </Button>
          </ImgInfo>
        </Slide>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image src={sliderPic3} />
          </ImgContainer>
          <ImgInfo>
            <Title>Almost Sale,</Title>
            <Description>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFFER FOR NEW ARRIVAL
            </Description>
            <Button
              style={{ width: "10vw", fontSize: "18px" }}
              variant="outlined"
              size="small"
            >
              Shop now
            </Button>
          </ImgInfo>
        </Slide>
      </Wrapper>
      <Arrow
        direction="right"
        onClick={() => {
          handleClick("right");
        }}
      >
        <ArrowRightRoundedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
