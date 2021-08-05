// Diferença entre Var vs Let

/**
 * A variável 'Var' pode ser declarada quantas vezes quiser sem dar erro, 
 * pois a mesma vai imprimir o último objeto qua foi declarado.
 */

var nome = 'Adriano';
var nome = 'Santos';
console.log(nome);

/**
 * A variável 'Let' pode ser declara uma vez, pois se a mesma variável for declarada
 * mais de uma vez, dara erro no sistema. Portanto, cada variável declarada com 'let' 
 * deve ter um único nome e ter uma única declaração.
 */

let nombre = 'Neide';
let sobreNombre = 'Ferreira';
console.log(`${nombre} ${sobreNombre}`);
