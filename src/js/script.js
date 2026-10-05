// DECLARAÇÕES (= -> Atribuição)
let nome = "FIAP";
const idade = 30;
let altura = 1.75;
let estudante = true;

console.log(typeof nome); // console.log = print Python
console.log(typeof idade);
console.log(typeof altura);
console.log(estudante);

// MÉTODOS DE EXIBIÇÃO
// alert("Bem-vindo ao Sistema")

// let nomeUsuario = prompt("Qual é o nome do usuário?")
// `` ${} = concatenação
// console.log(`Olá, ${nomeUsuario}`)

// let desejaContinuar = confirm("Deseja realmente continuar? ")
// console.log("Resposta", desejaContinuar)

// OPERADORES (Aritméticos, Comparação e Lógicos)
// ARITMÉTICOS
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

// COMPARAÇÃO
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

// ESTRUTURA CONDICIONAL (if, else, if else, switch case, if encadeado, ternário)
// IF
if(true){
    console.log("É VERDADEIRO")
}

// IF e ELSE
if(true){
    console.log("Verdadeiro")
}

else{
    console.log("Falso")
}

// IF, IF ELSE e ELSE - ENCADEADO
let nota = 7;

if (nota >= 8){
    console.log("Aprovado com sucesso!")
}

else if (nota >= 6){
    console.log("Ficou de exame")
}

else{
    console.log("Reprovado")
}

// SWITCH CASE
let diaSemana = 3;

switch(diaSemana){

    case 1:
        console.log("Segunda-feira")
        break;
        
    case 2:
        console.log("Terça-feira")
        break;
    
    case 3:
        console.log("Quarta-feira")
        break;

    default:
        console.log("Outro dia")
}

// TERNÁRIO
let notaUsuario = (nota >= 6) ? "Aprovado": "Reprovado"; // ? (IF) e : (ELSE) -> Se nota maior ou igual a 6 "Aprovado", senão "Reprovado"
console.log(notaUsuario)

let idade1 = 18;
let podePilotar = idade1 >= 18 ? "Pode pilotar": "Não pode pilotar";
console.log(podePilotar)

// TERNÁRIO IF e ELSE - ENCADEADO ou ANINHADO
// Verificar o resultado do jogador
let resultado = 10;
let jogador = resultado <= 20 ? "Jogo Bom":
            resultado > 20 && resultado < 99 ? "Jogo Médio":
            resultado > 100 ? "Jogo Alto": "Extraordinário";
console.log(jogador)

// Exibir o nome do Dev
// let nomeDev = prompt("Qual o seu nome? ")
// let mensagem = nomeDev ? `Olá, dev ${nomeDev}`: "Você não digitou";
// console.log(mensagem)

// ESTRUTURA DE REPETIÇÃO
// FOR
for(let numero = 0; numero <= 10; numero ++){  // Outro caso -> numero --
// LET -> Declaração / Número = Variável
// let numero = 1; -> Declaração
// numero <= 10; -> Operação
// numero ++ -> Incremento
    console.log(`Contagem de números ${numero}`)
}