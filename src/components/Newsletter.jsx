import styled from "styled-components"

const Container = styled.div`
    border: 1px solid #000;
    border-radius: 5px;
    width: 96%;
    margin: 20px auto 0 auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: green;
    box-shadow: -2px 2px 5px #333;
`;
const Desc = styled.p`
    margin-left: 20px;
    font-size: 20px;
    color: #fff;
    font-weight: 500;
`;
const Button = styled.button`
    margin-right: 20px;
    width: 150px;
    height: 35px;
    font-size: 16px;
    border-radius: 5px;
    border-width: 0.5px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #000;
      color: khaki;
    }
`;

const Newsletter = () => {
  return (
    <Container>
        
        <Desc>Reach Out...</Desc>
        <Button>
            Contact Us
        </Button>
        
    </Container>
  )
}

export default Newsletter