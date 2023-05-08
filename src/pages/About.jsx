import styled from "styled-components"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div`
`;
const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 350;
  color: teal;
  text-shadow: -2px 3px 3px #000;
`;
const Text = styled.div`
  width: 60%;
  border-radius: 5px;
  text-shadow: -2px 2px 3px #000;
  margin: 30px auto 0 auto;


  ${mobile({width: "90%"})};
`;
const P = styled.p`
  
  font-size: 20px;
  color: #fff;

  background-color: #000;
  z-index: 999;

`;

const About = () => {
  return (
    <Container>
      <Navbar/>
      <Title>#aboutUS</Title>
      <Text>
        <P>Chilinkha Energy & Solar Equiment Systems is an electronics trading company
        that also does installation and maintainance upon requests on all our products.</P> 

        <P>We believe Renewable Energy is the future of this planet when considering conservation, and Ce&ses
        aims to be the bridge that'll help the masses to switch to the better power alternative.</P>
        
        <P>Our goal is
        to eventually become a Renewable Energy provider, we aim to reduce the reliance of carbon and coal usage
        for power when we have the power of the sun.</P>
        </Text>
        <Footer/>
    </Container>
  )
}

export default About