// let user = {
//   name: "Pappu",
//   address: {
//     street: "udaypur",
//     area: "mariani",
//   },
// };
// let user1 = {
//   //   name: "Pappu",
// };

// console.log(user1.address?.street);
// console.log("hello");
"use strict";

let user = {
  client: {
    name: {
      firstname: "john",
      lastname: "",
    },
  },
  check() {
    for (let key in this.client.name) {
      console.log(this.client.name[key] || "Empty Value");
    }
  },
};
user.check();
