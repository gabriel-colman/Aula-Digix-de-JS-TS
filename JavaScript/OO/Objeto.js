// Criar um objeto em JavaScript é muito simples, basta criar uma variável e atribuir a ela um objeto com chaves e valores. Veja o exemplo:
let carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2010,
    PaisdeOrigem: { // Objeto dentro do objeto
        pais: "Brasil",
        cidade: "São Paulo"
    },
    // Contruindo uma funcao
    ligar: function () {
        console.log("Ligando o carro");
    },
}

console.log(carro);
console.log(carro.toString());
console.log(carro.ligar()); // aqui vai imprimir mas no final vai aparecer undefined
carro.ligar(); // aqui vai imprimir e não vai aparecer undefined


// Modificar os valores dentro objeto
carro.marca = "Ford";
carro.modelo = "Ka";
console.log(carro);

// Deletando propriedades do objeto
delete carro.ano;
console.log(carro);

// Alguns operadores do objeto
console.log('marca' in carro); 


