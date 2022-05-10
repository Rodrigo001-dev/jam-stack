## Projeto

Nessa aplicação utilizei o conceito JAMStack.

JAMStack é uma forma de desenvolver aplicações onde utilizamos 3 atores: JAM é uma sigla para Javascript Api e Markup, básicamente faz um conjunto de utilizar Javascript, utilizar alguma Api que fornecer conteúdo, fornecer os dados para ser utilizado na aplicação e essa Api pode ser qualquer coisa, desde um CMS, algo que vai gerar conteúdo até APIs de pagamento, e Markup é a linguagem de marcação, no caso HTML. Quando nós unimos Javascript, Api e Markup(JAM) conseguimos criar aplicações completas sem depender de criar um backend do total zero.

É muito comum em aplicações que desenvolvemos utilizando esse conceito ter 1 frontend da aplicação e múltiplas APIs. No caso dessa aplicação utilizei o GraphCMS, o GraphCMS fornece os dados apenas que é cadastrado através de uma API, e podemos consumir ela dentro do nosso projeto. Eu tamém utilizei o client uRQL que suporta o GraphQL e conseguimos ter funcionamentos parecidos com o react-query