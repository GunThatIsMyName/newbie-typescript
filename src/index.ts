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
console.log(a,"@@@");

// 

interface Sumb{
    (a:number,b:number):number;
    prop1:string;
}

const sum:Sumb =(a,b)=>{
    return a+b;
}

const hello = sum.prop1="miniㅇㅇㅇji";

