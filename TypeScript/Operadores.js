// Instalando o TypeScript
// npm install -g typescript
// tsc --version
// Comando para atualizar o TypeScript
// npm update -g typescript
// Operadores em TypeScript
// Operadores Aritméticos
var a = 10; // são os tipos primitivos do TypeScript é igual ao do JavaScript
var b = 5;
var totalSoma = a + b; // soma
var totalSubtracao = a - b; // subtração
var totalMultiplicacao = a * b; // multiplicação
var totalDivisao = a / b; // divisão
var totalResto = a % b; // resto da divisão
console.log("Soma: ".concat(totalSoma, " + Subtra\u00E7\u00E3o: ").concat(totalSubtracao, " + Multiplica\u00E7\u00E3o: ").concat(totalMultiplicacao, " + Divis\u00E3o: ").concat(totalDivisao, " + Resto: ").concat(totalResto));
// Operadores de texto
var nome = "Lucas";
var sobrenome = "Silva";
var textoConcatenado = nome + sobrenome; // concatenação de strings
console.log("Nome completo: ".concat(textoConcatenado));
var textoRepetido = nome.repeat(3); // repetição de strings
console.log("Nome repetido: ".concat(textoRepetido));
// Comando para poder executar o codigo em TypeScript direto, sem precisar criar o arquivo .js, é ts-node
// npm install -g ts-node
// npx tsc --init
//  ts-node Operadores.ts
// Diferença de tsc e ts-node 
// tsc - compila o arquivo TypeScript para JavaScript
// ts-node - executa o arquivo TypeScript diretamente, sem precisar compilar para JavaScript
