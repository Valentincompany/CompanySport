let contenedor = document.getElementById("contenidoCarrito");
const carrito = []

function renderizadoProds(){
    for (const producto of productos){
        contenedor.innerHTML += `
        <div class="card col-sm-3" ">
        <img src=${producto.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class=>${producto.precio}</p>
          <button id="btn${producto.id}" class="btn btn-primary">Comprar</button>
        </div>
      </div>
        `
    }
  //events
    productos.forEach(producto => {
      document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
        agregarAlCarrito(producto);
      });
    });
}
renderizadoProds();

function agregarAlCarrito(productoComprado){
  carrito.push(productoComprado);
  console.table(carrito);
  alert("Producto: "+productoComprado.nombre+" agregado al carrito!")
}

let contenedorDest = document.getElementById("contenidoDestacados");

function renderizarDest(){
    for (const destacado of destacados){
        contenedorDest.innerHTML += `
        <div class="card col-sm-3" ">
        <img src=${destacado.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${destacado.nombre}</h5>
          <p class=>${destacado.precio}</p>
          <button id="btn${destacado.id}"class="btn btn-primary">Comprar</button>
        </div>
      </div>
        `;
    }
      //events
      destacados.forEach(destacado => {
        document.getElementById(`btn${destacado.id}`).addEventListener("click",function(){
          agregarAlCarrito(destacado);
        });
      });
}
renderizarDest();

function agregarAlCarrito(productoComprado){
  carrito.push(productoComprado);
  console.table(carrito);
  alert("Producto: "+productoComprado.nombre+" agregado al carrito!")
}
