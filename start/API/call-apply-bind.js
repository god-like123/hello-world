/**
 *
 * call - apply - bind
 */

// const name = 'jake',age=18;
// var obj = {
//     name:'rose',
//     objAge:this.age,
//     myFun:function(){
//         console.log(this.name + '年龄' + this.age);
//    }
// };

//  obj.objAge    18
//  obj.myFun()   rose年龄 undefined

/**
 * bind返回的是一个新函数
 */


function fn() {
    var a = 1;
    b = 2;
    var c = 3;
    var test = function (first, second, third) {
        return first === a && second === b && third === c;
    };
    return callIt(test, a, b, c);
}
