let contador;
let alternada = 1;
let limite = prompt("Ingresa el numero de terminos de la suma")
let PI=0;

for (contador=1; contador < limite; contador += 2){
    PI += alternada*(1/contador);
    alternada*=(-1);
}
PI*=4;
console.log(PI);