/**
 * Exercícios - Const e Let
 * Adriano Santos tem 45 anos, pesa 73 kg
 * tem 1.80 de altura e seu IMC é de 25.9259...
 * Adriano Santos nasceu em 1976.
 */
const nome = 'Adriano';
const sobrenome = 'Santos';
const idade = 45;
const peso = 73;
const alturaEmM = 1.80;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);  // peso / (altura * altura)
let anoNascimento = 2021 - 45;

// console.log(imc);
// console.log(anoNascimento);

console.log('.....................................................................')
console.log(nome, sobrenome, 'tem', idade, 'anos e pesa', peso, 'Kg.');
console.log('Ele tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, sobrenome, 'nasceu em', anoNascimento, '.');
console.log('.....................................................................');

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} Kg.`);
console.log(`Ele tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
console.log('....................................................................');