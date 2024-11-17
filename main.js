// PRODUCTOS
const productos = [
    // Zapatillas
    {
        id: "keratina",
        titulo: "Promo Keratina",
        imagen: "./productos/keratina.jpeg",
        categoria: {
            nombre: "Keratina",
            id: "Keratina"
        },
        precio: 250000
    },
    {
        id: "Pelo a pelo",
        titulo: "Pestañas Pelo a Pelo",
        imagen: "./productos/peloapelo.jpeg",
        categoria: {
            nombre: "Pestañas",
            id: "Pestañas"
        },
        precio: 80000
    },
    {
        id: "rayitos",
        titulo: "Rayitos cualquier Color",
        imagen: "./productos/rayitos.jpeg",
        categoria: {
            nombre: "Rayitos",
            id: "Rayitos"
        },
        precio: 200000
    },
    {
        id: "Trenzas",
        titulo: "Trenzas",
        imagen: "./productos/trenzas.jpeg",
        categoria: {
            nombre: "Trenzas",
            id: "Trenzas"
        },
        precio: 40000
    },
    {
        id: "Punto a Punto",
        titulo: "Extensiones por punto(3k por punto)",
        imagen: "./productos/punto.jpeg",
        categoria: {
            nombre: "Punto a punto",
            id: "Punto a Punto"
        },
        precio: 3000
    },
    {
        id: "Balayage",
        titulo: "Balayage",
        imagen: "./productos/balayag.jpeg",
        categoria: {
            nombre: "Balayage",
            id: "Balayage"
        },
        precio: 300000
    },
    {
        id: "Lifting",
        titulo: "Lifting de pestañas",
        imagen: "./productos/lifting.jpeg",
        categoria: {
            nombre: "lifting",
            id: "lifting"
        },
        precio: 60000
    },
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector(".titulo-principal")



function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML= "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">${producto.precio}</p>                  
                        <a href="https://wa.me/573137588066/?text=Quiero%20reservar%20una%20cita%20!!"
                        <button class="producto-agregar" id="${producto.id}">Agregar</button>
                        </a>
                    </div>
        `
        contenedorProductos.append(div);
    })
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)            
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;           
        
        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
   })

})

