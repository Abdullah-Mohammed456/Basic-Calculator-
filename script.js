let array = [
  "AC",
  "DEL",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "00",
  "0",
  ".",
  "=",
];

let ipt = document.getElementById("input");
let basicCalc = document.querySelector(".basic-calc");

array.forEach((element, index) => {
  let btn = document.createElement("button");
  if (
    index % 4 === 3 ||
    index === 0 ||
    index === 1 ||
    index === 2 ||
    index === 3
  ) {
    btn.classList.add("special");
  }
  if (index === 19) {
    btn.className = "equal";
  }
  btn.innerHTML = element;
  basicCalc.appendChild(btn);
});

let string = "";
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "AC") {
      string = "";
      if (!isNaN(string)) {
        ipt.value = Number(string).toLocaleString("en-US");
      } else {
        ipt.value = string;
      }
    } else if (e.target.innerHTML == "DEL") {
      string = string.slice(0, -1);
      if (!isNaN(string)) {
        ipt.value = Number(string).toLocaleString("en-US");
      } else {
        ipt.value = string;
      }
    } else if (e.target.innerHTML == "=") {
      let temp = string.replaceAll("×", "*").replaceAll("÷", "/");
      string = eval(temp);
      if (!isNaN(string)) {
        ipt.value = Number(string).toLocaleString("en-US");
      } else {
        ipt.value = string;
      }
    } else {
      string += e.target.innerHTML;
      if (!isNaN(string)) {
        ipt.value = Number(string).toLocaleString("en-US");
      } else {
        ipt.value = string;
      }
    }
  });
});
