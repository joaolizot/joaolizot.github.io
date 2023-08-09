function general(){
var precioH= 100; 
var sabor = prompt("Catalogo de sabores : pescado rancio ; guiso ; queso y aceitunas Ingrese un sabor : ");
var precioT = 0;
var div1 = document.getElementById("div1");
var precioFinal = precioH + precioT;


if (sabor === "pescado rancio") {
    precioT = 50; 
    var precioFinal = precioH + precioT;
    div1.innerHTML = 'Tu helado cuesta  $' + precioFinal;
} else if (sabor === "guiso"){
    precioT = 20;
    var precioFinal = precioH + precioT;
    div1.innerHTML = 'Tu helado cuesta  $' + precioFinal;
} else if (sabor === "queso y aceitunas"){
    precioT = 60;
    var precioFinal = precioH + precioT;
    div1.innerHTML = 'Tu helado cuesta  $' + precioFinal;
} else {
    div1.innerHTML = 'No contamos con este producto'
};
}





