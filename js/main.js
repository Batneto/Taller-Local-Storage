document.addEventListener('DOMContentLoaded', () => {

    //todo VARIBLES 
    const lista1=document.querySelector('#lista1')
    const lista2=document.querySelector('#lista2')
    const fragment= document.createDocumentFragment()
    const arrayOriginal = [
        { id: 'a-1', producto: 'kiwi' },
        { id: 'a-2', producto: 'pera' },
        { id: 'a-3', producto: 'melon' },
        { id: 'a-4', producto: 'sandia' }

    ]

    let arrayProductosSeleccionados = JSON.parse(localStorage.getItem('productos')) || []

    

    //todo EVENTOS 
    document.addEventListener('click', ({ target }) => {
       
        if (target.matches('.add')) {

            const id=target.parentElement.id
            añadirSeleccionados(id)
            pintarLista2()
           
        }
        if (target.matches('.remove')) {
            const id=target.parentElement.id
            sacarSeleccionados(id)
            pintarLista2()
        }   
    })


    //todo FUNCIONES 

    const pintarLista1 = () => {

        arrayOriginal.forEach(item => {

            const li= document.createElement('li')

           li.id=item.id

           li.innerHTML=`${item.producto}<button class="remove"> eliminar </button>
                                         <button class="add">añadir</button>`
        
            fragment.append(li)  
        });
        lista1.append(fragment)
    }

    const añadirSeleccionados = (id) => {

        const productoEncontrado=arrayOriginal.find((item)=>item.id=id)

        arrayProductosSeleccionados.push(productoEncontrado);

        console.log(arrayProductosSeleccionados);

        setLocal()
    }

    const pintarLista2 = () => {

       //let productos=getLocal()
        
       // console.log(productos);
       lista2.innerHTML=""

       arrayProductosSeleccionados.forEach(item => {  

       const li= document.createElement('li')

       li.classList.add(item.id)

       li.innerHTML=`${item.producto}<button class="remove"> eliminar </button>
                                     <button class="add">añadir</button>`
    
        fragment.append(li)  
    });
    lista2.append(fragment)
    }

    //LOCAL STORAGE
    //añadir al local
    const setLocal = () => {
        localStorage.setItem('pruductos', JSON.stringify(arrayProductosSeleccionados));
    }

    //recoger el local

    const getLocal = () => {
        
        return JSON.parse(localStorage.getItem('productos')) || [];
    }

    const init=()=>{
        pintarLista1()
        pintarLista2()
    }

    init()
})//*LOAD