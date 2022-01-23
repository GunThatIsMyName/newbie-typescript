// 필요한 상수, 데이터, 함수 가 밖에 있다.
// 이런것들을 개선 하기위해서 2.is-oop.ts

// 절차지향 프로그래밍 


{
  type coffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 변수들 ✅
  // 커피 한잔의 들어가는 gram
  const Beans_per_shot = 7;
  // 현재 커피콩 개수
  let coffeeBean = 0;

  function makeCoffee(shots: number): coffeeCup {
    if (coffeeBean < Beans_per_shot * shots) {
      throw new Error("Not enough Coffee!");
    }
    coffeeBean -= Beans_per_shot * shots;
    return {
      shots,
      hasMilk: false,
    };
  }

  // 커피콩 추가
  coffeeBean = 100;

  const coffeeForYou = makeCoffee(2);
  eval("console").log(coffeeForYou);
  eval("console").log(coffeeBean);
}
