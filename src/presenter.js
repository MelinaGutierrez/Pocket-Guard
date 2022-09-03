const first = document.querySelector("#Monto");
const second = document.querySelector("#Descripcion");
const form = document.querySelector("#form-Egreso");
const firstIngreso = document.querySelector("#MontoIngreso");
const secondIngreso = document.querySelector("#DescripcionIngreso");
const formIngreso = document.querySelector("#form-Ingreso");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = second.value;

  div.innerHTML = /*div.innerHTML +*/ "<p> -Egreso Bs: " +firstNumber + " Descripcion: "+secondNumber + "</p>";
});

formIngreso.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstIngreso.value);
  const secondNumber = secondIngreso.value;  

  div.innerHTML =  /*div.innerHTML +*/ "<p> -Ingreso Bs: " +firstNumber + " Descripcion: "+secondNumber + "</p>";
});