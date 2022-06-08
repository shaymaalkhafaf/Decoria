import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: #daa520;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 500;
  font-family: cursive;
  padding: 35px;

`;

const Collection = () => {
  return <Container>Shop our Decoria Collections</Container>;
};

export default Collection;