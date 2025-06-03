let count = 0;
const display = document.getElementById("counting");

const timer = setInterval(() => {
  count++;
  if (count > 6) {
    clearInterval(timer); // Stop at 8
  } else {
    display.textContent = count;
  }
}, 150);

let count1 = 0;
const display1 = document.getElementById("counting1");

const timer1 = setInterval(() => {
  count1++;
  if (count1 > 8) {
    clearInterval(timer1); // Stop at 8
  } else {
    display1.textContent = count1;
  }
}, 150);