import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import styled from "styled-components"

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.h1`
  margin-top: -20px;
  font-weight: 200;
  text-shadow: -2px 2px 3px #000;
`;
const P = styled.p`
  margin-top: -20px;
`;
const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Title>
        <H1>PRODUCTS</H1>
        <P>energize your life 24/7</P>
      </Title>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Homepage