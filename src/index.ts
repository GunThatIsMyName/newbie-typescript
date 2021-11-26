const returnStr=(str:string|null)=>{
    if(str){
        return str[0].toUpperCase()+str.substr(1);
    }
}

console.log(returnStr("hello"))

const array1:string[]=["x","y"];
const array2:Array<string>=array1;
console.log(array1); 
// enum
enum Color{
    Red,
    Green = "김민지",
    Blue = "This is my data"
}

const Green :Color =Color.Green;
const Red :Color =Color.Red;
const Blues :Color =Color.Blue;
console.log({Green,Red,Blues},"enmum");

const email = document.querySelector(".email");

if(email){
    email.addEventListener("change",e=>{
        const target = e.currentTarget as HTMLInputElement;
        console.log(target.value);
    })
}