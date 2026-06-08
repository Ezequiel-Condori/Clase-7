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

let resultadoArea=area(15, 9)
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

function suma(n1, n2){
    let res=n1+n2;
    return res;
}

function resta(n1, n2){
    let res=n1-n2;
    return res;
}

function multi(n1, n2){
    let res=n1*n2;
    return res;
}

function div(n1, n2){
    let div=n1, n2;
}