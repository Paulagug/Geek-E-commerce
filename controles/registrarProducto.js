import { servicios } from "../services/productoServicio.js";

let formulario = document.querySelector(".agregar_form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let urlImagen = document.querySelector("#urlImagen").value;
  let nombreProducto = document.querySelector("#nombreProducto").value;
  let categoriaProducto = document.querySelector("#categoriaProducto").value;
  let precioProducto = document.querySelector("#precioProducto").value;
  let descripcionProducto = document.querySelector(
    "#descripcionProducto"
  ).value;

  servicios
    .crearProducto(
      urlImagen,
      nombreProducto,
      precioProducto,
      categoriaProducto,
      descripcionProducto
    )
    .then((respuesta) => {
      window.location.href = "productos.html";
    })
    .catch((err) => alert(err));
});
