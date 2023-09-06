function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    // console.log("key:", key);
    if (key in cache) {
      console.log("cache:", cache);
      console.log("cache:", cache[key]);
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    // console.log("cache:", cache[key]);
    // console.log("cache:", String(cache));
    return result;
  };
}

const memoizedSum = memoize(function (a, b) {
  return a + b;
});
const memoizedSub = memoize(function (a, b) {
  return a - b;
});

memoizedSum(1, 1);
memoizedSum(1, 1);
memoizedSub(1, 1);
memoizedSub(1, 1);
// console.log(memoizedSum(1, 1));
// console.log(callCount);
