// GENERIC 을 사용해서 값을 좀더 유연하게 받을수 있는데
// 심지어 타입도 보장 받을수 있다.

interface INike<L,R>{
    force:()=>L;
    jordan:()=>R;
}

class Choice<A,B> implements INike<A,B> {
    constructor(
        private forceType : A, private jordanType:B
    ){}
    force(){
        eval("console").log(this.forceType);
        return this.forceType;
    }
    jordan(){
        eval("console").log(this.jordanType);
        return this.jordanType;
    }
}

const yours:INike<string , number> = new Choice("air",1);

const mine = new Choice(99,"premium");
yours.force();
yours.jordan();
eval("console").log(yours)
eval("console").log(mine);

// const numStr:INike<number,string> = new Choice(1,"one");