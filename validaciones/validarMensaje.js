const formularioEnviarMensaje = document.querySelector(
  "#formularioEnviarMensaje"
);

formularioEnviarMensaje.addEventListener("submit", (event) => {
  event.preventDefault();
  swal("Enviado", "Mensaje enviado con exito", "success");
});
