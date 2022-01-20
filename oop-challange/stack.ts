{
    class myArr {
        constructor(
            private list:any[]
        ){}

        backAdd(item:any){
            return [...this.list,item];
        }

        frontRemove(){
            return this.list.slice(1);
        }
    }    

    const newArr = new myArr([1,2,3,4,5]);
    eval("console").log(newArr);

    
    const add = newArr.backAdd({hi:"hoho",mam:"hey"});
    eval("console").log(add);

    // 
    const remove = newArr.frontRemove();
    eval("console").log(remove);
}