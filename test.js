//catName('jongseok');

//function catName(name) {
// console.log('My name is ' + name);
//}

class Cat { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion {
  speak() {
    //super.speak();
    console.log(this.name + ' roars.');
  }
}

console.log(Lion);
var lion = new Lion('harry'); 
lion.speak();


