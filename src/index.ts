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
let arr3:number[] = [12,3,34,46]
let result= arr3.map((n, i) => n.toString);
// So basically as your using arr3:number[] when you map over this arr. when you want to using any methods of js it will automatically suggests all the number methods instead of any other datatypes methods 
console.log(result)

let result2 = arr.map((n:any) =>  isNaN(n));

console.log(result2)

// Tuple

let user: [string , number] = ["anne", 9];


user.push("test");
console.log(user);

 