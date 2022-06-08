import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  object-fit: cover;
  border-radius: 50%;


`;

const Info = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Title = styled.h1`
  color: white;
  background-color: #b8870bb7;
  margin-bottom: 15px;
  font-size: 30px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: #b8860b;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
    
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <a href="/products">
                  <Button>SHOP NOW</Button>
                </a>
      </Info>
      
    </Container>
  );
};

export default CategoryItem;
