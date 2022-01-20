{
    {
        type CoffeeCup = {
          shots: number;
          hasMilk?: boolean;
          hasSugar?:boolean;
        };
      
        interface CoffeeMaker {
          makeCoffee(shots: number): CoffeeCup;
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
              throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
          }
      
          clean() {
            eval("console").log('cleaning the machine...🧼');
          }
      
          private grindBeans(shots: number) {
            eval("console").log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
              throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
          }
      
          private preheat(): void {
            eval("console").log('heating up... 🔥');
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
          private steamMilk(): void {
            eval("console").log('Steaming some milk... 🥛');
          }
          makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
              ...coffee,
              hasMilk: true,
            };
          }
        }

        class SweetCoffee extends CoffeeMachine{
            makeCoffee(shots: number):CoffeeCup {
                const coffee = super.makeCoffee(shots);
                return{
                    ...coffee,
                    hasSugar:true,
                }
            }
        }

        const list:CoffeeMaker[] = [
            new CoffeeMachine(100),
            new CaffeLatteMachine(110,"AAA"),
            new SweetCoffee(100),
        ]

        list.forEach(item=>{
            eval("console").log("---------------------1");
            eval("console").log(item,"1");
            eval("console").log(item.makeCoffee(2),"@@");
        })
      }
      
}