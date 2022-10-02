
//variables

let usuario;
let productos;
let menu;
let cuotas=0;

//constantes 
const buzos=8900;
const camisetas=14000;
const pelota=6500;
const shorts=4000;
const zapatillas=10000;
//funcion
function login(){
    let usuario=prompt("ingrese el nombre de usuario")
    alert("Bienvenido " + usuario+"!")
    }
//bienvenida
login();

menu = prompt("Quire saber el precio de un producto? si/no"); 
while(menu!="no"){ 
    menu=prompt("que producto desea conocer?(ingrese el numero del producto) \n1-Buzos \n2-Camisetas \n3-Pelota \n4-Shorts \n5-Zapatillas")
    switch(menu){
    case "1":
    alert("Los Buzos cuestan $"+buzos);
    cuotas=buzos/12;
    prompt("Le recordamos que tiene 12 cuotas sin interes. El precio en 12 cuotas quedaria en: "+cuotas);
    break;
    case "2":
    alert("Las Camisetas cuestan $"+camisetas);
    cuotas=camisetas/12;
    prompt("Le recordamos que tiene 12 cuotas sin interes. El precio en 12 cuotas quedaria en: "+cuotas);
    break;
    case "3":
    alert("La Pelota cuesta $"+pelota);
    cuotas=pelota/12;
    prompt("Le recordamos que tiene 12 cuotas sin interes. El precio en 12 cuotas quedaria en: "+cuotas);
    break;
    case "4":
    alert("Los Shorts cuestan $"+shorts);
    cuotas=shorts/12;
    prompt("Le recordamos que tiene 12 cuotas sin interes. El precio en 12 cuotas quedaria en: "+cuotas);
    break;
    case "5":
    alert("Las zapatillas cuestan $"+zapatillas);
    cuotas=zapatillas/12;
    prompt("Le recordamos que tiene 12 cuotas sin interes. El precio en 12 cuotas quedaria en: "+cuotas);
    break;
}
menu = prompt("Quire saber el precio de otro producto? si/no");
}




