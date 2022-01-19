// {
    
//     class User {
//         get fullName():string{
//             return `${this.firstName} ${this.lastName} 바뀐거야` 
//         }
//         set fullName(name:string){
//             if(!name){
//                 throw Error("이름 값이 없어요~")
//             }
//             this.firstName = name;
//         }
//         constructor(private firstName:string, private lastName:string){}
//     }

//     const gan = new User("gan","Lee");
//     eval("console").log(gan,gan.fullName);
//     gan.fullName = "minji";
//     eval("console").log(gan,gan.fullName);


    
// }

{
    class MyHome {
        get changeAddress():string{
            return `주소 : ${this.현주소}  웧세 : ${this.월세} 집주인 : ${this.집주인}`
        }

        set changeAddress(address:string){
            this.현주소=address;
        }
        
        constructor(
            private 현주소 :string,
            private 월세:number,
            private 집주인:string,
        ){}

        이사감(새집:string,월세:number,집주인:string){
            this.현주소=새집;
            this.월세=월세;
            this.집주인=집주인;
        }
        현재집주소(){
            return `주소 : ${this.현주소}  웧세 : ${this.월세} 집주인 : ${this.집주인}`
        }
    } 

    const 내집 = new MyHome("운서",40,"백운동");
    eval("console").log(내집);
    내집.changeAddress = "대정이오스";
    eval("console").log(내집);
    eval("console").log(내집.현재집주소());
}