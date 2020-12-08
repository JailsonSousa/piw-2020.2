## Atividade 01

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=&uri=https%3A%2F%2Fraw.githubusercontent.com%2FJailsonSousa%2Fpiw-2020.2%2Fmain%2Fatv01%2Fdocs%2Fpiw_atv01_insomnia.json)


Para mais detalhes sobre a atividade [clique aqui](https://github.com/JailsonSousa/piw-2020.2/blob/main/atv01/Atividade%201%20-%20Node.js%20e%20Express.js.docx).

Nessa atividade fiz algumas adaptações, segue abaixo:

- Adicionado Update das informações do usuário (nome e email).

- Adicionado as rotas de increment e decrement de likes dos post.

- Adicionado a rota de exibir todos os posts por usuário.

- Na criaçào do post basta informar a msg e o userId.

- Adicionado Update do post (alterar a msg).

- Utilizei a lib [uuid](https://github.com/uuidjs/uuid) para gerar o ID dos posts e users.

- Utilizei a lib [bcryptjs](https://github.com/dcodeIO/bcrypt.js) para gerar a criptografia da senha do usuário.

- Utilizei o [Sucrase](https://github.com/alangpierce/sucrase) para ter acesso as novas features do javascript sem precisar realizar muitas configurações. Sucrase é uma alternativa ao Babel.

- Padronizei o projeto utilizando [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) e [EditorConfig](https://editorconfig.org/). Para mais detalhes [clique aqui](https://www.notion.so/Padr-es-de-projeto-com-ESLint-Prettier-e-EditorConfig-0b57b47a24724c859c0cf226aa0cc3a7)
