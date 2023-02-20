
		// Obtener referencia a la lista de compras
		const listaCompras = document.getElementById('lista-compras');

		// Agregar un evento al botÃ³n de aÃ±adir producto
        const boton=document.getElementById('agregar')
		boton.addEventListener('click', () => {
			// Obtener el valor del producto ingresado
			const producto = document.getElementById('producto').value;

			// Agregar el producto al localStorage
			let productos = JSON.parse(localStorage.getItem('productos')) || [];
			productos.push(producto);
			localStorage.setItem('productos', JSON.stringify(productos));

			// Actualizar la lista de compras
			actualizarListaCompras();
		});

		// Agregar un evento al botÃ³n de eliminar producto
		document.getElementById('eliminar').addEventListener('click', () => {
			// Obtener el valor del producto ingresado
			const producto = document.getElementById('producto').value;

			// Eliminar el producto del localStorage
			let productos = JSON.parse(localStorage.getItem('productos')) || [];
			productos = productos.filter(p => p !== producto);
			localStorage.setItem('productos', JSON.stringify(productos));

			// Actualizar la lista de compras
			actualizarListaCompras();
		});

		// Agregar un evento al botÃ³n de vaciar lista
		document.getElementById('vaciar').addEventListener('click', () => {
			// Vaciar la lista de compras en el localStorage
			localStorage.removeItem('productos');

			// Actualizar la lista de compras
			actualizarListaCompras();
		});

		// FunciÃ³n para actualizar la lista de compras
		function actualizarListaCompras() {
			// Limpiar la lista de compras existente
			while (listaCompras.firstChild) {
				listaCompras.removeChild(listaCompras.firstChild);
			}

			// Obtener los productos de localStorage
			let productos = JSON.parse(localStorage.getItem('productos')) || [];

			// Recorrer los productos y agregarlos a la lista
			productos.forEach(producto => {
				const item = document.createElement('li');
				item.textContent = producto;
				listaCompras.appendChild(item);
			});
		}
	