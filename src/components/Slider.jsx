import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 80%;
  background-size: cover;
  ${mobile({height: "70%"})};
`;

const Head = styled.h1`
  position: absolute;
  color: khaki;
  text-align: center;
  text-shadow: -2px 2px 2px #000;
  top: 30%;
  margin: auto;
  left: 0;
  right: 0;
  margin: auto; 
  ${mobile({fontSize: "24px"})};

`;



const Slider = () => {
  return (
    <Container>
            <Image src="https://i.ibb.co/PFphsbt/front.jpg"/>
            <Head>CHILINKHA <br/> ENERGY & SOLAR EQUIPMENT SYSTEMS</Head>
    </Container>
  )
}

export default Slider