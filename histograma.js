let datoIngresado;
let contadorPositivos=0;
let contadorNegativos=0;

do{
    datoIngresado = prompt("Ingresa un valor entereo positivo o negativo, termina con 0");
    console.log(datoIngresado);
    if(datoIngresado > 0){
        contadorPositivos++;
    }else if(datoIngresado<0){
        contadorNegativos++;
    }
}while(datoIngresado !=0)
let renglon="Positivos:";
for(let i=0;i<contadorPositivos;i++){
    renglon+="*";
}
console.log(renglon);

renglon="Negativos:";
for(let i=0;i<contadorNegativos;i++){
    renglon+="*";
}
console.log(renglon);
IL-3011221200151595
