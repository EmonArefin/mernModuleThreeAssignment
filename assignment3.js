// 1) javascript For in loop
function printObjectProperties(obj) {
    let isEmpty = true;
    for (let prop in obj) {
      isEmpty = false;
      console.log(`${prop}: ${obj[prop]}`);
    }
    if (isEmpty) {
      console.log("Object is empty");
    }
}
  
const person = {
    name: "John",
    age: 30,
    occupation: "Engineer"
};
  
const emptyObj = {};
  
printObjectProperties(person);
printObjectProperties(emptyObj);
  
// 2) javascript function returns
function findMaxNumber(numbers) {
    if (numbers.length === 0) {
      return null;
    }
  
    let maxNumber = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
      }
    }
  
    return maxNumber;
}
  
const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1));

const numbers2 = [5, 15, 7];
console.log(findMaxNumber(numbers2))
  
const emptyArray = [];
console.log(findMaxNumber(emptyArray));

// 3) javascript Spread Operator
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2));

// 4) javascript arrow function
const calculateSquare = (number) => number * number;

console.log(calculateSquare(5));
console.log(calculateSquare(8));

// 5) javascript es6 map
const doubleNumbers = (numbers) => {
    return numbers.map((num) => num * 2);
};

const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers));

// 6) javascript es6 static keyword
class MathUtility {
    static multiply(a, b) {
      return a * b;
    }
}

console.log(MathUtility.multiply(5, 3));
console.log(MathUtility.multiply(2, 8));

//7) javascript es6 class inheritance
class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(this.sound);
    }
}
  
class Dog extends Animal {
    fetch() {
      console.log("Fetching the ball!");
    }
}

const animal = new Animal("Lion", "Roar");
animal.makeSound();
  
const dog = new Dog("Buddy", "Woof");
dog.makeSound();
dog.fetch();
  
// 8) javascript es6 super keyword
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
  
class Student extends Person {
    constructor(name, age, major) {
      super(name, age);
      this.major = major;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`);
    }
}

const person1 = new Person("John", 30);
person1.introduce();
  
const student1 = new Student("Alice", 20, "Computer Science");
student1.introduce();
  