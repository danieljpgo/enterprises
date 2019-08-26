# README #

Estes documento README tem como objetivo fornecer as informações necessárias para realização do projeto Empresas.

### O QUE FAZER ? ###

* Você deve fazer um fork deste repositório para o desenvolvimento do teste. Após o desenvolvimento você deve enviar por email um link do seu repositório. Nós iremos avaliar seu projeto e retornar o resultado do seu teste.

### ESCOPO DO PROJETO ###

* Login e acesso de Usuário já registrado
	* Para o login usamos padrões OAuth 2.0. Na resposta de sucesso do login a api retornará 3 custom headers (access-token, client, uid);
	* Para ter acesso as demais APIS precisamos enviar esses 3 custom headers para a API autorizar a requisição;
* Listagem de Empresas
* Detalhamento de Empresas
* Filtro de Empresas por nome e tipo


### Informações Importantes ###

* Layout e recortes disponíveis no Zeplin
* https://app.zeplin.io/
* user: teste_web
* senha: teste_ioasys

* Integração disponível a partir de uma collection para Postman (https://www.getpostman.com/apps) disponível neste repositório. Para utilizar a collection, vá até o postman e import a colllection que está disponível neste repositório, assim você terá acesso as documentação da API.

* É obrigatório utilização do ReactJS.

* É importante criar o layout responsivo, usando boas práticas e organização.

* Independente de onde conseguiu chegar no teste é importante disponibilizar seu fonte para analisarmos.

### Dados para Teste ###

* Servidor: http://empresas.ioasys.com.br
* Versão da API: v1
* Usuário de Teste: testeapple@ioasys.com.br
* Senha de Teste : 12341234

### Dicas ###

* Você pode utilizar um dos frameworks: Bootstrap(http://getbootstrap.com/) ou Materializecss(http://materializecss.com).
* No postman existem alguns parâmetros no header que devem ser passados em todas requests exceto na de login, eles serão retornados no endpoint de login, nos headers da request.
* Sobrou tempo? Testes unitários, integração e e2e no sistema são bem vindos.

