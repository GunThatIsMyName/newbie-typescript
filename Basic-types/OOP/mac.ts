// {
//     interface IDevice {
//         model:string;
//         type:string;
//     }

//     interface IMakeDevice{
//         makeDevice(device:IDevice):IDevice;
//     }

//     interface IMakeModel { 
//         modelChange:(device:IDevice):IDevice;

//     }
//     interface IMakeType { 
//         typeChange:(device:IDevice):IDevice;
//     }

//     class Macbook implements IMakeModel{
//         modelChange(device:IDevice):IDevice{
//             return {...device,model:"macbook"}
//         }
//     }
//     class Iphone implements IMakeModel{
//         modelChange(device:IDevice):IDevice{
//             return {...device,model:"iphone"}
//         }
//     }
//     class MakeItPro implements IMakeType{
//         typeChange(device:IDevice):IDevice{
//             return {...device,type:"Pro"}
//         }
//     }
//     class MakeItAir implements IMakeType {
//         typeChange(device:IDevice):IDevice{
//             return {...device,type:"Air"}
//         }
//     }


//     class Apple implements IMakeDevice {
//         constructor(
//            public model:IMakeModel,
//            public type:IMakeType,
//         ){}

//         makeDevice(device):IMakeDevice{
//             return {
//                 model:device.model,
//                 type
//             }
//         }
//     }

//     // const macbook = new Apple("macbook","pro","m1",999);
//     // eval("console").log(macbook.makeDevide())
// }


{


    
}