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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = second.value;
  sumEgresos= sumEgresos + firstNumber;
  div.innerHTML = div.innerHTML + "<p> -Egreso Bs: " +firstNumber + " Descripcion: "+secondNumber + "</p>";
  divSumaEgreso.innerHTML = "<p> -Egresos Bs: " +sumEgresos  + "</p>";
});

formIngreso.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstIngreso.value);
  const secondNumber = secondIngreso.value;  
  sumIngresos= sumIngresos + firstNumber;
  div.innerHTML =  div.innerHTML + "<p> -Ingreso Bs: " +firstNumber + " Descripcion: "+secondNumber + "</p>";
  divSumaIngreso.innerHTML = "<p> -Ingresos Bs: " +sumIngresos  + "</p>";
});


