const contenerdor=document.createElement("div");
const boton=document.createElement("button");
boton.textContent="Boton Ej6";
boton.style.background="White"
contenerdor.appendChild(boton);
boton.addEventListener("mouseover",function(){
    boton.style.background="aquamarine";
})
boton.addEventListener("mouseout",function(){
    boton.style.background ="white";
})
document.body.appendChild(contenerdor);