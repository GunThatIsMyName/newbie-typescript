// 

interface IEmployee{
    pay():void;
}

class FullTimeEmployee implements IEmployee{
    pay(){
        eval("console").log("Full Time Worker!");
    }
    workFullTime(){

    }
}

class PartTimeEmployee implements IEmployee{
    pay(){
        eval("console").log("Part Time Worker!");
    }
    workPartTime(){

    }
}

// Generic 안한 Pay 방법.
function payBad(employee:IEmployee):IEmployee{
    employee.pay();
    return employee;
}

// Generic 구현
// IEmplyee interface 를 가지고 있는 타입들만 통과할수있다.
function pay<T extends IEmployee >(employee:T):T{
    employee.pay();
    return employee;
}

const minji = new FullTimeEmployee();
const gan = new PartTimeEmployee();

const minjiAfterPay = pay(minji);
const ganAfterPay = pay(gan);


eval("console").log(minjiAfterPay);
eval("console").log(ganAfterPay);


// 
// 

eval("console").log("-----");
eval("console").log("-----");
eval("console").log("-----");

const obj1 = {
    name:"minji",
    age:20
}
const obj2 = {
    lang:"ko",
    sec:"eng"
}

function getValue<T , K extends keyof T >(obj:T,key:K):T[K]{
    return obj[key];
}

const one  = getValue(obj1,"name");
const two  = getValue(obj1,"age");
const three  = getValue(obj2,"lang");
const four  = getValue(obj2,"sec");

eval("console").log(one);
eval("console").log(two);
eval("console").log(three);
eval("console").log(four);