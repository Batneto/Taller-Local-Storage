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

  

 let  lista =document.querySelector("#lista")



 
 const pintarEnlista=()=>{
    frutasAPintar.forEach(({id,nombre}) => {
        lista.innerHTML += `<li id=${id}>${nombre}</li>
        <button class="add" data-id=${id}>añadir</button>
        <button class="remove" data-id=${id}>eliminar</button>`;
    });
}