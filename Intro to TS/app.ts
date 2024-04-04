// // String
// let str: string = "Hello";
// str = `Hello, ${123}`;
// // str = true; //invalid
// console.log(str);

// Number
// let a: number = 5;
// let hex: number = 7e4;
// let binary: number = 10001101;
// console.log(binary);

// // Booleans
// let hasAuth: boolean = true;
// const isGreater: boolean = 5 >7;
// const hasTwo = [1,2,3,4].some(e=> e ===22);
// const isBoo:boolean = 123;
// console.log(isBoo);

// // Symbols
// let sym1 = Symbol('key');
// let symb2 = Symbol('key');
// console.log(sym1);

// // Undefined
// let user: Object | undefined;
// let person: Object | null = null;

// console.log({ user });
// console.log({ person });
// setTimeout(() => {
//     user = {name: "user123"};
//     console.log({ user });

//     person = {name: "Pesho"};
//     console.log({ person });
// }, 3000);

// // Arrays
// const arr1: number[] = [1, 2, 3, 4];
// const arr2: Array<number> = [2, 3, 4, 5];
// const arr3: string[] = ['Hello', 'its', 'me'];
// const arr4: boolean[] = [true, true, false, false];
// const arr5: any[] = [1, 'goole', false, {name: "Peshho"}];

// console.log(arr5);

// // Tuples     key     value
// let tuple1: [number, string] = [123, "Hi"];
// let tuple2: [boolean, object] = [true, {name: "Peshho"}];
// let tupleObjKey: [string, object] = ["user", {name: "User123"}];

// console.log(tuple1);
// console.log(tuple2);

// Enum
// enum DaysOfWeek{
//     // M = 1,
//     // T,
//     // W,
//     // Th,
//     // F,

//     M,
//     T,
//     W,
//     Th,
//     F,
// }

// const currentDay = 1;

// if(currentDay === DaysOfWeek.M){
//     console.log('Is Monday')
// }

// // Any, Unknown -> "type safe"
// let a:unknown;
// a = 5;
// a = {name: "Pesho"};
// a = true;
// console.log(a);

// // Void
// function myPrint(input: string):void {
//     console.log(input);
//     // doesn't gas retunr value!
// }

// function myPrint2(input:string):string{
//     return `[from print function] : ${input}`;
// }
// myPrint('Hello!')
// console.log(myPrint2('Hello!'));

// // Optional params
// function optionalParams(param1 = 5, param2?:string):void{
//     console.log({param1, param2});

// }
// // from left to right ->
// optionalParams(1);

// // Default arguments
// function optionalParams2(param1 = 5, param2:"Hi from default"):void{
//     console.log({param1, param2});

// }

// Return types in Functions
const getNum = (): number => 5;
const getNum2 = (): string =>{
    return "5";
};

const getNum3 = function(): number{
    return 5;
};

function getNum4(): undefined{
    return;
};

const getNum5 : () => number  = () =>{
    return 5;
};