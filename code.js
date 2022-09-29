
//variables

let usuario
let productos
let menu
//constantes 
const buzos=8900;
const camisetas=14000;
const pelota=6500;
const shorts=4000;
const zapatillas=10000;
//funcion


//bienvenida
usuario=prompt("ingresa tu usuario");
alert("Bienvenido "+usuario+"!")

menu = prompt("Quire saber el precio de un producto? si/no"); 
while(menu!="no"){ 
    menu=prompt("que producto desea conocer?(ingrese el numero del producto) \n1-Buzos \n2-Camisetas \n3-Pelota \n4-Shorts \n5-Zapatillas")
    switch(menu){
    case "1":
    alert("Los Buzos cuestan $"+buzos);
    break;
    case "2":
    alert("Las Camisetas cuestan $"+camisetas);
    break;
    case "3":
    alert("La Pelota cuesta $"+pelota);
    break;
    case "4":
    alert("Los Shorts cuestan $"+shorts);
    break;
    case "5":
    alert("Las zapatillas cuestan $"+zapatillas);
    break;
}
menu = prompt("Quire saber el precio de otro producto? si/no"); 
}




