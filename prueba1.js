//todo Variables


let listaCompra={};
let botonPera=document.querySelector('#pushPera')
let deletePera=document.querySelector('#deletePera')
localStorage.setItem("frutas",listaCompra);



//todo Eventos

botonPera.addEventListener('click',()=>{
    pushpera()
});
deletePera.addEventListener('click',()=>{
    quitarPera()
});




//todo Funciones 

function pushpera(){
    localStorage.setItem("pera",JSON.stringify(listaCompra));
}

function quitarPera() {
    localStorage.removeItem('pera');
}


console.log(listaCompra);