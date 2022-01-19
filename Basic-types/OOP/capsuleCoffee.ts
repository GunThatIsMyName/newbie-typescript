{
    // Encapsulation 🔥
    // 객체지향 4가지 중 1 캡슐화
    // private
    // readOnly
    // public
    // protected
  
    // beanPerShot,beanStock 을 외부에서 바꾸지 못하게 하는방법 private 을 사용해서 외부에서 접근하지 못하게 한다.
    // beanStock 의 상태를 바꾸기 위해서는 상태 바꾸는 method 를 만들어야한다 
  
    class CoffeeMachine {
      private static beanPerShot: number = 7; // static 을 선언하면 class 레벨 이 된다.
      private beanStock: number; // instance (object) level
      shot: number = 2;
      constructor(beanStock: number) {
        this.beanStock = beanStock;
      }
  
      static cloneMachine(beanStock: number): CoffeeMachine {
        return new CoffeeMachine(beanStock);
      }
  
      fillCoffeeBeanStock(beans:number){
        if(beans < 0 ){
          throw Error("커피콩은 0보다 커야 합니다.");
        }
        this.beanStock += beans;
      }
  
      makeCofee() {
        if (this.beanStock < CoffeeMachine.beanPerShot * this.shot) {
          throw Error("No Coffee beans has lefts");
        }
        this.beanStock -= CoffeeMachine.beanPerShot * this.shot;
        return {
          shot: this.shot,
          stock: this.beanStock,
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
    starbucks.fillCoffeeBeanStock(100);
    eval("console").log(starbucks, "2");
  }
  