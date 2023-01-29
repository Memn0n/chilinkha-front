import { Link } from "react-router-dom";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 200px;
    position: relative;
    ${mobile({height: "100px"})};
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    ${mobile({height: "150px"})};
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    font-weight: 400;
    color: #fff;
`;

const Button = styled.button` 
  width: 130px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border-width: 0.5px;
  border-color: transparent;
  box-shadow: -2px 2px 3px #333; 
  background-color:  rgb(40, 122, 30);
  color: #fff;
  transition: 0.3s ease;

  &:hover {
    background-color: #000;
    color: khaki;
  }
`;


const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem