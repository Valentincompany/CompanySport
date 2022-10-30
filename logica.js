let contenedor = document.getElementById("contenidoCarrito");
const verCarrito = document.getElementById("verCarrito");
const carrito = []
const modalContainer = document.getElementById("modal-container")

function renderizadoProds(){
    for (const producto of productos){
        contenedor.innerHTML += `
        <div class="card col-sm-3" ">
        <img src=${producto.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class=>$${producto.precio}</p>
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
}
verCarrito.addEventListener("click", () => {
  modalContainer.innerHTML= "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header"
  modalHeader.innerHTML =`
  <h1 class="modal-header-tittle">carrito.</h1> 
  `;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click",()=> {
    modalContainer.style.display="none"
  });

  modalHeader.append(modalbutton);

  carrito.forEach((producto) => {
  let carritoContent = document.createElement("div");
  carritoContent.className = "modal-content";
  carritoContent.innerHTML = `
  <img src="${producto.img}">
  <h3>${producto.nombre}</h3>
  <p>$${producto.precio}</p>  
  `;
  modalContainer.append(carritoContent);
});

const total = carrito.reduce((acc, el)=> acc + el.precio, 0);

const totalComprado = document.createElement("div")
totalComprado.className = "total-content"
totalComprado.innerHTML = `TOTAL A PAGAR:$${total}`;
modalContainer.append(totalComprado);
});
let contenedorDest = document.getElementById("contenidoDestacados");

function renderizarDest(){
    for (const destacado of destacados){
        contenedorDest.innerHTML += `
        <div class="card col-sm-3" ">
        <img src=${destacado.img} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${destacado.nombre}</h5>
          <p class=>$${destacado.precio}</p>
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
}
