const pintarCarrito = () => {

    modalContainer.innerHTML= "";
    modalContainer.style.display = "flex";
    //creo header del modal
    const modalHeader = document.createElement("div");
    //le asigno una clase
    modalHeader.className = "modal-header"
    //le asingo su contenido html
    modalHeader.innerHTML =`
    <h1 class="modal-header-tittle">CARRITO</h1> 
    `;
    //le cargo todo el modal header al modal container
    modalContainer.append(modalHeader);

    //creo boton para salir del modal
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
  
    modalbutton.addEventListener("click",()=> {
      modalContainer.style.display="none"
    });
   //le cargo el boton al modal header
    modalHeader.append(modalbutton);

    //busco el contenido que hay en el carrito
    carrito.forEach((oferta) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    //le asingo su contenido 
    carritoContent.innerHTML = `
    <img src="${oferta.img}">
    <h3>${oferta.nombre}</h3>
    <p>$${oferta.precio}</p>
    <span class="eliminar-producto"> 🗑️ </span> 
    `;
    //le agrego el contenido del carrito al modal container
    modalContainer.append(carritoContent);

    //detecto el boton de eliminar
    let eliminar = carritoContent.querySelector(".eliminar-producto");

    eliminar.addEventListener("click", ()=>{
      eliminarProducto(oferta.id);
    })
  });
    //calcular el total final
  const total = carrito.reduce((acc, el)=> acc + el.precio, 0);
    //creo el footer del modal
  const totalComprado = document.createElement("div")
  totalComprado.className = "total-content"
  totalComprado.innerHTML = `TOTAL A PAGAR: $${total}`;
    //le cargo el total comprado al modal container
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
//disparo la funcion pintarCarrito cuando el usuario apreta en el carrito
verCarrito.addEventListener("click", pintarCarrito);

//eliminar producto
const eliminarProducto = (id) => {
  //busco dentro de lo que hay en el carrito el id del producto
  const foundId = carrito.find((element) => element.id === id);
  //filtro el carrito y pido que me retorne todos elementos que estan en ese carritoId que sean distintos de foundId  
  carrito = carrito.filter((carritoId) =>{
  return carritoId !== foundId;
  })
  saveLocal();
  pintarCarrito();
};
