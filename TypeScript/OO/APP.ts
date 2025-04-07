import { Pessoa } from "./Pessoa";
import { Corrente, Poupanca } from "./Conta";

function main() {
    try {
        // Criando uma nova pessoa
        const cliente1 = new Pessoa("João", 30);
        const cliente2 = new Pessoa("Maria", 25);

        // Criando uma conta corrente
        const contaCorrente = new Corrente(cliente1, 1000, 500);
        const contaPoupanca = new Poupanca(cliente2, 2000, 0.5);

        // Operações financeiras
        contaCorrente.depositar(500);
        contaCorrente.sacar(1500);
        console.log(contaCorrente.exibirDados()); // Exibe dados da conta corrente

        contaPoupanca.aplicarRendimento();
        contaPoupanca.sacar(300);
        console.log(contaPoupanca.exibirDados()); // Exibe dados da conta poupança
    } catch (error: any) { // Caputra erros com qualquer tipo
        console.error("Erro:", error.message);
    }
}

main(); // Chama a função principal para executar o código