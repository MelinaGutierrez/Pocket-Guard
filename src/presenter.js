//import sumar from "./sumador";

const first = document.querySelector("#Monto");
const second = document.querySelector("#Descripcion");
const form = document.querySelector("#form-Egreso");
const firstIngreso = document.querySelector("#MontoIngreso");
const secondIngreso = document.querySelector("#DescripcionIngreso");
const formIngreso = document.querySelector("#form-Ingreso");
const div = document.querySelector("#resultado-div");
const formSumaEgreso = document.querySelector("#form-resultadoEgreso");
const divSumaEgreso= document.querySelector("#resultadoEgreso-div")
var sumEgresos=0;
const formSumaIngreso = document.querySelector("#form-resultadoIngreso");
const divSumaIngreso= document.querySelector("#resultadoIngreso-div")
var sumIngresos=0;
const formSumasSaldo = document.querySelector("#form-resultadoSaldo");
const divSumaSaldo= document.querySelector("#resultadoSaldo-div")
var sumSaldo=0;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number(first.value);
  const secondNumber = second.value;
  String(firstNumber);
  if(firstNumber==0 || secondNumber==""){
    alert("Ingrese el valor faltante");
  }
  else{
    sumEgresos= sumEgresos + firstNumber;
    div.innerHTML = div.innerHTML + "<p> -Egreso Bs: " +firstNumber + " Descripcion: "+secondNumber + "</p>";
    divSumaEgreso.innerHTML = "<p> -Egresos Bs: " +sumEgresos  + "</p>";
    
    
    sumSaldo= sumIngresos-sumEgresos;
    console.log(Number(sumSaldo));
    
    divSumaSaldo.innerHTML = "<p> -Saldo Bs: " +sumSaldo  + "</p>";
    if(sumSaldo<0){
      document.getElementById("resultadoSaldo-div").style.color = "red";
        //divSumaSaldo.fontcolor("red");
    }
  }
 
});

formIngreso.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number(firstIngreso.value);
  const secondNumber = secondIngreso.value;  

  if (firstNumber==0 || secondNumber==""){
    alert("Ingrese el valor faltante");
  }
  else{
    sumIngresos= sumIngresos + firstNumber;
  div.innerHTML =  div.innerHTML + "<p> -Ingreso Bs: " +firstNumber + " Descripcion: "+secondNumber + "</p>";
  divSumaIngreso.innerHTML = "<p> -Ingresos Bs: " +sumIngresos  + "</p>";

  sumSaldo= sumIngresos-sumEgresos;
  divSumaSaldo.innerHTML = "<p> -Saldo Bs: " +sumSaldo  + "</p>";
  if(sumSaldo>0){
    document.getElementById("resultadoSaldo-div").style.color = "green";
  }
  }
});