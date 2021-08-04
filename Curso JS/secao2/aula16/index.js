// Array - Básico
const alunos = ['Luiz','Maria','João'];
console.log(alunos);
alunos[alunos.length] = 'Adriano'; // Adiciona no final.
console.log(alunos);
alunos[alunos.length] = 'José'; // Adiciona no final.
console.log(alunos);
alunos.push('Maria'); // Adiciona no final.
console.log(alunos);
alunos.push('Rafaela'); // Adiciona no final.
console.log(alunos.length);
alunos[0] = 'Eduardo'; // Altera
alunos[3] = 'Carlota'; // Adicionando
console.log(alunos);
console.log(alunos[0]); 
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos);
alunos.unshift('Waltemir');
alunos.unshift('Laura');
console.log(alunos);
const removido = alunos.pop();
console.log(alunos);