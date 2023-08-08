let numeros = [5,3,2,6,15,23,26,30,84,12,4,9,8];

let nro_par= numeros.filter(num=>num%2===0);

let cadena_nro_par=nro_par.join(", ")///Convierte el array en una cadena de texto separados por , y espacio

let element=document.getElementById("Elemento_HTML");

element.textContent=cadena_nro_par;
