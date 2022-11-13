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
  
    carrito.forEach((oferta) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
    <img src="${oferta.img}">
    <h3>${oferta.nombre}</h3>
    <p>$${oferta.precio}</p>
    <span class="eliminar-producto"> 🗑️ </span> 
    `;
    modalContainer.append(carritoContent);

    console.log(carrito.length);

    let eliminar = carritoContent.querySelector(".eliminar-producto");

    eliminar.addEventListener("click", ()=>{
      eliminarProducto(oferta.id);
    })
  });
  
  const total = carrito.reduce((acc, el)=> acc + el.precio, 0);
  
  const totalComprado = document.createElement("div")
  totalComprado.className = "total-content"
  totalComprado.innerHTML = `TOTAL A PAGAR: $${total}`;
  modalContainer.append(totalComprado);
  
//boton finalizar compra

const modalbuttonFinalizar = document.createElement("div");
modalbuttonFinalizar.innerText = "FINALIZAR COMPRA";
modalbuttonFinalizar.className = "modal-footer-button";

modalContainer.append(modalbuttonFinalizar);

modalbuttonFinalizar.onclick = ()=>{
  if(carrito.length==0){
    swal ( "Oops" ,  "El carro esta vacio" ,  "error" )
  }else{
    carrito =[];
    swal ( "Gracias por su compra" ,  "Pronto recibira un mail con los datos de su compra" ,  "success" )
  }
}  
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
