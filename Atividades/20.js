// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).

const funcionarios = [];

const prompt = require('prompt-sync')();
let condicao = true;

while (condicao) {
    let matricula = parseInt(prompt("Digite o número da sua matricula: "));
    let nome = prompt("Digite o seu nome: ");
    let salarioBruto = parseInt(prompt("Digite o seu salário: "));
    let pergunta = prompt('Deseja continuar? (sim/nao): ').toLowerCase();
    console.log("\n")
    if (pergunta === 'nao') {
        condicao = false;
    }
    const INSS = 0.12;
    let salarioLiquido = salarioBruto * INSS;
    let resultado = salarioBruto - salarioLiquido;
    funcionarios.push({ matricula: matricula, nome: nome, salarioBruto: salarioBruto, descontoINSS: salarioLiquido+"R$ equivalente a 12% de desconto do INSS", salarioLiquido: resultado });
}
console.log(funcionarios)