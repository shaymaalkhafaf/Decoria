import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styled from "styled-components";
import { useCart } from 'react-use-cart';


const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b8870b3f;
    position: relative;
    &:hover {
      opacity: 1;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    // background-color: white;
    position: absolute;
  `;
const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;

export default function NewProItem({item}) {
  const { addItem }= useCart();
  return (
    <Card sx={{ maxWidth: 345 ,margin:'20px', display:'grid', justifyContent: 'center'}}>
      <CardActionArea>
      <Container>
        <Circle />
      <Image src={item.img} />
      </Container>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          ${item.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button size="small" color="primary" onClick={() => addItem({item}.item)}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
