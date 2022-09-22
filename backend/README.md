# tour-app-station-one

### Índice

1. [Briefing do teste](#briefing)
   1. [Descrição do problema](#descricao)
   2. [Instruções para o desenvolvimento](#instrucoes-dev)
2. [Solução](#solucao)
   1. [Tecnologias utilizadas](#tecnologias)
   2. [Descrição da solução](#descricao-solucao)
   3. [Endpoints da API](#endpoints)
   4. [Instruções para rodar o app](#instrucoes)

# Briefing

### Qual o desafio?

Criar um app para podermos procurar os melhores pontos turísticos e restaurantes de uma cidade.

<a name="descricao"/>

## A quem queremos ajudar?

"Oi ! Eu sou o Flávio e estou ansioso para as minhas próximas férias, mas deixei tudo para a ú ltima hora
e não tive tempo para fazer uma pesquisa. Eu escolhi uma praia, mas não conheço ninguém lá e nunca
estive nessa cidade. "

Sua solução precisa ajudar o usuário a saber tudo sobre o seu próximo destino … hotéis, restaurantes, baladas.

Ou seja, servirá como um guia para tornar suas férias inesquecíveis; então… capriche !

<a name="instrucoes-dev"/>

## Instruções (para o desenvolvimento)

Escolha uma cidade e coloque pelo menos dois pontos turísticos e dois restaurantes (para facilitar podem pegar qualquer um na internet).

Não precisa criar um aplicativo do zero, pode pegar como exemplo o Tripadvisor ou outro parecido.

O ideal é ser feito em Ionic, porque pode ser usado em aparelhos com IOS ou Android, mas podem usar outro Framework que tenha um maior conhecimento.

Criem um login e senha para acessar a informações sensíveis, pode usar dados mockados, ou seja, sem precisar de uma API para buscar os dados.

Crie um Readme bem montado, onde contenham todas as informações para podermos rodar e acessar o programa em qualquer PC, quais tecnologias foram usadas, etc.

<a name="solucao"/>

## ⚙ Minha solução

<a name="descricao-solucao">

O app foi desenvolvido com Node.js (TypeScript) e Express.js.

A API foi pensada para servir um app onde um usuário pode consultar informações a respeito da cidade e dos seus respectivos pontos turísticos/restaurantes/hotéis.

A API possui:

- Um endpoint de consulta (`/cities`) que envia como parâmetro o nome da cidade a ser consultada no bando de dados
- Uma feature que permite ao usuário guardar/salvar pontos turísticos, hotéis e restaurantes do seu interesse
- Login e sessão para proteção de acesso ao perfil do usuário

<a name="tecnologias"/>

## Tecnologias utilizadas

- bcrypt
- config
- cors
- dotenv
- express
- jsonwebtoken
- lodash
- mongoose
- zod

<a name="endpoints"/>

## Endpoints

- POST `/users`

- GET `/users/:id/saved/tours`

- GET `/users/:id/saved/hotels`

- GET `/users/:id/saved/restaurants`

- GET `/users`

- POST `/sessions`

- GET `/sessions`

- DELETE `/sessions`

- POST `/cities`

- GET `/cities/:name`

- PATCH `/users/edit/:id `

<a name="intrucoes"/>

## Instruções para rodar o app

#### 1. Inicie o MongoDB

#### 2. Instale as dependências do projeto:

```bash
npm install
```

#### 3. Exeute a aplicação:

```bash
npm run dev
```
