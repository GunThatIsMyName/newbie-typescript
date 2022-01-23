//  encapsulation 캡슐화 는 클래스를 만들때 외부에서 접근할수있는것 , 볼수있는것은 무엇인지.
// 내부에서만 가지고 있어야하는 데이터는 무엇인지 결정하는것 

// encapsulation, 캡슐화 를통해서  2.is-oop.ts 에서 사용한것을
// 정보은닉 캡슐화 해서 만들것임.

// 2.is-oop.ts 의 문제점은
// Beans_per_shot 을 내부에서 설정했지만 외부에서 값을 변경할수 있다는것이다.

// const maker = new CoffeeMaker(100);
// maker.coffeeBean=10;

// 정보 은닉 방법 (encapsulation)
// private
// public
// protected  클래스를 상속한 자식 클래스에서만 접근 가능하다.
// readonly

{
  type coffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    //   private 을 사용해서 외부에서 볼수도, 수정할수도 없다.
    private static Beans_per_shot = 7;
    private coffeeBean = 0;

    constructor(coffeeBean: number) {
      this.coffeeBean = coffeeBean;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // ------------------------------------------
    // ✅ 어떻게 private 의 정보를 변경 할수 있을까? ------------------
    // encapsulation 을 통해 private 으로 바뀐 변수들 상태를 바꾸는 방법

    // public 상태 인 fillCoffeeBeans 메소드를 사용해서
    // private 상태인 coffeeBean 의 상태를 바꿔보는것.
    fillCoffeeBeans(beans: number) {
      // 이곳에서 채워지려는 beans 의 값이 유요한지 체크 할수있다.
      if (beans < 0) {
        throw new Error("beans 는 0개 보다 많아야 해요!");
      }
      this.coffeeBean += beans;
    }

    makeCoffee(shots: number): coffeeCup {
      if (this.coffeeBean < CoffeeMaker.Beans_per_shot * shots) {
        throw new Error("Not enough Coffee!");
      }
      this.coffeeBean -= CoffeeMaker.Beans_per_shot * shots;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(200);
  //    maker.coffeeBean =100; 이렇게 상태를 바꾸는것 오류가 남!

  maker.fillCoffeeBeans(20); // 20개 콩 더 추가
  eval("console").log(maker); //CoffeeMaker { coffeeBean: 220 }


  
}
