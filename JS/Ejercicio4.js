let my_array=[15,25,3,6,5,9,15,23,60,58,90,125];
let nro_mas_grande=my_array[0];
///Busqueda del nro mas grande recorriendo el array con un for
for (i=1; i<my_array.length;i++){
    if (my_array[i]>nro_mas_grande){
        nro_mas_grande=my_array[i];
    }
}
///Mediante reduce
let nro_max=my_array.reduce((max,nro_i)=>{
    if (max>nro_i){
        return max;
    } else {
        return nro_i
    }
}, my_array[0]);

console.log(nro_mas_grande);
console.log(nro_max);