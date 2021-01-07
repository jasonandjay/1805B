let a:number = 100;

// 基础类型： number, string, boolean, undefined, null, symbol, any
// 引用类型： Object, Array, Function, Enum, Turple

// let list:Array<number> = [1,2,3]
let list:number[] = [1,2,3]

let direction: [string, string, string, string] = ['top', 'left', 'right', 'bottom'];

enum CodeMsg {
    'enter' = 13,
    'delete' = 46,
    'space' = 32,
    'esc' = 27
} 

let key: CodeMsg = CodeMsg.enter;

// 联合类型 & 交叉类型
let b: number | string = 'hello world';

// 接口
interface Student{
    student_name: string,
    student_age: number,
    student_class: string
}

interface Area{
    readonly province_name: string,
    readonly city_name: string,
    family_name: string,
    [key:string]: string,
}

let studentB: Partial<Area> = {
    // province_name: '河北省',
    // city_name: '定州市',
    // family_name: '温馨2009',
    // floor: '20',
    // romm: '2003'   
}
// let studentA: Student & Area = {
//     student_name: '梁晗',
//     student_age: 20,
//     student_class: '实训一',
//     province_name: '河北省',
//     city_name: '定州市',
//     family_name: '温馨2009'   
// }

// studentA.province_name = '河南省';

// 函数
let funcA:(a:number, b:number)=>number = (a, b)=>{
    return a+b;
}

let funcB = (a:number, b:string)=>{
    return a+b;
}

// 泛型
let funcC: <T>(a: T, b: T)=>void = ()=>{

}
funcC(1,2)
funcC(()=>{}, ()=>{})


// 类型别名
let student_name:'lianghan' = 'lianghan';

type noop = ()=>{};
type lianghang = number | string;

// 类型推断
({} as Student).student_age