let contenedor = document.getElementById("misprods");

function renderizadoProds(){
    for (const producto of productos){
        contenedor.innerHTML += `
        <div class="card">
        <img src="../imagenes/d88ae2138faf49be8f74aeca012c62eb_9366 (1).webp" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Camiseta de Argentina</h5>
          <p class="card-text"></p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
        `
    }
}