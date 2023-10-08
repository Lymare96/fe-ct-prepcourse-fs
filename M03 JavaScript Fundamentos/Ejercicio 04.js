/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   return (num**2);
}
var resultado = elevarAlCuadrado (3)
console.log (resultado)

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   return (num**3);
}
var resultado1 = elevarAlCubo (2)
console.log (resultado1)

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   return (num**exponent)
}
var resultado2 = elevar (4 , 2) 
console.log (resultado2)

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
     return Math.round(num);
} 
var resultado3 = redondearNumero (6.60)
console.log (resultado3)
function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
     return Math.ceil (num);
}
var resultado4 = redondearHaciaArriba (4.10)
console.log (resultado4)

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
return Math.random ()
}
var resultado = numeroRandom ()
console.log (resultado)
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
