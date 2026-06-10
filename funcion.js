//Actividad 1

function Saludar(){
    console.log("Hello World!");
}

console.log("Inicio programa");
Saludar();
console.log("fin");

//Actividad 2

function SaludarUser(Usuario){     //Parametros (Variables de la funcion)
    console.log("Hola", Usuario);
}

SaludarUser("Damian")    //Argumentos (envio de datos)

//Actividad 3

function Suma(n1, n2){
    let res=n1+n2;
    return res;
}
let Resultado=Suma(5, 6);
console.log("La suma es" ,Resultado)

//Actividad 4

function div(n1, n2){
    if(n2==0){
        return "Error: No se puede dividir por 0";
    }
    let res=n1/n2;
    return res;
}

let resultado=div(15, 0)
console.log("Division: ", resultado);

//Actividad 5

function SaludarUser(Usuario, saludo="Buen dia"){
    console.log("Hola", Usuario, saludo);
}

SaludarUser("Damian");    //Argumento (envio de datos)
SaludarUser("Maria", "como estas?");

//Actividad 6, Funciones Matematicas

function area(base, altura){
    let res=base*altura;
    return res;
}

let resultadoArea=area(15, 9)   //Números de prueba, estos del parentesis se pueden cambiar, estan para probar las variables
console.log("Valor Area: ", resultadoArea);
let radio=resultadoArea/2;
let Perimetro=2*Math.PI*radio;
if(Perimetro %2){
    console.log("Este Perimetro es par");
}
else{
    console.log("Este Perimetro es impar");
}
console.log("Perimetro es igual a:", Perimetro);

//Actividad 7

function sumar(n1, n2){
    let res = n1 + n2;
    return res;
}

function restar(n1, n2){
    let res=n1-n2;
    return res;
}

function multiplicar(n1, n2){
    let res = n1*n2;
    return res;
}

function dividir(n1, n2){
    let res = n1/n2;
    return res;
}

function calcular(num1, num2, operacion){
    let resultadoFinal;

    if(operacion==1){ 
        resultadoFinal=sumar(num1, num2);
        console.log('Su calculo de SUMA dio como resultado:', resultadoFinal);
    } 
    else if(operacion==2){
        resultadoFinal=restar(num1, num2);
        console.log('Su calculo de RESTA dio como resultado:', resultadoFinal);
    } 
    else if(operacion==3){
        resultadoFinal=multiplicar(num1, num2);
        console.log('Su calculo de MULTIPLICACION dio como resultado:', resultadoFinal);
    } 
    else if(operacion==4){
        resultadoFinal=dividir(num1, num2);
        console.log('Su calculo de DIVISION dio como resultado:', resultadoFinal);
    } 
    else {
        console.error('ERROR: El numero de operación no es válido. Solo se admiten valores del 1 al 4.');
        return null; 
    }

    return resultadoFinal; 
}

console.log('Hola! Usted esta usando la calculadora de prueba de Ezequiel Jaime Condori Apaza, esperemos que tenga la mejor experiencia en este programa ;]');
console.log('Tabla de uso de funciones sumar, restar, multiplicar y dividir:');
console.log('suma = 1');
console.log('resta = 2');
console.log('multiplicacion = 3');
console.log('division = 4');
console.log('Recuerde que esto se tiene que aplicar al valor "operacion" de la funcion calcular');
console.warn('SI POR ALGUN MOTIVO SE LE OCURRE PONER OTRO NUMERO QUE NO ESTE EN LA LISTA, VA A TIRAR ERROR, YA ESTA ADVERTIDO, USUARIO');

let operacionDePrueba = calcular(6, 8, 3);    //Valores editables de prueba
