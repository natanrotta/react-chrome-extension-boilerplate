# GOOGLE CHROME EXTENSION BOILERPLATE

# Boilerplate de extensão do chrome com ReactJs usando a estratégia de página de injeção.

## Projeto criado com

![HTML Badge](https://img.shields.io/badge/-HTML-orange)
![CSS Badge](https://img.shields.io/badge/-CSS-blue)
![JavaScript Badge](https://img.shields.io/badge/-JavaScript-yellow)
![ReactJS Badge](https://img.shields.io/badge/-ReactJS-blue)

&nbsp;

## Primeira instalação

**Dependências:** É preciso ter algumas dependências instaladas antes de continuar

- Node.js
- Yarn ou NPM

&nbsp;

## Etapas

### 0. Instale as dependências do projeto:

```
yarn install
```

&nbsp;

### 1. Agora build a extensão usando:

```
yarn build
```

&nbsp;

### 2. Para evitar a execução yarn build após atualizar qualquer arquivo, você pode executar que escuta qualquer alteração de arquivo local e reconstrói automaticamente.


```
yarn watch
```

&nbsp;

## Adicionando extensão de aplicativo React ao Chrome

### 1. No navegador Chrome, vá para a página chrome://extensions e ative o modo de desenvolvedor. Isso habilita a capacidade de instalar localmente uma extensão do Chrome.

### 2. Agora clique no LOAD UNPACKED e navegue até [PROJECT_HOME]\build , Isso instalará o aplicativo React como uma extensão do Chrome.

### 3. Quando você for a qualquer site e clicar no ícone da extensão, a página injetada será alternada.



