{
  {
    type CoffeeCup = {
      shots: number;
      hasMilk?: boolean;
      hasSugar?: boolean;
    };

    interface CoffeeMaker {
      makeCoffee(shots: number): CoffeeCup;
    }
    class GetSugar {
        private getSugar(){
            eval("console").log("get sugar from ");
            return true;
        }
        makeCoffee(cup:CoffeeCup):CoffeeCup{
            eval("console").log(cup,"cup");
            const sugar = this.getSugar();
            return{
                ...cup,
                hasSugar:sugar
            }
        }
    }



    class CoffeeMachine implements CoffeeMaker {
      private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
      private coffeeBeans: number = 0; // instance (object) level

      constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
      }

      static makeMachine(coffeeBeans: number): CoffeeMachine {
        return new CoffeeMachine(coffeeBeans);
      }

      fillCoffeeBeans(beans: number) {
        if (beans < 0) {
          throw new Error("value for beans should be greater than 0");
        }
        this.coffeeBeans += beans;
      }

      clean() {
        eval("console").log("cleaning the machine...🧼");
      }

      private grindBeans(shots: number) {
        eval("console").log(`grinding beans for ${shots}`);
        if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
          throw new Error("Not enough coffee beans!");
        }
        this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      }

      private preheat(): void {
        eval("console").log("heating up... 🔥");
      }

      private extract(shots: number): CoffeeCup {
        eval("console").log(`Pulling ${shots} shots... ☕️`);
        return {
          shots,
          hasMilk: false,
        };
      }

      makeCoffee(shots: number): CoffeeCup {
        this.grindBeans(shots);
        this.preheat();
        return this.extract(shots);
      }
    }

    class CaffeLatteMachine extends CoffeeMachine {
      constructor(beans: number, public readonly serialNumber: string) {
        super(beans);
      }
      makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots);
        return {
          ...coffee,
          hasMilk: true,
        };
      }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(
            private beans:number,
            private addSuga : GetSugar,
        ){
            super(beans)
        }
      makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots);
        return this.addSuga.makeCoffee(coffee);
      }
    }

    const lattee = new SweetCoffeeMaker(200, new GetSugar);
    eval("console").log(lattee.makeCoffee(2),"@s")
  }
}
