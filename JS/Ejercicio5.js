function suma_primos(nro){
    let i=1, n=1;
    let nros_primos=[];
    for (n=2;n<=nro;n++){
        let cont=0;
        for (i=1;i<=n;i++){
            if (n%i==0){
                cont=cont+1;
            }
        }
        if (cont<=2){
            nros_primos.push(n);
        }
    }
    let suma_nros_primos=nros_primos.reduce((sum,nr)=>sum+nr,0)
    return suma_nros_primos
    }

    console.log(suma_primos(29));