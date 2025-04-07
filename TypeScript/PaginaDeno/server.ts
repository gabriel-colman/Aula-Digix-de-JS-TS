//  Vou utilizar o Deno para criar um servidor HTTP simples
import { serve } from "https://deno.land/std@0.207.0/http/file_server/mod.ts"; //Ele importa o módulo de servidor de arquivos do Deno, com a função serve

Deno.serve(async (req) => {
    return await serve(req, { // await ele usado para espera resposta do servidor
        fsRoot: "./public", // O diretório público onde os arquivos estão localizados
        urlRoot: "", // O diretório raiz da URL
        showDirListing: true, // Exibir listagem de diretório
    });
}); // O ponto e vírgula no final é opcional, mas é uma boa prática para evitar erros em alguns casos.

// deno run --allow-net server.ts
// O comando acima é usado para executar o arquivo server.ts com permissões de rede. O Deno exige permissões explícitas para acessar recursos do sistema, como rede, arquivos e ambiente. A flag --allow-net permite que o script acesse a rede, o que é necessário para criar um servidor HTTP. Sem essa permissão, o Deno não permitirá que o script escute solicitações de rede.