{
    interface Ipro{
        displayTime(time:number):string;
        faceTime():void;
        speedCharge():void;
    }

    interface Iair{
        displayTime(time:number):string;
    }

    class Apple implements Ipro,Iair{
        constructor(
            private currentTime:string,
            private battery:number,
        ){}

        static makeMacbook(currentTime:string,battery:number):Apple{
            return new Apple(currentTime,battery);
        }

        displayTime(time:number){
            eval("console").log("displayTime 현재시간 ");
            return `${time} 현재 시간 입니다.`
        }

        faceTime(){
            eval("console").log("페이스 타임@@ ");
        }

        speedCharge(){
            eval("console").log("충전 중 fast charging@");
        }
    }

    // Pro
    const macbookPro:Ipro= new Apple("Pro ",20);
    eval("console").log(macbookPro);
    macbookPro.displayTime(30)
    macbookPro.faceTime()
    macbookPro.speedCharge()


    eval("console").log(`                    `);
    eval("console").log(`                    `);
    eval("console").log(`🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥`);
    eval("console").log(`                    `);
    eval("console").log(`                    `);
    
    // Air
    const macbookAir:Iair= new Apple("Air",40);
    eval("console").log(macbookAir);
    macbookAir.displayTime(10);
}