interface IProfile{
    readonly name:string
    age:number
}

const profile : IProfile = {
    name:"minji",
    age:10
}


// object value 
interface IA{
    someProp:string;
    [key:string]:number | string;
}

const a:IA ={
    someProp : "somp props"
};

a.x ="minji";
a.t =2;
// console.log(a,"@@@");

// 

interface Sumb{
    (a:number,b:number):number;
    prop1:string;
}

const sum:Sumb =(a,b)=>{
    return a+b;
}

const hello = sum.prop1="miniㅇㅇㅇji";

const ho = (a: number, b?: number): number => {
    return a + (b||0);
  };
  
  console.log(ho(2,2));


  const every =(numbers:number[]):number=>{
    return numbers.reduce((result,num)=>result+num,0)
  }
const arr12=[1,2,3,4,5];
  console.log(every(arr12))


//   
// 
// 

class Robot {
    name:string;
    subname:string;
    constructor(name:string,subname:string){
        this.name = name;
        this.subname=subname;
    }

    aksName(){
        console.log(`my name is ${this.name}  || my subname is ${this.subname}  !`);
    }

    move(distance:number){
        console.log(`${this.name} moved ${distance} meters`);
    }
}

class FlyingRobot extends Robot{
    jetpackSize:number;
    constructor(name:string,jetpackSize:number,subname:string){
        super(name,subname);
        this.jetpackSize=jetpackSize;
    }
    move(distance:number){
        console.log(`${this.name} is flying`);
        super.move(distance);
    }
}

const robot = new Robot("Minji","mandy");
robot.aksName();

const fly = new FlyingRobot("cooper",2,"민지");
console.log(fly);
fly.move(3);