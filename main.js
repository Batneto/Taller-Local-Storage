const frutasAPintar = [
  {
    id: 1,
    nombre: "pera",
  },
  {
    id: 2,
    nombre: "Kiwi",
  },
];

const arrayProductos = [];

const pintarTabla = () => {
  frutasAPintar.forEach((item) => {
    const fila = document.createElement("TR");

    fila.innerHTML = `<td id=${item.id}>${item.nombre}</td> 
                        <td><button class="add" data-id=${item.id}>añadir</button></td> 
                        <td><button class="remove" data-id=${item.id}>eliminar</button></td>`;
    tabla.append(fila);
  });
};

const lista = document.querySelector("#lista");
pintarTabla();

const botonAñadir = document.querySelectorAll(".add");
const botonEliminar = document.querySelectorAll(".remove");

console.log(botonAñadir);

botonAñadir.forEach((item) => {
  item.addEventListener("click", () => {
    pintarEnlista();
    idproducto();
  });
});
//

const pintarEnlista = () => {
  frutasAPintar.forEach(({ id, nombre }) => {
    lista.innerHTML += `<li id=${id}>${nombre}</li>`;
  });
};
console.log(arrayProductos);

const pintararrayProductos = () => {
  frutasAPintar.forEach(({ id, nombre }) => {
    lista.innerHTML = `<li id=${id}>${nombre}</li>`;
  });
};





// const idproducto = (id) => {
//   const producto = frutasAPintar.find((item) => item.id == id);
//   console.log(producto);
// };
// botonAñadir.addEventListener('click',()=>{
//     console.log("hola");
// });
// lista.addEventListener(`click`, ({ target }) => {
//   if (target.matches("")) {
//     const id = target.id;
//     mostrarElemento(id);
//   }
// });
