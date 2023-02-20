const frutasAPintar=[
    {
        id:1,
        nombre:"pera",
    },
    {
        id:2,
        nombre:"Kiwi",
    }
]

const lista=document.querySelector("#lista")
const boton=document.querySelector("#boton")

boton.addEventListener(`click`,()=>{
    pintarEnlista()
})
{}

lista.addEventListener(`click`,({target})=>{
    if (target.matches("li")) {
         const id =target.id
         mostrarElemento(id)
    }
})


const pintarEnlista=()=>{
    frutasAPintar.forEach(({id,nombre}) => {
        lista.innerHTML += `<li id=${id}>${nombre}</li>
        <button class="add" data-id=${id}>añadir</button>
        <button class="remove" data-id=${id}>eliminar</button>`;
    });
}

const mostrarElemento=(id)=>{
    alert(id)
}



