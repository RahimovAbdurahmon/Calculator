let res = true;
let resOperator = true;
let resZero = true;

let img = document.querySelector(".img");
let dialog = document.querySelector(".dialog");
let closeDialog = document.querySelector(".closeDialog");
let time = document.querySelector(".time");
let btnDelete = document.querySelector(".btnDelete");
let clear = document.querySelector(".clear");
let digit1 = document.querySelector(".digit1");
let digit2 = document.querySelector(".digit2");
let digit3 = document.querySelector(".digit3");
let digit4 = document.querySelector(".digit4");
let digit5 = document.querySelector(".digit5");
let digit6 = document.querySelector(".digit6");
let digit7 = document.querySelector(".digit7");
let digit8 = document.querySelector(".digit8");
let digit9 = document.querySelector(".digit9");
let digit0 = document.querySelector(".digit0");
let digittoch = document.querySelector(".digittoch");
let operatorMode = document.querySelector(".operatorMode");
let operatorTaqsim = document.querySelector(".operatorTaqsim");
let operatorZarb = document.querySelector(".operatorZarb");
let operatorMinus = document.querySelector(".operatorMinus");
let operatorPilus = document.querySelector(".operatorPilus");
let inpResult = document.querySelector("#inpResult");
let btnResult = document.querySelector(".btnResult");
let btnChange = document.querySelector(".btnChange");
let scope = document.querySelector(".scope");
let inpRepResult = document.querySelector(".inpPerResult");

scope.onclick = () => {
  let result = inpResult.value.toString();
  if (inpResult.value == "") {
    inpResult.value += "(";
  } else {
    if (result.includes("(")) {
      inpResult.value += ")";
    } else {
      if (
        inpResult.value.at(-1) == "*" ||
        inpResult.value.at(-1) == "-" ||
        inpResult.value.at(-1) == "+" ||
        inpResult.value.at(-1) == "/" ||
        inpResult.value.at(-1) == "%"
      ) {
        inpResult.value += "(";
      } else {
        inpResult.value += "*" + "(";
      }
    }
  }
};

img.onclick = () => {
  dialog.showModal();
  img.style.display = "none";
};

closeDialog.onclick = () => {
  dialog.close();
  img.style.display = "block";
  inpResult.value = "";
  res = true;
};

btnDelete.onclick = () => {
  let result = inpResult.value.toString();
  inpResult.value = result.slice(0, -1);
  if (inpResult.value == "") {
    inpRepResult.value = "";
  }
};

clear.onclick = () => {
  inpResult.value = "";
  inpRepResult.value = "";
};

btnChange.onclick = () => {
  inpResult.value = inpResult.value * -1;
};

digit0.onclick = () => {
  if (resZero) {
    inpResult.value += digit0.innerHTML;
    resOperator = true;
    resZero = false;
  }
};
digit1.onclick = () => {
  if (inpResult.value.length < 16) {
    inpResult.value += digit1.innerHTML;
    resOperator = true;
    resZero = true;
  }
};
digit2.onclick = () => {
  if (inpRepResult.value.length < 16) {
    inpResult.value += digit2.innerHTML;
    resOperator = true;
    resZero = true;
  }
};
digit3.onclick = () => {
  if (inpResult.value.length < 16) {
    inpResult.value += digit3.innerHTML;
    resOperator = true;
    resZero = true;
  }
};
digit4.onclick = () => {
  if (inpResult.value.length < 16) {
    inpResult.value += digit4.innerHTML;
    resOperator = true;
    resZero = true;
  }
};
digit5.onclick = () => {
  if (inpResult.value.length < 16) {
    inpResult.value += digit5.innerHTML;
    resOperator = true;
    resZero = true;
  }
};
digit6.onclick = () => {
  if (inpResult.value.length < 16) {
    inpResult.value += digit6.innerHTML;
    resOperator = true;
    resZero = true;
  }
};
digit7.onclick = () => {
  if (inpResult.value.length < 16) {
    inpResult.value += digit7.innerHTML;
    resOperator = true;
    resZero = true;
  }
};
digit8.onclick = () => {
  if (inpResult.value.length < 16) {
    inpResult.value += digit8.innerHTML;
    resOperator = true;
    resZero = true;
  }
};
digit9.onclick = () => {
  if (inpResult.value.length < 16) {
    inpResult.value += digit9.innerHTML;
    resOperator = true;
    resZero = true;
  }
};
digittoch.onclick = () => {
  if (inpResult.value.length < 16) {
    if (res) {
      let res2 = inpResult.value.toString();
      if (
        res2.at(-1) == "-" ||
        res2.at(-1) == "%" ||
        res2.at(-1) == "/" ||
        res2.at(-1) == "+" ||
        res2.at(-1) == "*"
      ) {
        inpResult.value += "0" + digittoch.innerHTML;
        res = false;
        resZero = true;
      } else {
        inpResult.value += digittoch.innerHTML;
        res = false;
        resZero = true;
      }
    }
  }
};

operatorMinus.onclick = () => {
  if (inpResult.value.length < 16) {
    if (inpResult.value != "") {
      if (resOperator) {
        inpResult.value += operatorMinus.innerHTML;
        res = true;
        resOperator = false;
      }
    }
  }
};
operatorTaqsim.onclick = () => {
  if (inpResult.value.length < 16) {
    if (inpResult.value != "") {
      if (resOperator) {
        inpResult.value += operatorTaqsim.innerHTML;
        res = true;
        resOperator = false;
      }
    }
  }
};
operatorPilus.onclick = () => {
  if (inpResult.value.length < 16) {
    if (inpResult.value != "") {
      if (resOperator) {
        inpResult.value += operatorPilus.innerHTML;
        res = true;
        resOperator = false;
      }
    }
  }
};
operatorZarb.onclick = () => {
  if (inpResult.value.length < 16) {
    if (inpResult.value != "") {
      if (resOperator) {
        inpResult.value += operatorZarb.innerHTML;
        res = true;
        resOperator = false;
      }
    }
  }
};
operatorMode.onclick = () => {
  if (inpResult.value.length < 16) {
    if (inpResult.value != "") {
      if (resOperator) {
        inpResult.value += operatorMode.innerHTML;
        res = true;
        resOperator = false;
      }
    }
  }
};

btnResult.onclick = () => {
  if (inpResult.value == "") {
    inpResult.value = "";
  } else {
    let result = eval(inpResult.value);
    inpRepResult.value = inpResult.value;
    inpResult.value = result;
  }
};

setInterval(() => {
  let newDate = new Date();
  let hour =
    newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours();
  let minute =
    newDate.getMinutes() < 10
      ? "0" + newDate.getMinutes()
      : newDate.getMinutes();
  let second =
    newDate.getSeconds() < 10
      ? "0" + newDate.getSeconds()
      : newDate.getSeconds();
  time.innerHTML = `${hour} : ${minute} : ${second}`;
}, 1000);
