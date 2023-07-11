const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const date = new Date();

const day = date.getDay();

const [h, m, s] = [date.getHours(), date.getMinutes(), date.getSeconds()];

const currentTime = `${h}:${m}:${s}`;
const today = daysOfWeek[1];

// Output
console.log("Today is :- " + today);
console.log("Current time is :- " + currentTime);

document.getElementById(
  "root"
).innerHTML = `<div>Today is :- ${today} <br/> <br/> Current time is :- ${currentTime} </div>`;
