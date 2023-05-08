import styled from "styled-components"
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
    margin: 20px 26px 0;
    background-color: khaki;
    color: #333;
    border-radius: 10px;
    box-shadow: -2px 2px 5px #000;
    ${mobile({margin: "20px auto", width: "96%"})};
`;

const Firstpart = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`;

const Left = styled.div`
   
`;
const Coh1 = styled.h1`
    font-size: 24px;
    ${mobile({fontSize: "20px"})};
    
`;
const Cop = styled.div`
    width: 100%;  
`;
const Base = styled.p`
    font-size: 20px;
    ${mobile({fontSize: "12px"})};
`;
const Phone = styled.p`
    font-size: 20px;
    ${mobile({fontSize: "12px"})};
`;
const Hours = styled.p`
    font-size: 20px;
    ${mobile({fontSize: "12px"})};
`;

const Right = styled.div`
   
`;
const Abh1 = styled.h1`
    font-size: 24px;
    ${mobile({fontSize: "20px"})};
`;
const Abp = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`;
const Links = styled.p`
    text-decoration: none;
    font-size: 20px;
    margin: 10px 0;
    color: #333;
    cursor: pointer;
    text-decoration: underline;

    ${mobile({margin: "6px 0", fontSize: "12px"})};
    `;


const Lasttext = styled.p`
    text-align: center;
`;

const Footer = () => {
  return (
    <Container>
        <Firstpart>
        <Left>
            <Coh1>Contact</Coh1>
            <Cop>
                <Base>BASE: Johannesburg</Base>
                <Phone>PHONE: +27 83 686 7680</Phone>
                <Hours>HOURS: 09:00-19:00, Mon-Sat</Hours>
            </Cop>
        </Left>
        
        <Right>
            <Abh1>About</Abh1>
            <Abp>
                <Link to="/about"><Links>About Us</Links></Link>
                <Link to="/contact"><Links>Contact Us</Links></Link>
            </Abp>
        </Right>
        </Firstpart>
       

        <Lasttext>
            All Rights Reserved
        </Lasttext>
    </Container>
    
  )
}

export default Footer