let pessoa = {
    nome: "Lucas"
}

let pessoa2 = { 
}

// palavras reservadas no Js
console.log(Object.getOwnPropertyDescriptors(pessoa)); // Mostra os atributos e métodos do objeto

// Assign, ele faz uma cópia do objeto
Object.assign(pessoa2, pessoa); // copia o objeto pessoa para pessoa2

// Agora desestruturar um objeto, criando variáveis
let conifg = {
    ip: '127.0.0.1',
    port: '8080',
    block: true,
}
let { ip, port, block } = conifg; // desestrutura o objeto
console.log(ip, port, block); // imprime os valores das variáveis

// Desestruturar um array
let lista = ['Lucas', 'Maria', 'João'];
let [nome1, nome2, nome3] = lista; // desestrutura o array

console.log(nome1, nome2, nome3); // imprime os valores das variáveis

// Desestruturar um array com o rest operator
let lista2 = ['Lucas', 'Maria', 'João', 'José'];
let [nome4, ...resto] = lista2; // desestrutura o array

console.log(nome4); // imprime o primeiro nome

console.log(resto); // imprime o resto do array