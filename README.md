# Empresas Web


> Teste técnico para vaga de Desenvolvedor Frontend React. :clipboard:


## Observações
Observações sobre o desenvolvimento do projeto:

- Busquei utilizar mais importações nomeias a fim de promover uma maior consistência nas importações do projeto, segue o [link](https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/) do artigo sobre o tema, do criado do ESlint, Nicholas C. Zakas.

- No desenvolvimento dos testes, busquei utilizar os conceitos do Kent C Dodds para o seu desenvolvimento, um deles foi evitar testes aninhados, segue o [link](https://kentcdodds.com/blog/avoid-nesting-when-youre-testing/) do post.

- Para os icones, busquei utilizar SVG.

- A estilização foi feita inicialmente "pixel perfect", porém as proporções não estavam boas, logo adaptei mas mantendo o mais proxímo possível da proporções especificadas no design.

- Não foi necessário utilizar nenhuma forma de estado global (redux, context e etc) para comunicação dos componentes, foi delegado ao browser e sua api toda a parte de busca, em conjunto com a biblioteca de rotas, a fim de diminuir a complexidade do projeto e criar "friendly URL".

- Os componentes foram desenvolvidos pensando em sua composição e caso de uso, expondo props apenas quando necessário.

## Tecnologias

As principais tecnlogias utilizadas foram:

- [React](https://reactjs.org/)

- [Axios](https://github.com/axios/axios)

Solução utilizada para fetch dos dados, por possui abstrações para as requisições e utilização de interceptors, o que facilita a injeção dos tokens e validações das requisições.

- [swr](https://swr.vercel.app/)

Solução utilizada para realizar o fetch dos dados, utilizando a "HTTP cache invalidation strategy", a fim de separar o estado da aplicação em cliente e servidor, possibilitando o estado do servidor ser gerenciado via cache. Assim, todas as buscas já realizadas serão feitas instantaneamente por já se encontrarem na camada de cache, promovendo uma ux melhor.

- [React Router Dom](https://reactrouter.com/web/guides/quick-start)

Biblioteca utilizada para lidar com as rotas da aplicação, em particular está sendo utilizada a versão V6 Alpha, por possuir uma api muito superior.

- [Styled Component](https://styled-components.com/)

Solução utilizada para estilização dos componentes utilizando CSS-in-JS.

- [Framer Motion](https://www.framer.com/motion/)

Biblioteca "production-ready" para criação de expressivas animações, performaticas e de fácil desenvolvimento.

- [Formik](https://formik.org/docs/overview)

Utilizado para lidar com o formulario de login de forma simples, com ampla utilização no mercado e de fácil integração com Yup.

- [Yup](https://github.com/jquense/yup/)

Utilizado para validação dos campos de login e pela sua integração com o Formik.

- [Storybook](https://storybook.js.org/)

Biblioteca utilizada para criação, desenvolvimento de componentes e documentação, com ampla utilização no mercado.

- [Testing Library](https://testing-library.com/)

Solução utilizada para realizar os testes, recomendada pelo proprio Core Team do React e também por ser fã do Kent C Dodds.

- [ESlint](https://eslint.org/)

Solução para Linter e Code Formater (basta configurar o vscode para utilizar o eslint como formatador);

O projeto foi bootstrapped utilizando:

- [create-react-app](https://github.com/facebook/create-react-app)

## Getting Started
Inicialmente, você deve clonar o projeto:
```
git clone https://danieljpgo@bitbucket.org/danieljpgo/empresas-web.git
```
Execute os seguintes scripts para executar a aplicação:
```
// install dependencies
yarn install

// start the application
yarn start
```

Para executar os testes, segue o script:
```
yarn test
```

Para executar o playground o Storybook:
```
yarn storybook
```

____

# Descrição do teste

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
- Bas práticas da Linguagem/Framework
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
