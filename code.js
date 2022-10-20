
//variables

let usuario;
let menu;
let cuotas=0;
//array
const productos = [
    {
        nombre:"buzos",
        precio:8900,
    },
    {
        nombre:"camisetas",
        precio:14000,
    },
    {
        nombre:"pelota",
        precio:6500,
    },
    {
        nombre:"shorts",
        precio:4000,
    },
    {
        nombre:"zapatillas",
        precio:10000,
    }
];
let carrito = []
//funcion
function login(){
    let usuario=prompt("ingrese el nombre de usuario")
    alert("Bienvenido " + usuario+"!")
    }
//bienvenida
login();

menu=prompt("Desea comprar algun producto(si/no)")
while(menu!="si"&& menu!="no"){
    alert("porfavor ingrese si o no")
    menu=prompt("Desea comprar algun producto(si/no)")
}
if(menu=="si"){
alert("Esta es nuestra lista de productos")
let todoslosProductos = productos.map((producto)=>producto.nombre+" "+producto.precio+"$")
alert(todoslosProductos.join(" - "))
}else if (menu=="no"){
    alert("Gracias por visitar nuestro sitio, hasta pronto!!")
}
//agregando productos al carrito
while(menu!="no"){
    let producto =prompt("agrega un producto al carrito(escribe el nombre del producto que quieras)")
    let precio = 0

if (producto == "buzos" || producto =="camisetas" || producto =="pelota" || producto =="shorts" || producto =="zapatillas"){
    switch(producto){
        case "buzos":
        precio=8900;
        break;
        case "camisetas":
        precio=14000;
        break;
        case "pelota":
        precio=6500;
        break;
        case "shorts":
        precio=4000;
        break;
        case "zapatillas":
        precio=10000;
        break;
        default:
        break;
    }
    let unidades = parseInt(prompt("cuantas unidades quiere llevar?"))
    carrito.push({producto, unidades, precio})
    console.log(carrito)
}else{
    alert("No tenemos ese producto")
}
menu=prompt("desea seguir comprando? si/no")
while(menu ==="no"){
    alert("Gracias por la compra! hasta pronto")
    carrito.forEach((carritoFinal)=>{
        console.log(`producto: ${carritoFinal.producto}unidades: ${carritoFinal.unidades},total a pagar por producto ${carritoFinal.unidades*carritoFinal.precio}`)
    })
    break;
}
}

//evento al dar click en comprar

