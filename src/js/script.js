// Declarações (= -> Atribuição)
let nome = "FIAP";
const idade = 30;
let altura = 1.75;
let estudante = true;

console.log(typeof nome); // console.log = print Python
console.log(typeof idade);
console.log(typeof altura);
console.log(estudante);

// // MÉTODOS DE EXIBIÇÃO
// alert("Bem-vindo ao Sistema")

// let nomeUsuario = prompt("Qual é o nome do usuário?")
// // `` ${} = concatenação
// console.log(`Olá, ${nomeUsuario}`)

// let desejaContinuar = confirm("Deseja realmente continuar? ")
// console.log("Resposta", desejaContinuar)

// Operadores (Aritméticos, Comparação e Lógicos)
// Aritméticos
let soma = 10 + 5;
console.log(soma)
let multiplicacao = 4 * 2;
console.log(multiplicacao)
let subtracao = 10 - 5;
console.log(subtracao)
let resto = 10 % 3;
console.log(resto)
let divisao = 5 / 3;
console.log(divisao)

// Comparação
let a = 10;
let b = "10";

// = -> atribuir
// == -> compara o valor
// === -> compara valor e o tipo da variável

console.log(a == b) // Compara o valor independente da variável
console.log(a === b) // Compara e valida
console.log(a > b) // Maior
console.log(a >= b) // Maior igual
console.log(a != b) // Diferente
console.log(a < 10)
console.log(b < a && a > b) // Operador (AND &&) - As duas operações tem que ser TRUE
console.log(a > 20 || b >= a) // Operador (OR ||) - Uma das operações tem que ser TRUE

let temIdade = 20;
let habilitacao = true;

let dirigir = (temIdade >= 18) && habilitacao;
console.log("O usuário pode dirigir?", dirigir)




