# Sobre

Estes documento README tem como objetivo fornecer as informações necessárias para realização do projeto Empresas.

# 🏗 O que fazer?

- Você deve realizar um fork deste repositório e, ao finalizar, enviar o link do seu repositório para a nossa equipe. Lembre-se, NÃO é necessário criar um Pull Request para isso, nós iremos avaliar e retornar por email o resultado do seu teste.

# 🚨 Requisitos

- Seu projeto deverá ser construído utilizando **ReactJS** ou **Angular**.
- Seu projeto deverá ser construído utilizando o layout disponibilizado na descrição do teste.
- A integração com a API deve ser feita respeitando todos os contratos de OAuth.
- Projetos utilizando **ReactJS** serão aceitos testes somente em **JavaScript** buscando avaliar o entendimento completo da linguagem e não de estruturas ou dependências que abstraiam determinadas definições não alheias ao ECMAScript.

# 🕵🏻‍♂️ Itens a serem avaliados

- Estrutura do Projeto
- Boas práticas da Linguagem/Framework
- Integração com API
- Bibliotecas utilizadas
- Estilização dos componentes
- Persistência de login
- Layout responsivo
- Friendly URL
- Seu projeto deverá seguir tudo o que foi exigido na seção [O que desenvolver?](##--o-que-desenvolver)

# 🎁 Extra

Esses itens não são obrigatórios, porém desejados.

- Testes unitários
- SEO
- Linter
- Code Formater
- Documentação de componente

# 🖥 O que desenvolver?

Você deverá construir um projeto utilizando o layout proposto

- Login e acesso de Usuário já registrado
  - Para o login usamos padrões OAuth 2.0. Na resposta de sucesso do login a api retornará 3 custom headers (access-token, client, uid);
  - Para ter acesso as demais APIS precisamos enviar esses 3 custom headers para a API autorizar a requisição;
- Listagem de Empresas
- Detalhamento de Empresas

# 🔗 Links e Informações Importantes

## Layout

- Layout e recortes disponíveis no Zeplin
- https://app.zeplin.io/
- **usuário:** teste_web
- **senha:** teste_ioasys

## Integração com API

- A documentação da API está disponível a partir de uma collection para Postman (https://www.getpostman.com/apps) neste repositório. Para utilizar a collection, vá até o postman e import a colllection que está disponível neste repositório, assim você terá acesso as documentação da API.

- **Servidor:** http://empresas.ioasys.com.br
- **Versão da API:** v1
- **Usuário de Teste:** testeapple@ioasys.com.br
- **Senha de Teste:** 12341234
