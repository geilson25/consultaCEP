# Projeto de Consulta de CEP

Este é um projeto simples que permite aos usuários consultar informações de endereço com base em um CEP fornecido. O projeto é desenvolvido usando HTML, CSS e JavaScript e faz uso da API ViaCEP para obter os dados do endereço.

## Como funciona

O funcionamento do projeto é direto:

1. O usuário acessa a página e encontra um campo de entrada onde pode inserir um CEP.
2. Após inserir um CEP válido, o usuário clica no botão "Consultar".
3. O JavaScript faz uma solicitação para a API ViaCEP com o CEP fornecido.
4. Se a resposta da API for bem-sucedida (status 200), o JavaScript exibe os dados do endereço na página, incluindo logradouro, bairro, cidade e estado.
5. Se o CEP não for encontrado ou se houver algum erro na consulta, uma mensagem apropriada é exibida na página.

## Arquivos do Projeto

- `index.html`: O arquivo HTML que contém a estrutura da página, o campo de entrada de CEP e os elementos de exibição de resultados. Ele também inclui o arquivo JavaScript `script.js` e os estilos CSS.

- `css/style.css`: O arquivo CSS que fornece estilos para a página, tornando-a visualmente agradável e responsiva.

- `js/script.js`: O arquivo JavaScript que lida com a lógica de consulta de CEP. Ele faz solicitações para a API ViaCEP, processa os resultados e os exibe na página.

## Como Executar o Projeto

Para executar o projeto localmente, siga estas etapas:

1. Clone ou baixe este repositório para a sua máquina.

2. Abra o arquivo `index.html` em um navegador da web.

3. Insira um CEP válido no campo de entrada e clique no botão "Consultar".

4. Os resultados serão exibidos na página, ou uma mensagem de erro será exibida, conforme a resposta da API ViaCEP.

## API ViaCEP

O projeto faz uso da API ViaCEP para obter informações de endereço com base no CEP fornecido. A API ViaCEP é uma API pública e gratuita amplamente utilizada para esse propósito. Ela fornece dados de endereço para CEPs válidos no Brasil.

Para saber mais sobre a API ViaCEP e seus recursos, consulte [ViaCEP](https://viacep.com.br/).

## Autor

- Geilson Fidelis
- GitHub: [geilson25](https://github.com/geilson25)

Este projeto foi criado como parte do aprendizado em desenvolvimento web e pode ser usado como um exemplo simples de como interagir com APIs e exibir resultados dinâmicos em uma página da web. Sinta-se à vontade para usá-lo como referência ou ponto de partida para projetos semelhantes.
