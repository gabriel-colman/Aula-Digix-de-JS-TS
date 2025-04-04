// Criar função type
type Funcao = (a: number, b: number) => number; // definindo o tipo da função
// Criar função baseada no type
const funcao: Funcao = (a, b) => {
    return a + b;
}

// Função normal
function soma(a: number, b: number): number {
    return a + b;
}

// Arrow function, que é uma função anônima atribuída a uma variável
const somaArrow: Funcao = (a, b) => a + b;

// Função anônima, que é uma função sem nome, atribuída a uma variável
const somaAnonima: Funcao = function (a, b) {
    return a + b;
}
// Função com retorno implícito
const somaRetornoImplicito: Funcao = (a, b) => a + b;
// Função com parâmetros opcionais
function somaComParametrosOpcionais(a: number, b?: number): number {
    if (b) {
        return a + b;
    }
    return a;
}

console.log(soma(1, 2)); // 3


// Vamos executar esse arquivo usando a ferramnta deno, que é uma ferramenta de execução de código TypeScript
// Instarlar o deno: iwr https://deno.land/install.ps1 -useb | iex
// Executar: deno run Funcao.ts
// Executar com permissões: deno run --allow-read Funcao.ts