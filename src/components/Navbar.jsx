import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';



const Container = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 999;
  border-bottom: 1px solid #000;
  box-shadow: -2px 2px 5px #333;
  ${mobile({height: "50px"})};
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "10px 0"})};
`;


//LEFT
const Left = styled.div`
flex: 1;
`;

const Logo = styled.span`
  font-size: 20px;
  font-weight: 400;
  color:  rgb(40, 122, 30);
  text-decoration: underline;

  ${mobile({fontSize: "18px", marginLeft: "5px"})};

`;



//RIGHT
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2})};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  padding: 0 5px;

  text-decoration: none;

  &:hover {
    color: khaki;
    text-shadow: -1px 1px 1px #000
  }
  ${mobile({fontSize: "12px",marginLeft: "5px"})};
`;

const Navbar = () => {
  const quantity = useSelector(state =>state.cart.quantity);
  return (
    <Container>
        <Wrapper>
          <Left>
            <Link to="/"><Logo>CE&SES</Logo></Link>
          </Left>

          <Right>
            <Link to="/about"><MenuItem>ABOUT</MenuItem></Link>
            <Link to="/contact"><MenuItem>CONTACT US</MenuItem></Link>
            <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} overlap="rectangular" color="primary">
                <ShoppingCartOutlined/>
              </Badge>
            </MenuItem>
            </Link>
            
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar