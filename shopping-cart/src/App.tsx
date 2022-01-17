import { useState } from "react";
import { useQuery } from "react-query";
// material component
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";

// styles
import { StyledButton, Wrapper } from "./styles/App.styles";
import Item from "./component/Item";
import Cart from "./component/Cart";

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
  const [isSideBar, setSideBar] = useState(false);
  const [cartItem, setCartItem] = useState<ProductsProps[]>([]);

  const { data, isLoading, error } = useQuery<ProductsProps[]>(
    "products",
    getData
  );

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went Wrong</div>;

  const totalItem = (items: ProductsProps[]): number => {
    return items.reduce((total, curr) => {
      return total + curr.amount;
    }, 0);
  };

  const addToCart = (clickedItem: ProductsProps):void => {

    const sameItem = cartItem.find(item=>item.id === clickedItem.id);

    if(sameItem){
      const newList = cartItem.map(item=>{
        if(item.id === clickedItem.id){
          return {...item,amount:item.amount+1}
        }
        return item;
      })
      setCartItem(newList);
    }else{
      setCartItem(prev=>[...prev,{...clickedItem,amount:1}])
    }

    // setCartItem((prev) => {
    //   const isFirstItem = prev.find((item) => item.id === clickedItem.id);
    //   if (isFirstItem) {
    //     return prev.map((item) => {
    //       if (item.id === clickedItem.id) {
    //         return { ...item, amount: item.amount + 1 };
    //       }
    //       return item;
    //     });
    //   }
    //   return [...prev, { ...clickedItem, amount: 1 }];
    // });
    
  };

  const removeFromCart = (id:number):void => {
    const newList = cartItem.map(item=>{
      if(item.id === id){
        return {...item,amount:item.amount-1}
      }
      return item;
    }).filter(item=> item.amount !== 0);

    setCartItem(newList);
  };

  return (
    <Wrapper className="App">
      <Drawer anchor="right" open={isSideBar} onClose={() => setSideBar(false)}>
        <Cart
          cartItems={cartItem}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </Drawer>

      <StyledButton onClick={() => setSideBar(true)}>
        <Badge badgeContent={totalItem(cartItem)} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledButton>

      <Grid container spacing={3}>
        {data?.map((item) => {
          return (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} addToCart={addToCart} />
            </Grid>
          );
        })}
      </Grid>
    </Wrapper>
  );
}

export default App;
