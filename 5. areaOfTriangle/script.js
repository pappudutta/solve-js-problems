const root = document.getElementById("root");

const minmax = arr => {
  let result = [Math.min(...arr), Math.max(...arr)];
  root.append(result);
};

let result = minmax([21, 23, 4, 5, 65, 67, 0, 4, 99]);
