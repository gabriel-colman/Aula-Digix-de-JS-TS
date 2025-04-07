import { Pessoa } from "./Pessoa";

export class Conta {
    protected titular: Pessoa; // propriedade protegida
    protected saldo: number; // propriedade protegida

    // Construtor que inicializa as propriedades
    constructor(titular: Pessoa, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    // Metodo para deposito
    public depositar(valor: number): void {
        if (valor <= 0) throw new Error("Valor de depósito deve ser positivo.");
        this.saldo += valor;
    }

    // Metodo para saque
    public sacar(valor: number): void {
        if (valor <= 0) throw new Error("Valor de saque deve ser positivo.");
        if (valor > this.saldo) throw new Error("Saldo insuficiente.");
        this.saldo -= valor;
    }


    // Metodo de polimorfismo de exibir dados
    public exibirDados(): string {
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}`;
    }

}

// Classe Poupanca que herda de Conta
export class Poupanca extends Conta {
    private taxaRendimento: number; // propriedade privada

    // Construtor que inicializa as propriedades
    constructor(titular: Pessoa, saldo: number, taxaRendimento: number) {
        super(titular, saldo); // Chama o construtor da classe pai
        this.taxaRendimento = taxaRendimento;
    }

    // Aplica rendimento ao saldo
    public aplicarRendimento(): void {
        this.saldo += this.saldo * (this.taxaRendimento / 100);
    }

    // Polimorfismo de subescrever o método 
    public override exibirDados(): string { // override é opcional, mas é uma boa prática
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}, Rendimento: ${this.taxaRendimento}%`;
    }

}

export class Corrente extends Conta {
    private limiteChequeEspecial: number; // propriedade privada

    // Construtor que inicializa as propriedades
    constructor(titular: Pessoa, saldo: number, limiteChequeEspecial: number) {
        super(titular, saldo); // Chama o construtor da classe pai
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public override sacar(valor: number): void {
        if (valor > this.saldo + this.limiteChequeEspecial) {
            throw new Error("Valor de saque excede o limite do cheque especial.");
        }
        this.saldo -= valor;
    }

    public override exibirDados(): string { // override é opcional, mas é uma boa prática
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}, Limite Cheque Especial: ${this.limiteChequeEspecial}`;
    }
}
