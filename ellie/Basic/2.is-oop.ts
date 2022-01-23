// 객체지향 프로그램밍
// class 만들기

// class 를 만든다는것은 서로 관련있는 데이터나
// 함수들을 한곳에 묶어놓는 기능을 한다.

// 1.no-oop.ts 를 바탕으로 예시를 들면.
// 커피의 gram , 커피콩 개수, 함수들 이 들어가면 된다.
{
  type coffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // ✅ 클래스 내부 멤버변수 -------------------------

    // Beans_per_shot 는 클래스 안에서 정해준 변수 즉, 변하지 않는값

    // ex ) 커피메이커를 통해서 이디아,스타벅스,커피자판기,투썸플레이스를 만들려고 한다.
    // beans_per_shot 은 정해진 고정값인데
    // instance 를 생성할때마다 정의하는것은 메모리 낭비일수 있다.
    // 이런경우 static 을 지정해주면 => class level 로 지정이된다.
    // static 을 붙이지 않은 경우 => instance (object) Level

    // class Level 이란것은 클래스와 연결이 되어있기때문에 오브젝트마다 만들어지거나 생성되지 않느다.

    static Beans_per_shot = 7; // class Level
    coffeeBean = 0; // instance (Object) Level

    // ✅ 클래스를 이용해서 오브젝트 instance 를 만들때 항상 호출되는 함수 -------------------------
    constructor(coffeeBean: number) {
      this.coffeeBean = coffeeBean;
    }

    // ✅  CoffeeMaker 를 만드는 함수 -------------------------
    // 마지막 줄
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // ✅ 클래스 안에서 멤버변수 접근하기 위해서는  -------------------------
    // this 키워드를 사용한다.
    makeCoffee(shots: number): coffeeCup {
      // this.Beans_per_shot 을 사용하지 않는이유
      // Beans_per_shot 는 class Level 이다.
      // CoffeeMaker 클래스 레벨을 사용해야한다.
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

  //   instace 만들기
  //   maker 에 커피콩 을 설정해주기
  const maker = new CoffeeMaker(100);
  const maker2 = new CoffeeMaker(50);

  //   maker obj 는 100개의 커피콩을 가지고 있다.
  //   maker2 obj 는 50개의 커피콩을 가지고 있다.

  //   static 을 사용해서 Beans_per_shot 은 생성되지 않음.
  eval("console").log(maker); // CoffeeMaker { Beans_per_shot: 7, coffeeBean: 100 }
  eval("console").log(maker2); //CoffeeMaker { coffeeBean: 50 }

  // class 는 관련된 속성과 함수들을 묶어서
  // 어떤 모양의 데이터가 될것이라는 것을 정의 하는것.

  // 오브젝트 마다 새로 만들어 져야하는 데이터가 있다면
  // ex ) 커피콩의 개수 .
  // 멤버변수 로 만들면 되고 class 레벨에서 이용할수 있는 변수는 static 을 이용할수 있다.

  //   ----------🔥🔥🔥🔥🔥----------
  // constructor 를 호출하지 않고 새로운 커피기계를 만드는 방법.

  const cloneMaker = CoffeeMaker.makeMachine(30);
  eval("console").log(cloneMaker); //CoffeeMaker { coffeeBean: 30 }
  // CoffeeMaker 에서 자신을 return 하는 함수 를 만듬.
  // static 을 이용해서
}
