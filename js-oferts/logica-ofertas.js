let contenedor = document.getElementById("contenidoCarrito");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function renderizadoOferts(){
    for (const oferta of ofertas){
        contenedor.innerHTML += `
        <div class="card col-sm-3" ">
        <img src=${oferta.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${oferta.nombre}</h5>
          <p class=>$${oferta.precio}</p>
          <button id="btn${oferta.id}" class="btn btn-primary">Comprar</button>
        </div>
      </div>
        `
    }
    
  //events
    ofertas.forEach(oferta => {
      document.getElementById(`btn${oferta.id}`).addEventListener("click",function(){
        agregarAlCarrito(oferta);
      });
    });
}
renderizadoOferts();

function agregarAlCarrito(productoComprado){
  carrito.push(productoComprado)
  saveLocal();
}

function agregarAlCarrito(productoComprado){
  carrito.push(productoComprado);
  saveLocal();
}


//set item
const saveLocal = ()=> {
localStorage.setItem("carrito", JSON.stringify (carrito));

};
//get item
