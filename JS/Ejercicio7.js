///Funcion que oculta o muestra un elemento, dependiendo del parametro modo:0-oculta 1-muestra
function oculta_mostrar(elemento,modo){
    if (modo===0){
        elemento.style.display="none";
    } else{
        elemento.style.display="block";
    }
}

let elem=document.getElementById("elemento");
let boton1=document.getElementById("boton_ocultar");
let boton2=document.getElementById("boton_mostrar");

boton1.addEventListener("click", function(){oculta_mostrar(elem,0);});
boton2.addEventListener("click", function(){oculta_mostrar(elem,1);});
