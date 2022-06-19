# My Trip

## Objetivo Geral:
Criar uma aplicação para mostrar os lugares fixados que você visitou ou quer ir em um mapa.

## Como rodar o projeto
### 1. Instalação.

Clone o repositório:
```bash
git clone https://github.com/EuCarlos/my-trip-nextjs-graphql-leaflet.git && cd my-trip-nextjs-graphql-leaflet
```

Instale as dependencias usando Yarn ou NPM:

```diff
yarn install

! Ou usando NPM caso não tenha o Yarn instalado.
npm install
```

### 2. GraphCMS

Este projeto usa [GraphCMS](https://graphcms.com/), então você precisa criar uma conta primeiro.

Após precisar criar o Schema, basta seguir os passos:

- Schema > Adicionar novo modelo com nome do `Place`
- E adicione os seguintes campos:
  - `Single Line Text` como `name`
  - `Slug` como `slug`
  - `Map` como `location`
  - `Rich Text` como `description`
  - `Asset Picker` como `gallery`
<p align="center">
  <img src="../../assets/place-schema.png" alt="Imagem da tela do modelo Schema do Place indicando que deve conter os campos names, slug, location, description e gallery"/><br>

  <h5 align="center"><strong>place</strong> - Schema - GraphCMS</h5>
</p>

- Schema > Adicionar novo modelo com nome de `Page`
- E adicione os seguintes campos:
  - `Single Line Text` como `heading`
  - `Slug` como `slug`
  - `Rich Text` como `body`

<p align="center">
  <img src="../../assets/page-schema.png" alt="Imagem da tela do modelo Schema do Page indicando que deve conter os campos heading, slug e body"/><br>

  <h5 align="center"><strong>page</strong> - Schema - GraphCMS</h5>
</p>

❗ Depois disso, preencha alguns valores e não esqueça de `publicar`!

### 2.1 Autenticação

Para criar um token de acesso, vá em `Settings > API Access`, dentro desta página, encontre `Permanent Auth Tokens`, crie um Token Name e marque todas as consultas possíveis. Salve e obtenha o token.

### 3. Rode o projeto

Depois de criar sua conta no [GraphCMS](https://graphcms.com/) e seguir os passos acima, você só precisa renomear o `.env.development` para `.env.local` (se você planeja executar localmente) e editar as chaves lá.

Com tudo pronto, você pode iniciar o aplicativo com:

```diff
yarn dev

! Ou usando NPM caso não tenha o Yarn instalado.
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

### Outros comandos

- `dev`: executa seu aplicativo em `localhost:3000`
- `build`: cria a versão de compilação de produção
- `start`: inicia um servidor simples com o código de produção da compilação
- `test`: executa jest para testar todos os componentes e páginas
- `test:watch`: executa jest no modo de assistido
- `codegen:init`: gerar arquivo de definição do graphql-codegen
- `codegen`: gerar tipos definido no arquivo `codegen.yml`

## Como contribuir para este projeto?
Antes de começar, verifique e siga as instruções para contribuir com o repositório. Se não, você pode seguir as instruções abaixo:

1. Fork o projeto
2. Crie um novo branch: git checkout -b nova-branch
3. Confirme suas alterações: git commit -m 'Adicionei algo'
4. Push to branch: git push origin nova-branch
5. Abra uma solicitação pull

## Como faço para relatar um bug ou solicitar um recurso?
Se você quiser relatar um bug ou solicitar um recurso, vá para [Issue](https://github.com/eucarlos/my-trip-nextjs-graphql-leaflet/issues) no projeto do GitHub e adicione sua solicitação.

___

<p align="center">
Criado com 💜 por <a href="https://github.com/eucarlos/">Carlos Alves</a> no Curso <a href="https://www.udemy.com/course/aprenda-nextjs-na-pratica/">NextJS na Prática</a>
</p>
