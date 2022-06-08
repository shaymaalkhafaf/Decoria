import styled from "styled-components";
import { myProducts } from "../data";
import AllProductItem from './AllProductsItem';


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const AllProducts = () => {
  return (
    <Container>
      {myProducts.map((item) => (
        <AllProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default AllProducts;