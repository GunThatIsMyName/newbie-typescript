import React from "react";
import { Wrapper } from "../styles/Item.steyls";

// Material
import Button from "@material-ui/core/Button";

// Type
import { ProductsProps } from "../App";
type ItemProps = {
  item: ProductsProps;
  addToCart: (clickedItem: ProductsProps) => void;
};

const Item: React.FC<ItemProps> = ({ item, addToCart }) => {
  return (
    <Wrapper>
      <img width="300" height="300" src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => addToCart(item)}>Add To Cart</Button>
    </Wrapper>
  );
};

export default Item;
