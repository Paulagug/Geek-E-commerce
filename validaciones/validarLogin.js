const formulario = document.querySelector("#form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  let inputUsuario = document.querySelector("#nombre").value;
  let inputPassword = document.querySelector("#password").value;

  if (inputUsuario === "alura@gmail.com" && inputPassword === "week123") {
    window.location.href = "productos.html";
  } else {
    swal("Usuario o contraseña incorrecta", "Intenta nuevamente", "error");
  }
});
