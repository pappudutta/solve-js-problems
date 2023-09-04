class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log(`Hello ${this.firstname} ${this.lastname}!`);
  }
}

let person1 = new Person("Pappu", "Dutta");
let person2 = new Person("Jonny", "Pot");
let person3 = new Person("Iron", "Man");

person2.greet();
