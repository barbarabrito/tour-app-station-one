# tour-app-station-one

### Índice

1. [Briefing do teste](#briefing)
   1. [Descrição do problema](#descricao)
   2. [Instruções para o desenvolvimento](#instrucoes-dev)
2. [Solução](#solucao)
   1. [Descrição da solução](#descricao-solucao)
   2. [Detalhes técnicos](#detalhes-tecnicos)
   3. [Bibliotecas e dependências](#tecnologias)
   4. [Endpoints da API](#endpoints)
   5. [Instruções para rodar o app](#instrucoes)

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

A API foi pensada como um app onde um usuário pode consultar informações a respeito da cidade e dos seus respectivos pontos turísticos/restaurantes/hotéis.

A API possui:

- Um endpoint de consulta (`/cities`) que envia como parâmetro o nome da cidade a ser consultada no bando de dados
- Uma feature que permite ao usuário guardar/salvar pontos turísticos, hotéis e restaurantes do seu interesse
- Login e sessão para proteção de acesso ao perfil do usuário

O app está hospedado em: [tour-app-1yrh.onrender.com](https://tour-app-1yrh.onrender.com)

<a name="detalhes-tecnicos"/>

## Detalhes técnicos

O controle de acesso das rotas da API acontece por meio de um token de acesso que é gerado no login. Neste mesmo login é gerado também um token de atualização (_refresh token_). O token de acesso tem a duração de 15 minutos. Após a expiração desse token e assim que uma nova requisição de acesso for feita pelo usuário, o servidor fará uma nova verificação e se ambos tokens (_access token_ e _refresh token_) forem válidos, um novo token de acesso será gerado.

<a name="tecnologias"/>

## Bibliotecas/dependências

- bcrypt
- config
- cors
- dotenv
- express
- jsonwebtoken
- lodash
- mongoose
- zod
- swagger-ui-express
- swagger-autogen

<a name="endpoints"/>

## Endpoints

- GET `/` : Rota inicial

- POST `/users` : Cadastro de usuário

  ```json
  {
    "email": "user@example.com",
    "name": "user",
    "password": "12345678",
    "passwordConfirmation": "12345678"
  }
  ```

- GET `/users/:id/saved/tours` : Retorna os pontos turísticos salvos de um determinado usuário (**rota privada** acessada apenas por token)

- GET `/users/:id/saved/hotels` : Retorna os hotéis salvos de um determinado usuário (**rota privada**)

- GET `/users/:id/saved/restaurants` : Retorna os restaurantes salvos de um determinado usuário (**rota privada**)

- GET `/users` : Retorna os usuários cadastrados

- POST `/sessions` : Cria a sessão do usuário

- GET `/sessions` : Retorna as sessões de um usuário (**rota privada**)

- DELETE `/sessions` : Remove uma sessão (**rota privada**)

- POST `/cities` : Cadastro de cidades

- GET `/cities` : Retorna todas as cidades cadastradas

- GET `/cities/:name` : Rota de pesquisa. Retorna a cidade passada como parâmetro. O nome deve ser digitado respeitando letras maiúsculas, espaços e acentos. Ex: localhost:5000/cities/São Paulo.

- PATCH `/users/edit/:id` : Rota que permite que o usuário altere seus dados de perfil (**rota privada**)

- GET `/tours` : Retorna todos os pontos turísticos cadastrados

- GET `/restaurants` : Retorna todos os restaurantes cadastrados

- GET `/hotels` : Retorna todos os hotéis cadastrados

- POST `/users/id:/saved/[tours/restaurants/hotels]` : Salva pontos turísticos, restaurantes ou hotéis na conta do usuário. Ex: localhost:5000/users/saved/tours adiciona pontos turísticos

- DELETE `/users/id:/saved/[tours/restaurants/hotels]` : Remove pontos turísticos, restaurantes ou hotéis na conta do usuário. Ex: localhost:5000/users/saved/tours remove pontos turísticos

<a name="instrucoes"/>

## Instruções para rodar o app

#### 1. Você vai precisar de uma chave privada e de uma chave pública para substituir os valores das varáveis de ambiente `PRIVATE_KEY` e `PUBLIC_KEY`. Você pode gerar suas chaves aqui: [Online RSA Key Generator](https://travistidwell.com/jsencrypt/demo).

#### 2. Crie um arquivo .env na raiz do projeto com as variáveis de ambiente `PUBLIC_KEY`, `PRIVATE_KEY`, `DB_USER` e `DB_PASS` e defina seu valores. 

#### 3. Inicie o MongoDB

#### 4. No diretório /api/config, aletere o endereço da `dbUri`. Por ex: 'mongodb://localhost:27017/nomedobanco'.

#### 5. Dentro do diretório /api, Instale as dependências do projeto:

```bash
npm install
```

#### 6. Execute a aplicação:

```bash
npm run dev
```

Para acessar as rotas privadas da API, é necessário enviar o token no cabeçalho das requisições

Documentação disponível em [https://tour-app-1yrh.onrender.com/docs](https://tour-app-1yrh.onrender.com/docs).