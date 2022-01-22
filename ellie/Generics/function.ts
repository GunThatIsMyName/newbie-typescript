{
    //  Null 아니면 리턴 하는 함수

    // number value 만 리턴 하는 
    function checkNotNull(value:number | null):number{
        if(value == null){
            throw new Error("ERROR, THIS IS NULL");
        }
        return value;
    }


    // number 를 리턴한다고 정해줘서 string 타입이 들어가면 에러가 난다.
    const correct = checkNotNull(123);
    eval("console").log(correct);
    // 
    // const wrong = checkNotNull("one");

    function checkNotNullWithAny(value:any | null):any{
        if(value == null){
            throw new Error("ERROR, THIS IS NULL");
        }
        return value;
    }

    const anyOne = checkNotNullWithAny(123);
    const anyTwo = checkNotNullWithAny("안녕");
    const anyThree = checkNotNullWithAny({even:"이것도 됨"});

    eval("console").log(anyOne);
    eval("console").log(anyTwo);
    eval("console").log(anyThree);
    
    // any 를 사용하면 안쓰니만 못하다.

    // Generic 의 등장
    // GENERIC 이라고 선언 해놓은곳을 
    // 함수 선언될때 들어간 인자에 따라서 타입을 정의해 넣어준다.
    // 유용할것같다.
    function checkNotNullWithGeneric<GENERIC>(value:GENERIC | null):GENERIC{
        if(value == null){
            throw new Error("ERROR, THIS IS NULL");
        }
        return value;
    }

    const genericOne:number = checkNotNullWithGeneric(1);
    const genericTwo:string = checkNotNullWithGeneric("원 투");
    const genericthree:object = checkNotNullWithGeneric({one:"원",two:"투"});

    eval("console").log(genericOne);
    eval("console").log(genericTwo);
    eval("console").log(genericthree);
}