//aca hacemos la comunicacion con el servidor, recibimos la respuesta y despues la generamos en un json
let listaClientes = () => {
  return fetch("http://localhost:3000/prod").then((respuesta) =>
    respuesta.json()
  );
};

let crearProducto = (img, nombre, precio, categoria, descripcion) => {
  return fetch("http://localhost:3000/prod", {
    //en este objeto definimos las propiedades de la llamada
    method: "POST", //post para crear nuevo recurso
    headers: {
      //encabezados para tener estandar para que el servidor sepa que tipo de archivos vamos a recibir
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      img,
      nombre,
      precio,
      categoria,
      descripcion,
      id: uuid.v4(),
    }),
  })
    .then((respuesta) => {
      window.location.href = "productos.html";
    })
    .catch((err) => console.log(err));
};

const eliminarCliente = (id) => {
  console.log("eliminar a   : ", id);
  return fetch(`http://localhost:3000/prod/${id}`, {
    method: "DELETE",
  });
};

const detalleProduto = (id) => {
  return fetch(`http://localhost:3000/prod/${id}`).then((respuesa) => {
    return respuesa.json();
  });
};

const actualizaProducto = (img, nombre, precio, categoria, descripcion, id) => {
  return fetch(`http://localhost:3000/prod/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ img, nombre, precio, categoria, descripcion }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export let servicios = {
  listaClientes,
  crearProducto,
  eliminarCliente,
  detalleProduto,
  actualizaProducto,
};
