// {
//     class myArr {
//         constructor(
//             private list:any[]
//         ){}

//         backAdd(item:any){
//             return [...this.list,item];
//         }

//         frontRemove(){
//             return this.list.slice(1);
//         }
//     }    

//     const newArr = new myArr([1,2,3,4,5]);
//     eval("console").log(newArr);

    
//     const add = newArr.backAdd({hi:"hoho",mam:"hey"});
//     eval("console").log(add);

//     // 
//     const remove = newArr.frontRemove();
//     eval("console").log(remove);
// }

// {
//     interface Istack{
//         readonly size:number;
//         pop:() => string;
//         push:(value:string) => void;
//     }

//     type stackNode = {
//         readonly value : string;
//         readonly next? : stackNode
//     }

//     class StackImpl implements Istack{
//         private _size:number = 0;
//         private head?:stackNode;
//         get size(){
//             return this._size
//         }

//         push(value:string){
//             const node : stackNode = {value,next: this.head}
//             this.head=node;
//             this._size++;
//         }
//         pop () {
//             if(this.head == null){ // null == undefined ##
//                 throw new Error("Empty stack!")
//             }
//             const node = this.head;
//             this.head = node.next;
//             this._size --;
//             return node.value;
//         };
//     }

//      const stack = new StackImpl();
//      eval("console").log(stack,"stack")

//      stack.push("one");
//      stack.push("two");
//      stack.push("three");
//      stack.push("four");
     
//      eval("console").log(stack);
//      stack.pop();
//      eval("console").log(stack);
     
// }

{
    interface IStack {
      readonly size: number;
      push: (value: string) => void;
      pop: () => string;
    }
  
    type StackNode = {
      readonly value: string;
      readonly next?: StackNode;
    };
  
    class StackIml implements IStack {
      private _size: number = 0;
      private head?: StackNode;
  
      get size() {
        return this._size;
      }
      push(value: string) {
        const node: StackNode = {value, next: this.head};
        this.head = node;
        this._size++;
      }
      pop() {
        if (this.head == null) {
          // null == undefined ##
          throw new Error('Empty stack!');
        }
        const node = this.head;
        this.head = node.next;
    this._size--;
        return node.value;
      }
    }
    const stack = new StackIml();
    eval('console').log(stack);
    stack.push('minji');
    stack.push('gan');
    stack.push('gan');
    eval('console').log(stack);
    stack.pop();
    eval('console').log(stack);
  }