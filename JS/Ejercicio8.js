const persona={nombre:"Fernando",
             apellido:"Montero",
             edad:39,
             sexo:"Masculino",
             telefono:3876842177
            }
///Creacion de los elementos
const contenedor=document.createElement("div");
const tabla=document.createElement("table");
///Fila del eencabezado
const fila_e=document.createElement("tr");
//Encabezados
const enc_nombre=document.createElement("th");
const enc_apellido=document.createElement("th");
const enc_edad=document.createElement("th");
const enc_sexo=document.createElement("th");
const enc_telefono=document.createElement("th");
///Fila 1 para datos
const fila_d1=document.createElement("tr");
///Datos de la fila1
const nombre1=document.createElement("td");
const apellido1=document.createElement("td");
const edad1=document.createElement("td");
const sexo1=document.createElement("td");
const telefono1=document.createElement("td");
///Ingreso los nombres del encabezado
enc_nombre.textContent="Nombre";
enc_apellido.textContent="Apellido";
enc_edad.textContent="Edad";
enc_sexo.textContent="Sexo";
enc_telefono.textContent="Telefono";
///Ingreso los datos del objeto personal para la primer fila de datos
nombre1.textContent=persona.nombre;
apellido1.textContent=persona.apellido;
edad1.textContent=persona.edad;
sexo1.textContent=persona.sexo;
telefono1.textContent=persona.telefono;
///Estructuracion de los hijos de los elementos
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
///Ingreso del contenedor en el documento
document.body.appendChild(contenedor);


