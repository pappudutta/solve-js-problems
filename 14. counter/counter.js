//! solution: 1
// var createCounter = function (init) {
//   let newInit = init;

//   function increment() {
//     newInit += 1;
//     return newInit;
//   }

//   function decrement() {
//     return init - 1;
//   }

//   function reset() {
//     return init;
//   }
//   return { increment, decrement, reset };
// };

//! Solution: 2

// var createCounter = function (init) {
//   let currInit = init;

//   function counterFunc(num) {
//     currInit += num;
//     return currInit;
//   }

//   function increment() {
//     return counterFunc(1);
//   }

//   function decrement() {
//     return counterFunc(-1);
//   }

//   function reset() {
//     return (currInit = init);
//   }
//   return { increment, decrement, reset };
// };
//! best solution

var createCounter = function (init) {
  let count = init;

  return {
    increment: () => {
      return ++count;
    },
    decrement: () => {
      return --count;
    },
    reset: () => {
      return init;
      //   return count;
    },
  };
};

let { increment, decrement, reset } = createCounter(2);
console.time();
console.log(increment());
console.log(increment());
console.log(decrement());
console.log(reset());
console.timeEnd();
