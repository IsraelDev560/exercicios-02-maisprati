// 47. Crie uma função que transforme um objeto de entrada aplicando uma função
// fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
// resultados.
function transforme(objeto) {
   let transformado = {}
   objeto.forEach(atributo => {
         transformado[atributo.nome] = atributo.nome.toUpperCase();
   });
   
   return transformado;
}

let objeto = [
   {nome: "Carlos", idade: 22},
   {nome: "José", idade: 40},
   {nome: "Paulo", idade: 25}
];

console.log(transforme(objeto))