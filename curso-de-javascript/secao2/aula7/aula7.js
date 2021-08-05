// Não podemos criar constantes com palavras reservadas.
// Constantes precisam ter nome significativo.
// Não pode começar o nome de uma constante com um número.
// As constantes não podem conter espaços ou traços.
// Utilizamos camelCase em palavras compostas em constante.
// Utilizamos case-sentitive em palavras em constante.
// Não podemos modificar o valor de uma constante.
// Não utilize 'var', mas utilize 'CONST'.

const primeiroNumero = 5; // Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);
console.log(typeof primeiroNumero);
console.log(primeiroNumero + segundoNumero);
console.log(typeof (primeiroNumero + segundoNumero));
