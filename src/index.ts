let age: number = 21;
let userName: string = "Anne Rages";
let isDone = false;
// isDone = "string"
let isDualDone: boolean = true;
isDone = isDualDone;

// Any Type exmaples
let test;
test = "test";
test = 20;

// function testFn (array:string) {
function testFn(array: any) {
  // if you do not mention the type of the args it will not accept and not let you compile the function
  // There are two ways to get rid of this error for compile 1, give annotate & 2, turn off the no implicitly return
  console.log(array);
}

// testFn("Test");
testFn(45455545656); // as we have provided ":any annotate " it is accepting any data type
testFn(" Hello World"); // Here as a string

// Array
let arr = [1, 2, "3"];
let arr2 = [1, 2, 3];
let arr3: number[] = [12, 3, 34, 46];
let result = arr3.map(n => n.toString);
// So basically as your using arr3:number[] when you map over this arr. when you want to using any methods of js it will automatically suggests all the number methods instead of any other datatypes methods
console.log(result);

let result2 = arr.map((n: any) => isNaN(n));

console.log(result2);

// Tuple
let user: [string, number] = ["anne", 9];
// tuples are the array which we need ot specify to the fixed array length!

// Enums
const small = 1;
const medium = 2;
const large = 3;
// instead of writing th same same const repeatedly like above code we can go head with the typeScript types enums

// We have to create the enums with the (enum) key value and PascalCase
enum Size {
  Small = "tight",
  Medium = "fit",
  Large = "slack",
}
// these are basically like Objects. however the difference is if you don't key the value for the enum it will take default as 0 (index)
let mySize = Size.Large;
console.log(mySize);

// Functions
// Notes on functions:
// 1, We have to explicitly give annotate the parameters and functions if not it will throw and error;
// 2, if we not sure of give the second parameter then we can use "?" after the parameter eg: (income: number, percentage? :number) or we can either use default parameter!
// 3, we have different rules to turn off and on ion the tsconfig.json file like noUnusedLocals, noUsedParameters and noImplicitReturns.
const calculateTax = (income: number, taxPercentageL = 5): number => {
  let result;
  result = income + taxPercentageL;
  if (income < 300) return 2 + result;
  return income + 0;
};
calculateTax(2);

// objects
// Notes: 
// 1, Objects also expect type notations before initialization
// 2, if you want the property to be used only once then you should use the readonly before the type notation property
// 3, if your not sure of initialization the property then you can use "?"
// 4, to declare functions you have to give the type notation for the functions and parameters o the function!  
const users: {
  name: string;
  readonly age: number;
  isDone: boolean;
  address?: object;
  test? :boolean;
  add? : ( a: number) => void
} = {
  name: "John",
  isDone: false,
  age: 89,
  address: {
    roadNumber: 123,
    streetName: "John Street",
    add: (a: number) => {
        console.log(a);
    }
  },
};
// users.age = 10;
// users.address.roadNumber = "Test road"
