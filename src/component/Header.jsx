import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #daa520;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Header = () => {
  return <Container>Decoria Super Deal! Free Shipping on Orders Over $99</Container>;
};

export default Header;