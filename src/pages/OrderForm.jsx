import { useSelector } from "react-redux";
import styled from "styled-components"
import { mobile, mobile2, tab } from "../responsive";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { createOrder } from '../redux/actions/orderActions';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255, 0.1), rgba(255,255,255, 0.1)),
    url("https://i.ibb.co/wBdhhzs/ux.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
   
`;

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: #fff;
${tab({width: "70%"})};
${mobile({width: "80%"})};
`;

const Logo = styled.span`
  font-size: 20px;
  font-weight: 400;
  color:  rgb(40, 122, 30);
  text-decoration: underline;

`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:10px 10px 0 0;
    height: 30px;
    font-size: 16px;
    ${mobile2({minWidth: "80%"})};
`;

const Product = styled.div`
width: 100%;
`;

const Textarea = styled.textarea`
min-width: 96%;
margin:10px 10px 0 0;
height: 28px;
font-size: 16px;
${mobile2({minWidth: "80%"})};
`;

const Textarea1 = styled.textarea`
min-width: 96%;
margin:10px 10px 0 0;
height: 28px;
font-size: 16px;
${mobile2({minWidth: "80%"})};
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 10px 0;
`;

const Button = styled.button`
  width: 130px;
  padding: 10px;
  top: 55%;
  margin: auto;
  left: 0;
  right: 0;
  margin: auto; 
  cursor: pointer;
  border-radius: 5px;
  border-width: 0.5px;
  border-color: transparent;
  box-shadow: -2px 2px 1px #333; 
  background-color:  rgb(40, 122, 30);
  color: #fff;
  transition: 0.3s ease;

  &:hover {
    background-color: #000;
    color: khaki;
  }
`;


function OrderForm(props) {
  const cart = useSelector(state => state.cart);
  const [formData, setFormData] = useState({
    username: '',
    userEmail: '',
    userNumber: '',
    address: '',
    products: [...cart.products],
    amount: cart.total,
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const validate = () => {
    let newErrors = {};
    if (!formData.username) {
      newErrors.username = "Name is required";
    }
    if (!formData.userEmail) {
      newErrors.userEmail = "Email is required";
    }
    if (!formData.userNumber) {
      newErrors.userNumber = "Phone is required";
    }
    if (!formData.address) {
      newErrors.address = "Address is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validate form data
    validate();
    if(Object.keys(errors).length > 0) return;
     // Set the products and amount in the form data
    setFormData({
      ...formData, 
      products: cart.products.map(product => product),
    });
    dispatch(createOrder(formData));
        window.alert("Thank you for placing an order, Please wait for confirmation.");
         history.push('/');
         window.location.reload();
 
};

  return (
    <Container>
        <Wrapper>
            <Logo>CE&SES</Logo>
            <Title>CHECKOUT</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="name" type="text" name="username" value={formData.username} onChange={handleChange} required/>
                <Input placeholder="email" type="email" name="userEmail" value={formData.userEmail} onChange={handleChange} required />
                <Input placeholder="contact no:" type="tel" name="userNumber" value={formData.userNumber} onChange={handleChange} required/>
                <Input placeholder="address" type="text" name="address" value={formData.address} onChange={handleChange} required/>
                {cart.products.map(product =>(
                <Product key={product.title}>
                  <Textarea  name="productName" value={product.title} disabled />
                </Product>
                ))}
                <Textarea1 name="amount" value={cart.total} disabled>R {cart.total}</Textarea1>
                <Agreement>
                    By creating an account, I agree to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b> 
                </Agreement>
                <Button onClick={handleSubmit} type="submit">Submit Order</Button>
            </Form>
        </Wrapper>
    </Container>
 );
}

export default OrderForm;