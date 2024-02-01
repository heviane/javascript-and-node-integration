# Docs

Breve explicação sobre formas de realizar requisições HTTP com Javascript no frontend.

## fetch()

O fetch() é uma função do JavaScript usada para fazer requisições de rede,geralmente para buscar ou enviar dados para um servidor web.

É comumente usado para fazer solicitações HTTP assíncronas, como buscar informações de uma API.

Quando você usa fetch(), está iniciando uma requisição de rede e obtendo uma **Promise** (promessa) como resultado. Essa Promise é então tratada para processar a resposta da requisição, seja para exibir dados no frontend, enviar informações para o servidor, ou realizar outras operações relacionadas à rede.

Em resumo, fetch() é uma ferramenta poderosa para lidar com comunicação entre o frontend e o backend em desenvolvimento web.

## Promise

Uma **Promise** é um objeto que representa a conclusão (ou falha) de uma operação assíncrona. Ela é utilizada para lidar com código assíncrono de maneira mais estruturada.

Uma Promise pode estar em um dos três estados:

1. **Pending (Pendente):** O estado inicial, quando a Promise está aguardando a conclusão ou falha da operação.

2. **Fulfilled (Realizada):** A operação assíncrona foi bem-sucedida, e a Promise retorna um valor.

3. **Rejected (Rejeitada):** A operação assíncrona falhou, e a Promise retorna um motivo (erro).

Você pode encadear "then" para lidar com o resultado bem-sucedido e "catch" para lidar com falhas. Promises ajudam a tornar o código assíncrono mais legível e manejável.

## XMLHttpRequest

O **XMLHttpRequest** é um objeto que permite fazer requisições HTTP assíncronas a um servidor. Ele é amplamente utilizado para carregar dados de um servidor web sem precisar recarregar a página inteira. O XMLHttpRequest suporta tanto requisições síncronas quanto assíncronas, sendo esta última mais comum.

De forma resumida, o XMLHttpRequest é utilizado para enviar e receber dados entre o navegador e o servidor web sem recarregar a página, facilitando a criação de aplicativos web mais dinâmicos e responsivos.

É uma técnica antiga, no entanto, é importante notar que **fetch()** é mais moderno, mais fácil de usar e geralmente preferido em projetos recentes de desenvolvimento web.
