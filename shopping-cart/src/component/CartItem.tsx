import { Button } from "@material-ui/core";
import React from "react";
import { ProductsProps } from "../App";
import { Wrapper } from "../styles/CartItem.styles";

export type CartProps = {
  cartItems: ProductsProps;
  addToCart: (items: ProductsProps) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<CartProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  return (
    <Wrapper>
      <div>
        <h3>{cartItems.title}</h3>
        <div className="information">
          <p>price : ${cartItems.price}</p>
          <p>total : ${(cartItems.amount * cartItems.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(cartItems.id)}
          >
            −{" "}
          </Button>
          <p>{cartItems.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(cartItems)}
          >
            +{" "}
          </Button>
        </div>
      </div>
      <img src={cartItems.image} alt={cartItems.title} />
    </Wrapper>
  );
};

export default CartItem;
