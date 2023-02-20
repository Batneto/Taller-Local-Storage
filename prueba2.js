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


const arrayProductos=[]

const pintarTabla=()=>{
    frutasAPintar.forEach((item)=>{
        const fila=document.createElement('TR')
     
        fila.innerHTML=`<td id=${item.id}>${item.nombre}</td> 
                        <td><button class="add" data-id=${item.id}>añadir</button></td> 
                        <td><button class="remove" data-id=${item.id}>eliminar</button></td> `
        tabla.append(fila)
    })

}

pintarTabla()

const botonAñadir=document.querySelectorAll(".add")
const botonEliminar=document.querySelectorAll(".remove")

console.log(botonAñadir);

botonAñadir.forEach(item => {
    item.addEventListener('click',()=>{
        console.log("pepe");
    });
});
    

  








// const buscarProducto=(id)=>{
//     const producto=frutasAPintar.find((item)=>item.id==id)
// }


botonAñadir.addEventListener('click',()=>{
    console.log("hola");
});






   








