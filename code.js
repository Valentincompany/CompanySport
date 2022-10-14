
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
]
//funcion
function login(){
    let usuario=prompt("ingrese el nombre de usuario")
    alert("Bienvenido " + usuario+"!")
    }
//bienvenida
login();

//busqueda del producto
let buscarProd = prompt("que producto desea conocer?(escriba el nombre del producto \n1-Buzos \n2-Camisetas \n3-Pelota \n4-Shorts \n5-Zapatillas")
const encontrado = productos.find((producto) => producto.nombre == buscarProd);
if (encontrado != undefined) {
    console.log(encontrado);
} else {
    alert("Este producto no esta en stock");
}



//menu=prompt("que producto desea conocer?(ingrese el numero del producto) \n1-Buzos \n2-Camisetas \n3-Pelota \n4-Shorts \n5-Zapatillas")
