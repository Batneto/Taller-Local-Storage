

//todo Variables


let listaCompra=[];
let botonPera=document.querySelector('#pushPera')
let deletePera=document.querySelector('#deletePera')
// localStorage.setItem("frutas",listaCompra);
let cont=0


//todo Eventos

botonPera.addEventListener('click',({target})=>{
    if(eval.target.matches(.add))
    const elemento=ev.target.parentelement.parentelement.child[0],id
    const id=ev.target.getAtribute("data-id")
    pushpera()
});
deletePera.addEventListener('click',()=>{
    quitarPera()
});




//todo Funciones 

function pushpera(){
    listaCompra.push("pera")
}

function quitarPera() {
    
}



console.log(listaCompra);







