const myCalc = document.querySelector(".MyCalculator");
const myKeys = [
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  ["C", "0", "=", "/"],
];
const myOper = ["+", "-", "*", "/"];
let myOutput;

document.addEventListener("DOMContentLoaded", function () {
  myOutput = document.createElement("div");
  myOutput.innerHTML = "0";
  myOutput.classList.add("output");
  myCalc.appendChild(myOutput);

  for (let y = 0; y < myKeys.length; y++) {
    let div = document.createElement("div");
    div.classList.add("row");

    for (let x = 0; x < myKeys[y].length; x++) {
      let btn = document.createElement("div");
      btn.innerHTML = myKeys[y][x];
      btn.classList.add("btn");
      btn.addEventListener("click", btnHit);
      div.appendChild(btn);
    }

    myCalc.appendChild(div);
  }
});

function btnHit(e) {
  let myValue = this.innerHTML;
  let myCal = myOutput.innerHTML;
  let lastChar = myCal.substring(myCal.length - 1);

  if (myCal == "0") {
    myCal = "";
  }
  if (myValue == "=") {
    myCal = eval(myCal);
    myValue = "";
  } else {
    if (myOper.includes(myValue)) {
      if (myCal == "" && myCal == 0) {
        myCal = 0;
      } else {
        if (myOper.includes(lastChar)) {
          myCal = myCal.substring(0, myCal.length - 1);
        } else {
          myCal = eval(myCal);
        }
      }
    }
  }
  if (myValue == "C") {
    myCal = 0;
    myValue = 0;
  }

  myCal = myCal + myValue;

  if (myCal == "undefined") {
    myCal = "0";
  }
  myOutput.innerHTML = myCal;
}
