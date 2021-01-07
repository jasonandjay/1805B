"use strict";
var a = 100;
// 基础类型： number, string, boolean, undefined, null, symbol, any
// 引用类型： Object, Array, Function, Enum, Turple
// let list:Array<number> = [1,2,3]
var list = [1, 2, 3];
var direction = ['top', 'left', 'right', 'bottom'];
var CodeMsg;
(function (CodeMsg) {
    CodeMsg[CodeMsg["enter"] = 13] = "enter";
    CodeMsg[CodeMsg["delete"] = 46] = "delete";
    CodeMsg[CodeMsg["space"] = 32] = "space";
    CodeMsg[CodeMsg["esc"] = 27] = "esc";
})(CodeMsg || (CodeMsg = {}));
var key = CodeMsg.enter;
// 联合类型 & 交叉类型
var b = 'hello world';
var studentB = {
// province_name: '河北省',
// city_name: '定州市',
// family_name: '温馨2009',
// floor: '20',
// romm: '2003'   
};
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
var funcA = function (a, b) {
    return a + b;
};
var funcB = function (a, b) {
    return a + b;
};
// 泛型
var funcC = function () {
};
funcC(1, 2);
funcC(function () { }, function () { });
// 类型别名
var student_name = 'lianghan';
// 类型推断
({}.student_age);
