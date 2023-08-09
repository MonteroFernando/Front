const persona={nombre:"Fernando",
             apellido:"Montero",
             edad:39,
             sexo:"Masculino",
             telefono:3876842177
            }

const contenedor=document.createElement("div");
const tabla=document.createElement("table");
const fila_e=document.createElement("tr");
const enc_nombre=document.createElement("th");
const enc_apellido=document.createElement("th");
const enc_edad=document.createElement("th");
const enc_sexo=document.createElement("th");
const enc_telefono=document.createElement("th");
const dato=document.createElement("td");
const fila_d1=document.createElement("tr");
const nombre1=document.createElement("td");
const apellido1=document.createElement("td");
const edad1=document.createElement("td");
const sexo1=document.createElement("td");
const telefono1=document.createElement("td");

enc_nombre.textContent="Nombre";
enc_apellido.textContent="Apellido";
enc_edad.textContent="Edad";
enc_sexo.textContent="Sexo";
enc_telefono.textContent="Telefono";

nombre1.textContent=persona.nombre;
apellido1.textContent=persona.apellido;
edad1.textContent=persona.edad;
sexo1.textContent=persona.sexo;
telefono1.textContent=persona.telefono;

contenedor.appendChild(tabla);
tabla.appendChild(fila_e);
fila_e.appendChild(enc_nombre);
fila_e.appendChild(enc_apellido);
fila_e.appendChild(enc_edad);
fila_e.appendChild(enc_sexo);
fila_e.appendChild(enc_telefono);
tabla.appendChild(fila_d1);
fila_d1.appendChild(nombre1);
fila_d1.appendChild(apellido1);
fila_d1.appendChild(edad1);
fila_d1.appendChild(sexo1);
fila_d1.appendChild(telefono1);

document.body.appendChild(contenedor);


