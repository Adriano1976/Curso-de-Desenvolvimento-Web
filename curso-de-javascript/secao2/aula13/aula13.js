//               01234567
let umaString = "um texto";
let umaString1 = "O rato roeu a roupa do rei de roma.";

console.log(umaString[4])
console.log(umaString.charAt(6));
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`); // Melhor forma de contatenação
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3));
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/x/));
console.log(umaString.replace('um', 'Outra'));
console.log(umaString.replace(/um/, 'Outra'));
console.log(umaString1.replace(/r/g, '#'));
console.log(umaString1.length); // Conta quantas String tem dentro da variável.
console.log(umaString1.slice(2, 6));
console.log(umaString1.slice(-5, -1));  // Fatiando uma String, sendo essa a melhor.
console.log(umaString1.substring(umaString1.length - 5, umaString1.length - 1)); // Fatiando uma String.
console.log(umaString1.split(' '));
console.log(umaString1.toUpperCase());
console.log(umaString1.toLowerCase());