const nombre=document.getElementById("in_nombre");
const email=document.getElementById("in_email");
const button=document.getElementById("print_button");



button.addEventListener("click",function(){
    const val_nombre=nombre.value;
    const val_email=email.value;
    console.log("Nombre: " + val_nombre + "\ne-mail: " + val_email);
})
