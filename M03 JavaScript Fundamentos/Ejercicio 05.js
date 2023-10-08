/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
    if (0<num){
    return "es positivo"
    }
    else if (0>num){
      return "es negativo"
    }
    else{
      return false
    } 
}
 var resultado = esPositivo (0)
 console.log (resultado) 

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
return str +"!"
}
var resultado1 = agregarSimboloExclamacion ("hello word")
console.log (resultado1)

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
return (nombre +" "+ apellido)
}
var resultado2 = combinarNombres ("evelyn" , "barrera")
console.log (resultado2)
function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   var string = ("Hola")
return (string +" "+ nombre +  " !" )
}
var resultado3= obtenerSaludo ( "Evelyn" )
console.log (resultado3)

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
return (alto+ancho)*2 
}
var resultado4= obtenerAreaRectangulo (10,20)
console.log (resultado4)

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   return lado * 4
}
var resultado5= retornarPerimetro (20)
console.log (resultado5)
function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   return (base*altura)/2
}
var resultado6= areaDelTriangulo (20,10)
console.log (resultado6)

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
return euro * 1.20
}
var resultado7= deEuroAdolar (1)
console.log (resultado7)
function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   if (letra === "a"|| letra === "e"|| letra === "i"|| letra === "o"||letra === "u"){
      return "Es vocal"}
      else {
      return "Dato incorrecto"}
      
   }   
   var resultado8 = esVocal ("a")
   console.log (resultado8)


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
