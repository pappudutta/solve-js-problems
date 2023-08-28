function countDown(number) {
  if (number === 0) return;
  console.log(number);
  setTimeout(() => {
    return countDown(number - 1);
  }, 1000);
}

countDown(5);
