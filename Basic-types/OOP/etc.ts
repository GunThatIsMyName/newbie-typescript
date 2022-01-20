{

    interface ICode {
        isItCold():void;
    }

    class Ice implements ICode {
        protected constructor(
            private cold:boolean,
            private count:number,
        ){}

        static makeIce (cold:boolean,cube:number){
            return new Ice(cold,cube);
        }

        isItCold():void{
            eval("console").log("THIS IS FUCKING COLD@");
        }
    }

    const ice = Ice.makeIce(true,2);
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