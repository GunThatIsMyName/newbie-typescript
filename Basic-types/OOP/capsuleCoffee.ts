{
    // Encapsulation ๐ฅ
    // ๊ฐ์ฒด์งํฅ 4๊ฐ์ง ์ค 1 ์บก์ํ
    // private
    // readOnly
    // public
    // protected
  
    // beanPerShot,beanStock ์ ์ธ๋ถ์์ ๋ฐ๊พธ์ง ๋ชปํ๊ฒ ํ๋๋ฐฉ๋ฒ private ์ ์ฌ์ฉํด์ ์ธ๋ถ์์ ์ ๊ทผํ์ง ๋ชปํ๊ฒ ํ๋ค.
    // beanStock ์ ์ํ๋ฅผ ๋ฐ๊พธ๊ธฐ ์ํด์๋ ์ํ ๋ฐ๊พธ๋ method ๋ฅผ ๋ง๋ค์ด์ผํ๋ค 
  
    class CoffeeMachine {
      private static beanPerShot: number = 7; // static ์ ์ ์ธํ๋ฉด class ๋ ๋ฒจ ์ด ๋๋ค.
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
          throw Error("์ปคํผ์ฝฉ์ 0๋ณด๋ค ์ปค์ผ ํฉ๋๋ค.");
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
  