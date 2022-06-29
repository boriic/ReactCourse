let age: number = 2;
let string: string = "whaa";
let isInstructor: boolean = true;

//more complex types
let hobbies: string[];

hobbies = ["sports", "cooking"];

type Person = { name: string; age: number };

let person: Person[];

person = [
  {
    name: "Max",
    age: 32,
  },
];

let people: { name: string; age: number }[];

(people = [{ name: "bla", age: 23 }]), [{ name: "bu", age: 15 }];

console.log(people);

let bubu: string | number = "bla";
bubu = 4;

//Function & types
function add(a: number, b: number) {
  return a + b;
}

function print (value:any){
    console.log(value);
}