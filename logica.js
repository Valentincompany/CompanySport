let contenedor = document.getElementById("contenidoCarrito");

function renderizadoProds(){
    for (const producto of productos){
        contenedor.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src=${producto.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class=>${producto.precio}</p>
          <button class="btn btn-primary">Comprar</button>
        </div>
      </div>
        `
    }
}
renderizadoProds();

let contenedorDest = document.getElementById("contenidoDestacados");

function renderizarDest(){
    for (const destacado of destacados){
        contenedorDest.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src=${destacado.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${destacado.nombre}</h5>
          <p class=>${destacado.precio}</p>
          <button class="btn btn-primary">Comprar</button>
        </div>
      </div>
        `;
    }
}
renderizarDest();