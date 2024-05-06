// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const prompt = require("prompt-sync")();

let quantidadeCigarros = parseInt(prompt("Qual a quantidade de cigarros que você fuma por dia? "));
let anosFumando = parseInt(prompt("À quantos anos você fuma? "));

let perdaPorDia = quantidadeCigarros * 10; // 10 minutos perdidos por cigarro
let perdaPorAno = perdaPorDia * 365;
let perdaTotal = perdaPorAno * anosFumando;

console.log("Você perderá aproximadamente " + perdaTotal + " dias de vida devido ao hábito de fumar.");

