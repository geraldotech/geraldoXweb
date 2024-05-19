 const defaultImage = './assets/img/project-default.jpg' // Default image path
//const defaultImage = '/assets/project-default.jpg' // Default image path


const icon = {
  html: './assets/icons/svg/html.svg',
  vuejs: './assets/icons/svg/vuejs.svg',
  css: '../assets/icons/svg/css.svg',
  react: '../assets/icons/svg/reactjs.svg',
  javascript: './assets/icons/svg/javascript.svg',
  nodejs: '/assets/icons/svg/nodejs.svg',
  firebase: './assets/icons/svg/firebasevertical.svg',
}

const projects = [
  {
    name: 'GPX',
    url: 'https://geraldox.com',
    git: 'https://github.com/geraldotech/VueJS_Blogger',
    image: './assets/img/gpx-logo2.png',
    description:
      'Site pessoal para exibir meu trabalho, habilidades, desenvolvido com VueJS, inclúi muitos conceitos de manipulação de API foram usados para construir este site principalmente a parte do blog.',
    icons: [{ title: 'VueJS', path: icon.vuejs }],
  },
  {
    name: 'Vamos somar',
    url: 'https://dev.geraldox.com/projects/apple-sum/',
    image: './assets/img/apple-sum.jpg',
    description: 'Ajuda crianças na fase da alfabetização matemática, gerando contas aleatórias e respostas com multiplca escolha.',
    icons: [{ title: 'VueJS', path: icon.vuejs }],
  },
  {
    name: 'The Moody Zone',
    url: 'https://themoodyzone.netlify.app/',
    git: 'https://github.com/geraldotech/moodyapp',
    image: 'https://themoodyzone.netlify.app/assets/images/logo.svg',
    description: 'Understanding Feelings create Posts Read Posts Update Posts Delete Posts',
    icons: [
      { title: 'HTML', path: icon.html },
      { title: 'CSS', path: icon.css },
      { title: 'Javascript', path: icon.javascript },
      { title: 'Firebase', path: icon.firebase },
    ],
  },
  {
    name: 'Life Vans',
    url: 'https://vannlifeforfirebase.pages.dev/',
    git: 'https://github.com/geraldotech/DevMap/tree/main/ReactJS/projects/scrimba/Router/VanLifefor_Firebase',
    image: 'https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png',
    description:
      'Contextualizando recursos avançados como Router, Context API, Nested Routers, Outline, link state, search Params consumindo dados do Firebase. use as credenciais configuradas no miragejs: <b>g@g.com@123</b>.',
    icons: [
      { title: 'Reactjs', path: icon.react },
      { title: 'Firebase', path: icon.firebase },
    ],
  },
  {
    name: 'quiz Expert',
    url: 'https://dev.geraldox.com/projects/quizExpert_vanilla',
    image: './assets/img/Customer Survey-amico.svg',
    description: 'Teste seus conhecimentos em JavaScript',
    icons: [
      { title: 'HTML', path: icon.html },
      { title: 'CSS', path: icon.css },
      { title: 'Javascript', path: icon.javascript },
    ],
  },
  {
    name: 'Cinema Router',
    url: 'https://react-movie-apis.netlify.app',
    git: 'https://github.com/geraldotech/DevMap/tree/main/ReactJS/projects/API-themovieDB',
    image: './assets/img/moviedb.jpg',
    description: 'Essa aplicação consome a API do The Movie Database (TMDb) para listar uma seleção de filmes, permitindo aos usuários explorar e descobrir novos filmes de forma dinâmica.',
    icons: [{ title: 'ReactJS', path: icon.react }],
  },
  {
    name: 'Shopping Cart',
    url: 'https://dev.geraldox.com/projects/shoppingcart',
    image: 'https://dev.geraldox.com/projects/ShoppingCart/src/shopping.png',
    description: 'Simulando um sistemas de compras, adicionar e remover itens ao carrinho',
    icons: [
      { title: 'HTML', path: icon.html },
      { title: 'CSS', path: icon.css },
      { title: 'Javascript', path: icon.javascript },
    ],
  },
  {
    name: 'Gerador de Etiquetas',
    url: 'https://geraldotech.github.io/Gerador-Etiquetas-Make/FrontVersion',
    git: 'https://github.com/geraldotech/Gerador-Etiquetas-Make',
    image: 'https://play-lh.googleusercontent.com/exNzDTL0Wnl9jFvvw6NJXSsH11lzW_N1-6DpsVsbi7jzR3TCBkVhaVV3_9IWEodNOsE=w240-h480-rw',
    description: 'App construido para atender uma necessidade da empresa que fiz estágio',
    icons: [
      { title: 'HTML', path: icon.html },
      { title: 'CSS', path: icon.css },
      { title: 'Javascript', path: icon.javascript },
    ],
  },
  {
    name: 'Vivo Easy clone',
    url: 'https://gmapdev.netlify.app/projects/vivoeasy',
    image: 'https://gmapdev.netlify.app/projects/vivoeasy/assets/vivoeasy16034139943003.png',
    description: 'Um do clone simulando as funcionalidades do aplicativo Vivo Easy',
    icons: [
      { title: 'HTML', path: icon.html },
      { title: 'CSS', path: icon.css },
      { title: 'Javascript', path: icon.javascript },
    ],
  },
  {
    name: 'Filtro dados',
    url: 'https://dev.geraldox.com/projects/array_input_radio_search',
    image: './assets/icons/svg/javascriptlogo.svg',
    description: 'Filtrando dados por nome ou estado',
    icons: [
      { title: 'HTML', path: icon.html },
      { title: 'CSS', path: icon.css },
      { title: 'Javascript', path: icon.javascript },
    ],
  },
  {
    name: 'Express session login',
    url: 'https://expressloginway.onrender.com',
    git: 'https://github.com/geraldotech/ExpressLoginPage',
    image: './assets/icons/svg/nodejslogo.svg',
    description: 'Simulando um sistema de login, cada user tem um painel diferente',
    icons: [{ title: 'nodejs', path: icon.nodejs }],
  },
  {
    name: 'JS Downloader',
    url: 'https://dev.geraldox.com/projects/JSFileDownloader',
    description: 'Precisa baixar arquivos js para consumir offline, isso pode ser muito fácil no PC mas não com as limitações do mobile',
    image: defaultImage,
    icons: [{ title: 'vuejs', path: icon.vuejs }],
  },
  {
    name: 'Password generator',
    url: 'https://dev.geraldox.com/projects/base64-converter',
    image: "./assets/img/password-128.svg",
    description: 'Codificador de senhas usando a Base 64',
    icons: [  { title: 'HTML', path: icon.html },
      { title: 'CSS', path: icon.css },
      { title: 'Javascript', path: icon.javascript },],
  },
]

export default defineEventHandler((event) => {
  return projects
})
