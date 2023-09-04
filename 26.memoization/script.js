function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    console.log(args);
    console.log(JSON.stringify(args));
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
}

function expensiveOperation(n, m) {
  console.log(`Calculating for ${n}`);
  return (r = n * 2 + m * 3);
}

const memoizedExpensiveOperation = memoize(expensiveOperation);

console.log(memoizedExpensiveOperation(1, 2));
// console.log(memoizedExpensiveOperation(1, 2));

// console.log(memoizedExpensiveOperation(5));
