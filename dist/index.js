"use strict";
const returnStr = (str) => {
    if (str) {
        return str[0].toUpperCase() + str.substr(1);
    }
};
console.log(returnStr("hello"));
const array1 = ["x", "y"];
const array2 = array1;
console.log(array1);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color["Green"] = "\uAE40\uBBFC\uC9C0";
    Color["Blue"] = "This is my data";
})(Color || (Color = {}));
const Green = Color.Green;
const Red = Color.Red;
const Blues = Color.Blue;
console.log({ Green, Red, Blues }, "enmum");
const email = document.querySelector(".email");
if (email) {
    email.addEventListener("change", e => {
        const target = e.currentTarget;
        console.log(target.value);
    });
}
