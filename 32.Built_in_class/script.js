// // Check if this object is a class or not

// // console.log(Array instanceof Object);

// // console.log(Date());

// const today = new Date();

// let actualDate = today.toDateString();
// let deviceDate = today.toLocaleDateString();
// console.log(actualDate.toUpperCase(), deviceDate);

// const js = /j/g;
// const text = "Hello javascript";
// console.log(text.match(js));

// ! class constructor

class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
  static createId() {
    return "123";
  }
}

class Teacher extends User {
  constructor(username, email, pass) {
    super(username);
    this.email = email;
    this.pass = pass;
  }
  addCourse() {
    console.log(`A new course added by ${this.username}`);
  }
}

const ratnaMaam = new Teacher("Ratna Giri", "ratnagiri@giri.com", "Ratna@123");
const dulalSir = new Teacher("Dulala Kapashiya", "dulal@gmail.com", "Dlal@123");
// ratnaMaam.addCourse();

// console.log(ratnaMaam.pass);
// console.log(typeof dulalSir);
let dSir = [1, 2, 3, 4];
console.log(User instanceof Teacher);
const { username, email, pass } = dulalSir;
// console.log(username, email, pass);

// console.log(ratnaMaam.createId());
const id = User.createId();
console.log(id);
