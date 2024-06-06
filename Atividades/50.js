// 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
// deverá ser capaz de interagir com o usuário através do console do navegador e manter
// um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
// informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
// 1. Estrutura de Dados:
// ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
// cidade, quartos totais e quartos disponiveis.
// ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
// nomeCliente.
// 2. Funcionalidades:
// ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
// ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
// disponíveis em uma cidade específica.
// ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
// deve diminuir o número de quartos disponiveis do hotel.
// ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
// aumentar o número de quartos disponiveis no hotel correspondente.
// ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
// cliente.
// 3. Regras de Negócio:
// ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
// ○ As reservas devem ser identificadas por um ID único e associadas a um
// único hotel.
// 4. Desafios Adicionais (Opcionais):
// ○ Implementar uma função de check-in e check-out que atualize a
// disponibilidade de quartos.
// ○ Gerar relatórios de ocupação para um hotel.
// ○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
// avaliações dentro do objeto do hotel.

const prompt = require("prompt-sync")();
let hoteis = [
    { id: 1, nome: "Ibis", cidade: "FSA", quartos_totais: 5, quartos_disponiveis: 2 },
    { id: 2, nome: "CAJU DE OURO", cidade: "SSA", quartos_totais: 88, quartos_disponiveis: 65 },
    { id: 3, nome: "PALACE", cidade: "FSA", quartos_totais: 50, quartos_disponiveis: 20 },
    { id: 4, nome: "ATMOSFERA", cidade: "SSA", quartos_totais: 15, quartos_disponiveis: 8 },
];
let reservas = [];
let ultimoIdHotel = 0;
let ultimoIdReserva = 0;

function menu() {
    console.log(`---- Menu ---- \n1 - Adicionar Hotel\n2 - Buscar Hoteis por cidade \n3 - Fazer Reservas \n4 - Cancelar Reservas`);
}

function adicionarHotel() {
    let condicao = true;
    do {
        let pergNome = prompt("Digite o nome do hotel: ").toUpperCase();
        let pergCidade = prompt("Digite o nome da cidade: ").toUpperCase();
        let pergQuartosTotais = parseInt(prompt("Digite o total dos quartos: "));
        let pergQuartosDisponiveis = parseInt(prompt("Digite o número de quartos disponiveis: "));
        let id = ++ultimoIdHotel;
        let novoHotel = { id: id, nome: pergNome, cidade: pergCidade, quartos_totais: pergQuartosTotais, quartos_disponiveis: pergQuartosDisponiveis };
        hoteis.push(novoHotel);
        console.log(hoteis);
        let pergunta = prompt("Deseja continuar? ").toLowerCase();
        if (pergunta === 'nao' || pergunta === 'não') {
            condicao = false;
        }
    } while (condicao)
}

function buscarHoteisPorCidade() {
    let pergCidade = prompt("Digite a cidade que deseja procurar: ").toUpperCase();
    let result = [];
    for (let city of hoteis) {
        if (pergCidade === city.cidade.toUpperCase()) {
            result.push(city);
        } 
    }
    if (result.length === 0) {
        console.log("Cidade não encontrada.")
    }
    console.log(result);
}

function fazerReservas() {
    let condicao = true;
    do {
        let pergId = parseInt(prompt("Digite o id do hotel: "));
        let pergNomeCliente = prompt("Digite o nome do cliente: ");
        hoteis.find(pergId)
        if (hoteis.quartos_disponiveis > 0) {
            let id = ++ultimoIdReserva;
            quartos_disponiveis--;
            let reserva = { IdReserva: id, id: pergId, nome: pergNomeCliente }
            reservas.push(reserva);
        } else {
            console.log("Erro")
        }
        let pergunta = prompt("Deseja continuar? ").toLowerCase();
        if (pergunta === 'nao' || pergunta === 'não') {
            condicao = false;
        }
    } while (condicao)
}

function main() {
    let condicaoExecucao = true;
    menu();
    do {
        let opcao = parseInt(prompt("******* Escolha a opção: "));
        switch (opcao) {
            case 1:
                adicionarHotel();
                break;
            case 2:
                buscarHoteisPorCidade();
                break;
            case 3:
                fazerReservas();
                break;
            case 4:

                break;
            default:
                console.log("Opção não encontrada.");
        }
        let opcaoContinuar = prompt("Deseja Voltar ao menu? (Digite apenas 'sim' ou 'nao') ").toLowerCase();
        if (opcaoContinuar === 'sim') {
            menu();
        }
        if (opcaoContinuar === 'nao') {
            condicaoExecucao = false;
        }
    } while (condicaoExecucao);
}
main();