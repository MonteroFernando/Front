function ordenar(array){
    let ordenado=array.slice().sort((a,b)=>a-b);
    /*Se ultiliza el metodo slice() para que no altere el array original, ademas de usar una funcion flecha 
    de comparacion para solucionar el problema de la ordenacion como cadena de texto, este compara los numero ingresados
    como parametro, si el resultado es negativo deja primero el primer numero ingreso primero*/
    return ordenado
}
let lista=[5,6,8,15,9,7,10,5,20];///Ejemplo de un array
console.log(ordenar(lista));
console.log(lista);///Compruebo que el array original no se haya modificado