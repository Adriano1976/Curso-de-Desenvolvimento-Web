let num1 = 1500; // number
let num2 = 2.5 // number
let num3 = 10.584954866486 // number
let num4 = 10;
let temp = num4 * '5';
let num5 = 0.7;
let num6 = 0.11246246726754956;
num5 += num6; // 0.8
num5 += num6; // 0.9
num5 += num6; // 1.0

// console.log(num1.toString() + num2);
// num1 = num1.toString();
// console.log(num1.toString(2));
// console.log(num3.toFixed(2));
// console.log(Number.isInteger(num4));
// console.log(Number.isNaN(temp));

console.log('Valor impreciso:', num6); // Valor impreciso.
num6 = Number(num6.toFixed(2)); // "toFixed" resolve imprecisões de valores.
console.log('Valor preciso com 2 casas decimais:', num6);
console.log('Mostrar o valor ao usuário com 2 casas decimais: ', num3.toFixed(2));
console.log(Number.isInteger(num5));

