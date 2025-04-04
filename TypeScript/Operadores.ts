// Instalando o TypeScript
// npm install -g typescript
// tsc --version
// Comando para atualizar o TypeScript
// npm update -g typescript

// Operadores em TypeScript
// Operadores Aritméticos
let a: number = 10; // são os tipos primitivos do TypeScript é igual ao do JavaScript
let b: number = 5;
let totalSoma: number = a + b; // soma
let totalSubtracao: number = a - b; // subtração
let totalMultiplicacao: number = a * b; // multiplicação
let totalDivisao: number = a / b; // divisão
let totalResto: number = a % b; // resto da divisão

console.log(`Soma: ${totalSoma} + Subtração: ${totalSubtracao} + Multiplicação: ${totalMultiplicacao} + Divisão: ${totalDivisao} + Resto: ${totalResto}`);

// Operadores de texto
let nome: string = "Lucas";
let sobrenome: string = "Silva";
let textoConcatenado: string = nome + sobrenome; // concatenação de strings
console.log(`Nome completo: ${textoConcatenado}`);
let textoRepetido: string = nome.repeat(3); // repetição de strings
console.log(`Nome repetido: ${textoRepetido}`);

// Opeeradores de comparação
let comparacao1: boolean = a == b; // comparação de igualdade
let comparacao2: boolean = a != b; // comparação de desigualdade
let comparacao3: boolean = a === b; // comparação de igualdade estrita
let comparacao4: boolean = a !== b; // comparação de desigualdade estrita   
console.log(`Comparação 1: ${comparacao1} + Comparação 2: ${comparacao2} + Comparação 3: ${comparacao3} + Comparação 4: ${comparacao4}`);

// Operadores de comparação com logicos
let comparacao5: boolean = a > 0 && b > 0; // comparação de maior que
let comparacao6: boolean = a < 0 || b < 0; // comparação de menor que
let comparacao7: boolean = !(a > 0); // comparação de negação
console.log(`Comparação 5: ${comparacao5} + Comparação 6: ${comparacao6} + Comparação 7: ${comparacao7}`);



// Comando para poder executar o codigo em TypeScript direto, sem precisar criar o arquivo .js, é ts-node
// npm install -g ts-node
// npx tsc --init
//  ts-node Operadores.ts

// Diferença de tsc e ts-node 
// tsc - compila o arquivo TypeScript para JavaScript
// ts-node - executa o arquivo TypeScript diretamente, sem precisar compilar para JavaScript