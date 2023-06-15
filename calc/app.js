let dataContent = [];
function logEnter(num1, num2, result, operator) {
  const log = {
    firstNumber: num1,
    secondNumber: num2,
    data: result,
    sign: operator,
  };
  dataContent.push(log);
  console.log(dataContent);
}
function display(m){

equal = function () {
  document.getElementById("current-result").innerHTML=m;
 
}
return equal;

}


function sign(opera){
  document.getElementById("operators").innerHTML=opera;
}

function add() {
  let a = document.getElementById("one").value;
  let b = document.getElementById("two").value;
  let x = parseFloat(a) + parseFloat(b);
  display(x);
  logEnter(a, b, x, "addition");
  sign("+")
}

function sub() {
  let a = document.getElementById("one").value;
  let b = document.getElementById("two").value;
  let x = parseFloat(a) - parseFloat(b);
  display(x);
  logEnter(a, b, x, "substration");
  sign("-")
}
function mul() {
  let a = document.getElementById("one").value;
  let b = document.getElementById("two").value;
  let x = parseFloat(a) * parseFloat(b);
  let j=x.toPrecision(4)
  display(j);
  logEnter(a, b, x, "multiplication");
  sign("*")
}
function divi() {
  let a = document.getElementById("one").value;
  let b = document.getElementById("two").value;
  let x = parseFloat(a) / parseFloat(b);
 let j= x.toFixed(4)
  display(j);
  logEnter(a, b, x, "division");
  sign("/")
}
