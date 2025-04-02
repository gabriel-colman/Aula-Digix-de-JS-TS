import { Animal } from "./Animal.js";

export class Arara extends Animal {
    constructor(nome, raca, peso, idade, cor) {
        super(nome, raca, peso, idade); // chama o construtor da classe pai
        this.cor = cor;
    }

    // Sobrescreve o método procriar da classe pai
    procriar() {
        console.log("Arara botou ovos");
    }
}