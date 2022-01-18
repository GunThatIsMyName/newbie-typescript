{
    class CoffeeMachine {
        static beanPerShot: number = 7; // static 을 선언하면 class 레벨 이 된다.
        shot: number =2;
        beanStock: number; // instance (object) level
        constructor(beanStock: number) {
          this.beanStock = beanStock;
        }

        static cloneMachine (beanStock:number):CoffeeMachine{
            return new CoffeeMachine(beanStock);
        }
    
        makeCofee() {
          if (this.beanStock < CoffeeMachine.beanPerShot * this.shot) {
            throw Error("No Coffee beans has lefts");
          }
          this.beanStock -= CoffeeMachine.beanPerShot * this.shot;
          return {
            shot: this.shot,
            stock:this.beanStock,
            hasMilks: false,
          };
        }
      }

      const starbucks = new CoffeeMachine(77);
      eval("console").log(starbucks, "1");
      starbucks.makeCofee();
      starbucks.makeCofee();
      starbucks.makeCofee();
      starbucks.makeCofee();
      starbucks.makeCofee();
      eval("console").log(starbucks, "2");

      const ediya = CoffeeMachine.cloneMachine(100);
      eval("console").log(ediya, "ediya");
}