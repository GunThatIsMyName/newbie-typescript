import { useState } from "react";
import { useQuery } from "react-query";
// material component
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";

// styles
import { Wrapper } from "./styles/App.styles";
import Item from "./component/Item";

// Type

export type ProductsProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;
};

const getData = async (): Promise<ProductsProps[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

function App() {
  const { data, isLoading, error } = useQuery<ProductsProps[]>(
    "products",
    getData
  );

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went Wrong</div>;

  const totalItem = (): null => null;
  const addToCart = () => null;
  const removeFromCart = (): null => null;

  return (
    <Wrapper className="App">
      <Grid container spacing={3}>
        {data?.map((item) => {
          return (
            <Grid item key={item.id} xs={12} sm={4} >
              <Item item={item} addToCart={addToCart} />
            </Grid>
          );
        })}
      </Grid>
    </Wrapper>
  );
}

export default App;
