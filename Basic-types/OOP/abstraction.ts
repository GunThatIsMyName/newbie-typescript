{
    type coffeeForCustomer ={
        shot:number;
        stock:number
        hasMilks: boolean,
    }

    interface ICoffee {
        makeCofee(shot:number):coffeeForCustomer;
    }

    class CoffeeMachine implements ICoffee {
        static beanPerShot: number = 7; // static 을 선언하면 class 레벨 이 된다.
        shot: number =2;
        beanStock: number; // instance (object) level
        constructor(beanStock: number) {
          this.beanStock = beanStock;
        }

        static cloneMachine (beanStock:number):CoffeeMachine{
            return new CoffeeMachine(beanStock);
        }

        private checkBeans(number:number){
            eval("console").log(this.beanStock,"현재 커피콩");
            if (this.beanStock < CoffeeMachine.beanPerShot * number) {
                throw Error("No Coffee beans has lefts");
            }
            this.beanStock -= CoffeeMachine.beanPerShot * number;
            eval("console").log(this.beanStock,"남은 커피콩");
        }
        
        private running(){
            eval("console").log("커피 머신 작동");
        }
        
        private extract(){
            eval("console").log("커피 나옴");
            return {
                shot: this.shot,
                stock:this.beanStock,
                hasMilks: false,
              };
        }
    
        makeCofee(shot):coffeeForCustomer {
            this.checkBeans(shot);
            this.running();
            return this.extract();
        }
      }

      const ediya = new CoffeeMachine(120);
      ediya.makeCofee
      const hello =ediya.makeCofee(2);
      eval("console").log(hello);
}