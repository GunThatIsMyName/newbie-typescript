{

    interface ICode {
        isItCold():void;
    }

    class Ice implements ICode {
        constructor(
            cold:boolean,
            count:number,
        ){}

        isItCold():void{
            eval("console").log("THIS IS FUCKING COLD@");
        }
    }

    const ice = new Ice(true,2);
    eval("console").log(ice,"ice");

    class IceCream extends Ice{
        constructor(cold:boolean,count:number,flavor:string){
            super(cold,count)
        }
        isItCold():void{
            eval("console").log("THIS IS so strawberry");
        }
    }

    const guguCon = new IceCream(true,3,"straw berry");
    guguCon.isItCold();

}