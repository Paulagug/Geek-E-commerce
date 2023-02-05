import { servicios } from "../services/productoServicio.js";

let crearNuevoProducto = (img, nombre, precio, id) => {
  let producto = document.createElement("div");
  producto.classList.add("todosProductos_producto");
  let contenido = `
  <div class="todosProductos_acciones">
    <a href="editar-producto.html?id=${id}"><img class="todosProductos_editar" src="img/cuerpo/Editar.svg" alt="Editar"></a>
    <a href="#"><img class="todosProductos_borrar" id="${id}" src="img/cuerpo/Borrar.svg" alt="Eliminar"></a>
  </div>
    <img class="todosProductos_img" src="${img}">
    <h3 class="todosProductos_nombre">${nombre}</h3>
    <p class="todosProductos_precio">${precio}</p>
    <p class="todosProductos_numeros" href="#">${id}</p>
  `;

  producto.innerHTML = contenido;
  const btnBorrar = producto.querySelector(".todosProductos_borrar");
  btnBorrar.addEventListener("click", () => {
    let id = btnBorrar.id;
    servicios
      .eliminarCliente(id)
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((err) => {
        alert(err);
      });
  });
  return producto;
};

const cajaProductos = document.querySelector("#contenedorTodosLosProductos");

servicios
  .listaClientes()
  .then((data) => {
    data.forEach((prod) => {
      const productoCreado = crearNuevoProducto(
        prod.img,
        prod.nombre,
        prod.precio,
        prod.id
      );
      cajaProductos.appendChild(productoCreado);
    });
  })
  .catch((error) => {
    swal("Error", "json-server no cargado", "error");
  });
