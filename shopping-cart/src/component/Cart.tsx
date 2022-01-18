import React from "react";
import { ProductsProps } from "../App";
import { Wrapper } from "../styles/Cart.styles";
import CartItem from "./CartItem";

export type CartProps = {
  cartItems: ProductsProps[];
  addToCart: (items: ProductsProps) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<CartProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const calculateTotal = (items: ProductsProps[]): number => {
    return items.reduce((total, curr) => {
      return total + curr.amount * curr.price;
    }, 0);
  };

  return (
    <Wrapper>
      <h2>Shoping Cart!</h2>
      {cartItems.length < 1 ? (
        <p>No Items in Your Cart </p>
      ) : (
        cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              cartItems={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          );
        })
      )}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
