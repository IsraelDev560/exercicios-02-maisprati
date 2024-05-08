/*
 Para executar estas funções, rode o programa e seleciona a opção 1 ou 2.
 Para sair da funcão digite 'nao', e o programa vai parar.
*/
const prompt = require('prompt-sync')();
function menu() {
    console.log(`--- Menu --- \n1 - Primeiro Metodo\n2 - Utilizando forEach`)
}

menu();
main();
function main() {
    let condicaoExecucao = true;
    do {
        let opcao = parseInt(prompt("******* Escolha a opção: "))
        switch (opcao) {
            case 1:
                utilizandoMetodos();
                break;
            case 2:
                utilizandoForEach();
                break;
            default:
                console.log("operação invalida!")
        }
        opcao = prompt("Deseja continuar ? (Digite apenas 'sim' ou 'nao') ").toLowerCase();
        if (opcao === 'nao') {
            condicaoExecucao = false;
        }
    } while (condicaoExecucao)

    function utilizandoMetodos() {
        // 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
        // final, mostre quais são os números pares que foram digitados e em que posições eles
        // estão armazenados.

        const prompt = require('prompt-sync')();
        const vetor = [];
        let numerosPares = [];
        var posicoes = [];

        for (let i = 1; i <= 10; i++) {
            let numero = parseInt(prompt("Digite um número: "));
            vetor.push(numero);
            if (numero % 2 === 0) {
                numerosPares.push(numero);
                posicoes.push(vetor.indexOf(numero));
            }
        }
        console.log("\n");
        console.log(`Vetor completo: ${vetor}`);
        console.log(`Os Números pares são: ${numerosPares}`);
        console.log(`As posições dos números pares são: ${posicoes}`);
        console.log("\n");
    }


    function utilizandoForEach() {
        // 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
        // final, mostre quais são os números pares que foram digitados e em que posições eles
        // estão armazenados.

        const prompt = require('prompt-sync')();

        const vetor = [];
        let retornoPares = [];
        let retornoPosicoes = [];

        for (let i = 1; i <= 10; i++) {
            let numero = parseInt(prompt("Digite um número: "));
            vetor.push(numero);
        }
        vetor.forEach((numero, posicoes) => {
            if (numero % 2 === 0) {
                retornoPares.push(numero);
                retornoPosicoes.push(posicoes);
            }
        });
        console.log("\n");
        console.log(`Vetor completo: ${vetor}`);
        console.log(`Os Números pares são: ${retornoPares}`);
        console.log(`As posições são: ${retornoPosicoes}`);
        console.log("\n");
    }
}