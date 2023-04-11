// //complete this code
// class Person {
// 	constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   get name() {
//     return this.name;
//   }

//   set age(age) {
//     this.age = age;
//   }
// }

// class Student extends Person {
// 	study() {
//     console.log(`${this.name} is studying.`);
//   }
// }

// class Teacher extends Person {
// 	teach() {
//     console.log(`${this.name} is teaching.`);
//   }
// }

// // Do not change the code below this line
// window.Person = Person;
// window.Student = Student;
// window.Teacher = Teacher;



  class Animal {
  constructor(species) {
    this._species = species;
  }
  get species() {
    return this._species;
  }
  makeSound() {
    console.log("The " + this.species + " makes a sound");
  }
}
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

function getElementsByAttribute(attribute, value) {
  const elementsWithAttribute = [];
  const allElements = document.getElementsByTagName("*");

  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].getAttribute(attribute) === value) {
      elementsWithAttribute.push(allElements[i]);
    }
  }

  return elementsWithAttribute;
}
 const elementsWithBarBaz = getElementsByAttribute("data-bar", "baz");
    console.log(elementsWithBarBaz);
