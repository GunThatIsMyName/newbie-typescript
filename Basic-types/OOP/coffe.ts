{
  const COFFEE_BEAN_PER_SHOT: number = 9;
  let coffeeBeansStock: number = 60;

  const makeCoffee = (shots: number) => {
    if (coffeeBeansStock < COFFEE_BEAN_PER_SHOT * shots) {
      throw Error("No Coffee beans has lefts");
    }
    coffeeBeansStock -= COFFEE_BEAN_PER_SHOT * shots;
    return {
      shots,
      hasMilk: false,
    };
  };

  const myNewCoffee = makeCoffee(3);
  eval("console").log(myNewCoffee);
  eval("console").log(coffeeBeansStock, "current coffees");

}
