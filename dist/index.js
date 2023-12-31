"use strict";
var _a;
let age = 21;
let userName = "Anne Rages";
let isDone = false;
// isDone = "string"
let isDualDone = true;
isDone = isDualDone;
// Any Type examples
let test;
test = "test";
test = 20;
// function testFn (array:string) {
function testFn(array) {
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
let arr3 = [12, 3, 34, 46];
let result = arr3.map((n) => n.toString);
// So basically as your using arr3:number[] when you map over this arr. when you want to using any methods of js it will automatically suggests all the number methods instead of any other datatypes methods
console.log(result);
let result2 = arr.map((n) => isNaN(n));
console.log(result2);
// Tuple
let user = ["anne", 9];
// tuples are the array which we need ot specify to the fixed array length!
// Enums
const small = 1;
const medium = 2;
const large = 3;
// instead of writing th same same const repeatedly like above code we can go head with the typeScript types enums
// We have to create the enums with the (enum) key value and PascalCase
var Size;
(function (Size) {
    Size["Small"] = "tight";
    Size["Medium"] = "fit";
    Size["Large"] = "slack";
})(Size || (Size = {}));
// these are basically like Objects. however the difference is if you don't key the value for the enum it will take default as 0 (index)
let mySize = Size.Large;
console.log(mySize);
// Functions
// Notes on functions:
// 1, We have to explicitly give annotate the parameters and functions if not it will throw and error;
// 2, if we not sure of give the second parameter then we can use "?" after the parameter eg: (income: number, percentage? :number) or we can either use default parameter!
// 3, we have different rules to turn off and on ion the tsconfig.json file like noUnusedLocals, noUsedParameters and noImplicitReturns.
const calculateTax = (income, taxPercentageL = 5) => {
    let result;
    result = income + taxPercentageL;
    if (income < 300)
        return 2 + result;
    return income + 0;
};
calculateTax(2);
// objects
// Notes:
// 1, Objects also expect type notations before initialization
// 2, if you want the property to be used only once then you should use the readonly before the type notation property
// 3, if your not sure of initialization the property then you can use "?"
// 4, to declare functions you have to give the type notation for the functions and parameters o the function!
const users = {
    name: "John",
    isDone: false,
    age: 89,
    address: {
        roadNumber: 123,
        streetName: "John Street",
        add: (a) => {
            console.log(a);
        },
    },
};
const employee1 = {
    name: "John Peter",
    age: 40,
    address: {
        Hno: 123,
        street: "Colony Street",
    },
    getNames: (a, b) => {
        return a + b;
    },
};
const employee2 = {
    name: " VS Code",
    age: 49,
    address: {
        Hno: 321,
        street: "tStreet",
    },
    getNames: (a, b) => {
        return a + b;
    },
};
employee1.age = 100;
// employee1.name =" Test"; Ts doesn't allow to compile due to which we have provided readonly to name annotate
// employee1.address.Hno = 458;  need to ask Hemanth on this!
// Union Type;
// We have give one or more type annotations for a variable or function parameter;
// We can achieve this by given ( | ) symbol the same usage of || operator however in union type
// here in the below 154 line i have used | (union type  number or string)
const kgToLbs = (kg) => {
    // Before narrowing the type of the kg param if we try to use any inbuilt js methods by using kg. it wil only suggest the methods which are common to both string number
    // to achieve the specific type we have to narrow the type first
    // Narrowing the type
    if (typeof kg === "number")
        // here complier will understand is it number or string so now if we use kg. it will suggest us all the methods of number type
        return kg * 2.2;
    // else return kg // here in the else case it will prompt us all the string methods to us
    else
        return parseInt(kg) * 2 * 2;
};
// Intersection type
// Notes: So in Union type we use the single pipe for type annotation one or more type can we  give to the variable right?
// the same way here in intersection we have single & to give two tyre at once with "&" keyword
let intersectionExample; // technically this is not possible because we cannot initialize the declare with two  string and number or any type at once in primitive types
// So now we can combine these two functions at one place
const testBox = {
    drag: () => { },
    resizeFn: () => { },
};
// Literal type
// Notes: for instance if you want to limit a specified value of an type to the variable if you use this literal type
let fixedSalary = 100; // this statement will take any valid number in the js correct? to achieve the same we have to use Union  type which will be defined by type
// let AugustMonthSalary: FixedSalary = 6; // Here it will not accept 6
let AugustMonthSalary = 50; // here while initialization it will only accept 50 or 100;
let tableHeight = "cm";
// Nullable types
// So basically in JavaScript the major errors happen with null and undefined values only.
// To prevent we have nullable value in tsconfig file "strictNullChecks" which is default true
// Example
function greet(userName) {
    // here we're using union type neither it should null or string
    if (userName)
        return "Hello " + userName + "!";
    else
        return "hello User";
}
greet("John"); // This will accept because we have defined the type annotate as string
greet(null); // null param will not be accepted because we have strickNullCheck true here so it wont let you compile, if it is off it would ignore this!
const getDOB = (id) => {
    return id === 0 ? null : { birthDay: new Date() };
};
let resultForDOB = getDOB(1);
// Chaining Example Below
// Optional property access Operator -
console.log((_a = resultForDOB === null || resultForDOB === void 0 ? void 0 : resultForDOB.birthDay) === null || _a === void 0 ? void 0 : _a.getFullYear());
// Optional Element Access Operator
// if customer is an Array
let OptionalArr = [1, 2, 3, 4, [1, 5, 8, 9]];
console.log(OptionalArr === null || OptionalArr === void 0 ? void 0 : OptionalArr[5]);
//# sourceMappingURL=index.js.map