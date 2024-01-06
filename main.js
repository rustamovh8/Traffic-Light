let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");

function container() {
  red.style.background = "black";
  yellow.style.background = "black";
  green.style.background = "black";
}
let cntRed = 11;
let cntYellow = 3;
let cntGreen = 11;

function Red() {
  let a = setInterval(() => {
    cntRed--;
    yellow.innerHTML = cntRed;
    red.style.background = "red";
    if (cntRed == 0) {
      red.style.background = "#666";
      cntRed = 11;
      clearInterval(a);
      Yellow();
    }
  }, 1000);
}
Red();

function Yellow() {
  let a = setInterval(() => {
    cntYellow--;
    yellow.innerHTML = cntYellow;
    yellow.style.background = "yellow";
    if (cntYellow == 0) {
      yellow.style.background = "#666";
      cntYellow = 3;
      clearInterval(a);
      Green();
    }
  }, 1000);
}
let cntYellow2 = 3;
function Yellow2() {
  let a = setInterval(() => {
    cntYellow2--;
    yellow.innerHTML = cntYellow2;
    yellow.style.background = "yellow";
    if (cntYellow2 == 0) {
      yellow.style.background = "#666";
      cntYellow2 = 3;
      clearInterval(a);
      Red();
    }
  }, 1000);
}

function Green() {
  let a = setInterval(() => {
    cntGreen--;
    yellow.innerHTML = cntGreen;
    green.style.background = "green";
    if (cntGreen == 0) {
      green.style.background = "#666";
      cntGreen = 11;
      clearInterval(a);
      Yellow2();
    }
  }, 1000);
}
