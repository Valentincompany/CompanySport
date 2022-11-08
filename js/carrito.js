const pintarCarrito = () => {

    modalContainer.innerHTML= "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML =`
    <h1 class="modal-header-tittle">CARRITO</h1> 
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
    <span class="eliminar-producto"> 🗑️ </span> 
    `;
    modalContainer.append(carritoContent);

    console.log(carrito.length);

    let eliminar = carritoContent.querySelector(".eliminar-producto");

    eliminar.addEventListener("click", ()=>{
      eliminarProducto(producto.id);
    })
  });
  
  const total = carrito.reduce((acc, el)=> acc + el.precio, 0);
  
  const totalComprado = document.createElement("div")
  totalComprado.className = "total-content"
  totalComprado.innerHTML = `TOTAL A PAGAR: $${total}`;
  modalContainer.append(totalComprado);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
  const foundId = carrito.find((element) => element.id === id);

  carrito = carrito.filter((carritoId) =>{
  return carritoId !== foundId;
  })
  saveLocal();
  pintarCarrito();
};



