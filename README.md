<h1>Construindo uma APIRest de carros, com Node.js e Express</h1>

<h3>Objetivo</h3>

Objetivo deste projeto é criar uma APIRest utilizando as tecnologias Node.js e Express para retornar uma lista de carros salvo no banco de dados. Este projeto foi realizado com o estudo do livro **Node Essencial** escrito pelo professor Ricardo R Lecheta. A partir do capitulo 10 é construida a API de forma que cada capitulo é inserido uma nova parte ou uma melhoria no codigo. 

<h3>Obs: </h3>
<p>Para a criação do banco de dados, há no repositorio dois arquivos com extensão <b>.sql</b> para se criar o banco. O aquivo <b>CreateTable.sql</b> permite que crie a tabela de carros no BD com todos os pre-requisitos nescessarios. O arquivo <b>InsertCarros.sql</b>, permite que insira todos os carros na tabela com os atributos nescessarios.</p>

<h3>Tecnologias Utilizadas</h3>

>Node.js

>Express

>Mysql

<h2>Conceitos</h2>

<h3>API (Application Programming Interface)</h3>
<p>O acrônimo API que provém do inglês Application Programming Interface (Em português, significa Interface de Programação de Aplicações), trata-se de um conjunto de rotinas e padrões estabelecidos e documentados por uma aplicação A, para que outras aplicações consigam utilizar as funcionalidades desta aplicação A, sem precisar conhecer detalhes da implementação do software.

Desta forma, entendemos que as APIs permitem uma interoperabilidade entre aplicações. Em outras palavras, a comunicação entre aplicações e entre os usuários.
</p>

<h3>Rest (Representational State Transfer)</h3>
<p>
  A Representational State Transfer (REST), em português Transferência de Estado Representacional, é um estilo de arquitetura que define um conjunto de restrições e propriedades baseados no protocolo HTTP. Web Services que obedecem ao estilo arquitetural REST, ou web services RESTful, fornecem interoperabilidade entre sistemas de computadores na Internet. Os web services compatíveis com REST permitem que os sistemas solicitantes acessem e manipulem representações textuais de recursos da Web usando um conjunto uniforme e predefinido de operações sem estado
</p>

<h3>Principios fundamentais: </h3>

>Protocolo cliente/servidor sem estado (stateless): cada requisição HTTP contém toda a informação necessária (Não manter sessão de login por exemplo)

>Um conjunto de informações padrão bem definidas: POST, GET, PUT, DELETE, HEAD e OPTIONS

>Cada recurso deve possuir um identificador único (URI).

>Recursos (serviços) com múltiplas representações (formatos de retorno, como JSON ou XML).

>Um webservice é dito RESTful se ele adere aos princípios fundamentais.

<h3>Node.js</h3>

<p>Node.js é um interpretador de código JavaScript com o código aberto, focado em migrar o Javascript do lado do cliente para servidores. Seu objetivo é ajudar programadores na criação de aplicações de alta escalabilidade (como um servidor web), com códigos capazes de manipular dezenas de milhares de conexões simultâneas, numa única máquina física.</p>


<h3>Express</h3>

<p>Express, é uma estrutura de aplicativo da web para o Node.js, lançada como software livre e de código aberto sob a licença MIT.Ele é projetado para construir aplicativos da Web e APIs. Ele foi chamado de framework de servidores padrão de fato para o Node.js.</p>

<h3>Mysql</h3>

<p>O MySQL é um sistema de gerenciamento de banco de dados (SGBD), que utiliza a linguagem SQL (Linguagem de Consulta Estruturada, do inglês Structured Query Language) como interface. </p>
