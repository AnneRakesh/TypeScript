let age: number = 21;
let userName: string = "Anne Rages";
let isDone = false;
// isDone = "string"
let isDualDone:boolean = true;

isDone = isDualDone

let test;

test = "test";
test = 20;




// function testFn (array:string) {
function testFn (array:any) {
    // if you do not mention the type of the args it will not accept and not let you compile the function
    // There are two ways to get rid of this error for compile 1, give annotate & 2, turn off the no implicitly return  
    console.log(array)
}



// testFn("Test");
testFn(45455545656); // as we have provided ":any annotate " it is accepting any data type
testFn(" Hello World"); // Here as a string