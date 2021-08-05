// Objeto Math
let num1 = 9.54578;
console.log('Número não arredondado: ',num1 )
let num2 = Math.floor(num1);  // Método floor: Arredonda para baixo o valor.
let num3 = Math.ceil(num1); // Método ceil: Arredonda para cima o valor.
let num4 = Math.round(num3); // Método round: Arredonda para o mais próximo.
console.log('Número arredondado para baixoo usando o método "floor": ',num2);
console.log('Número arredondado para cima usando o método "ceil".', num3);
console.log('Número arredondado para o mais próximo usando o método "round".',num4);
// Método max: Seleciona o maior número.
console.log('Número máximo escolhido entre (1,2,3,4,5,-10,-50, 1500,9,45,75) usando o método "max" foi: ', 
Math.max(1,2,3,4,5,-10,-50, 1500,9,45,75)); 
// Método min: Seleciona o menor número.
console.log('Número mínimo escolhido entre (1,2,3,4,5,-10,-50, 1500,9,45,75) usando o método "min" foi: ',
Math.min(1,2,3,4,5,-10,-50, 1500,9,45,75)); 
// Método random: Cria número aleatório
const aleatório = Math.random();
const aleatório1 = Math.random(Math.random() * (10 - 5) + 5);
console.log('Número aleatório criado pelo método "random": ',aleatório);
console.log('Numero aleatório criado * (10 - 5) + 5) usando método "random:".',aleatório1);
// Encontrar raiz quadrada: número ** 0.5 = resultado
let num5 = 250;
console.log('Raiz quadrada de ',num5,'é',num5 ** 0.5,'.');