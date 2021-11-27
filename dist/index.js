"use strict";
const profile = {
    name: "minji",
    age: 10
};
const a = {
    someProp: "somp props"
};
a.x = "minji";
a.t = 2;
const sum = (a, b) => {
    return a + b;
};
const hello = sum.prop1 = "miniㅇㅇㅇji";
const ho = (a, b) => {
    return a + (b || 0);
};
console.log(ho(2, 2));
const every = (numbers) => {
    return numbers.reduce((result, num) => result + num, 0);
};
const arr12 = [1, 2, 3, 4, 5];
console.log(every(arr12));
//   
// 
// 
class Robot {
    constructor(name, subname) {
        this.name = name;
        this.subname = subname;
    }
    aksName() {
        console.log(`my name is ${this.name}  || my subname is ${this.subname}  !`);
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters`);
    }
}
class FlyingRobot extends Robot {
    constructor(name, jetpackSize, subname) {
        super(name, subname);
        this.jetpackSize = jetpackSize;
    }
    move(distance) {
        console.log(`${this.name} is flying`);
        super.move(distance);
    }
}
const robot = new Robot("Minji", "mandy");
robot.aksName();
const fly = new FlyingRobot("cooper", 2, "민지");
console.log(fly);
fly.move(3);
