# Mudei o projeto para typescript, é o mesmo javascript, mas com tipagens:

# Pra rodar o projeto:

    - `npm install` - Instalação das dependências.
    - `npx prisma migrate dev` - para fazer a migração das tabelas para o banco de dados
    - `npm run dev` - para startar o projeto

## Foi implementado conexão ao banco de dados com PrismaORM: https://www.prisma.io/docs/getting-started/quickstart

# Prisma serve pra conectar com o banco de dados, se vc ver, tem src/database/dev.db

## Nesse caso é um banco de dados que é só um arquivo, é o sqlite, vc pode pesquisar sobre ele.

## Dentro da pasta prisma/migrations, tem um arquivo q é oq deixa o banco com todas as tabelas q vc vai trabalhar, no teu caso só cursos

- Dentro do src/server.ts na linha 25 tem uma chamada, q é oq retorna todos os cursos.
- Usa esse como exemplo, vc precisa tirar toda essa regra que vc fez usando o array, então por exemplo:
  - Na linha 17 você recebe um numero por parametro, e conforme o numero vc pega o indice do array, isso precisa ser trocado pra fazer uma query no banco de dados usando o prisma e retornando o registro referente ao que você está tentando informar.
- Pra fazer isso, vc sempre precisa usar o `await prisma.cursos.....` `await` serve para esperar que retorne algo, `prisma` = a biblioteca que vai fazer a conexão no banco de dados, e o `cursos` é pra dizer de qual tabela vc está pegando.

- Ajustes que precisam ser feitos no projeto:
  [] Endpoint: GET /cursos/:index
  - Precisa usar o findUnique método do prisma, bem parecido com o que está sendo feito na linha 25, porém vc precisa passar o index pra buscar como id primário dentro do banco de dados, OLHAR DOCUMENTAÇÃO do link que deixei la em cima...
    [] Endpoint: GET /cursos
  - Precisa retornar o valor que eu já deixei ali na linha 25, só remover o teu array que será inutilizado e retornar o valor correto
    [] Endpoint: POST /cursos
  - Precisa usar o método create do prisma, vc vai precisar mandar mais informações além só do nome, precisa mandar tmb descricao, categoria, preco, url (preco é um número)
    [] Endpoint: PUT /cursos/:index
  - Precisa utilizar o método update do prisma, olhar na documentação tmb, vc precisa informar o id, que nem vc faz no findUnique que citei antes... porém precisa enviar os dados que vão ser utilizados.
    [] Endpoint: DELETE: /cursos/:index
  - Precisa utilizar o método delete, informando o id.
