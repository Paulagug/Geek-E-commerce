import { servicios } from "../services/productoServicio.js";

let obtenerInformacion = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    swal("Ups", "Ocurrio un error, intenta en unos minutos", "error");
  }

  let urlImagen = document.querySelector("#urlImagen");
  let nombreProducto = document.querySelector("#nombreProducto");
  let categoriaProducto = document.querySelector("#categoriaProducto");
  let precioProducto = document.querySelector("#precioProducto");
  let descripcionProducto = document.querySelector("#descripcionProducto");

  servicios.detalleProduto(id).then((prod) => {
    urlImagen.value = prod.img;
    nombreProducto.value = prod.nombre;
    categoriaProducto.value = prod.categoria;
    precioProducto.value = prod.precio;
    descripcionProducto.value = prod.descripcion;
  });
};

obtenerInformacion();

const formularioEditar = document.querySelector(".agregar_form");

formularioEditar.addEventListener("submit", (event) => {
  event.preventDefault();

  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  let urlImagen = document.querySelector("#urlImagen").value;
  let nombreProducto = document.querySelector("#nombreProducto").value;
  let categoriaProducto = document.querySelector("#categoriaProducto").value;
  let precioProducto = document.querySelector("#precioProducto").value;
  let descripcionProducto = document.querySelector(
    "#descripcionProducto"
  ).value;

  servicios
    .actualizaProducto(
      urlImagen,
      nombreProducto,
      precioProducto,
      categoriaProducto,
      descripcionProducto,
      id
    )
    .then(() => {
      window.location.href = "productos.html";
    })
    .catch((err) => alert(err));
});
