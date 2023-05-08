import { FavoriteBorderOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components"
import { addProduct } from "../redux/cartRedux";
import { useDispatch, } from "react-redux";




const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 420px;
    display: flex;

    justify-content: center;
    border-radius: 10px;
    position: relative;
    border: 1px solid #000; 
    box-shadow: -2px 2px 5px #333;
`;



const Image = styled.img`
    height: 294px;
    width: 250px;
    border-radius: 10px;
    z-index: 2;
    margin-top: 20px;
`;
const Action = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0 0.2);
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end;
    border-radius: 10px;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
      }
`;

const Info = styled.div`
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 0;
      left: 0;
      margin-left: 35px;
      justify-content: center;
`;

const Price = styled.h1`
      font-size: 17px;
      text-decoration: underline;
`;
const Pname = styled.h1`
   
    font-size: 17px;
    text-decoration: underline;
`;



const Product = ({ item }) => {

    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(addProduct({...item})); 
    };

  return (
    <Container>
       
        <Image src={item.img}/>
        <Action>
           
            <Icon onClick={handleClick}>
            
                <ShoppingCartOutlined/>
            
            </Icon>
           
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Action>
        <Info>
            <Price>R{item.price}</Price>
            <Pname>{item.title}</Pname>
        </Info>
        
    </Container>
  )
}

export default Product