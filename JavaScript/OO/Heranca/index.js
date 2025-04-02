import { Animal } from "./Animal.js";
import { Cobra } from "./Cobra.js";
import { Arara } from "./Arara.js";

const animal = new Animal("Animal", "Raca", 10, 5);
const cobra = new Cobra("Cobra", "Raca", 10, 5, "Verde");
const arara = new Arara("Arara", "Raca", 10, 5, "Azul");

console.log(cobra);

// comando o package.json é npm init -y