<template>
    <footer>
      <p>Built with VueJS/Nuxt/NodeJS by Geraldo Costa</p>
      <p>Copyright &copy; 2024 GMAPDEV</p>

      <NuxtLink to="/">Home</NuxtLink>
      |
      <router-link to="/politica-privacidade">Politica de Privacidade </router-link>|
      <a href="https://geraldox.netlify.app/" target="_blank">Legacy version</a>

      <!-- only show top on homepage -->
      <a
      v-show="$route.path === '/'"
        href="#top"
        class="backtop"
        ><svg
          class="with-icon_icon__MHUeb"
          data-testid="geist-icon"
          fill="none"
          height="24"
          width="24"
          shape-rendering="geometricPrecision"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          style="color: #fff; width: 40px; height: 40px">
          <circle
            cx="12"
            cy="12"
            r="10"></circle>
          <path d="M16 12l-4-4-4 4"></path>
          <path d="M12 16V8"></path></svg>
      </a>
    
    </footer>
</template>


<style scoped>
footer {
  min-width: 200px;
  margin: auto;
  background: rgb(34, 34, 34);
  padding: 2rem;
  text-align: center;
  color: rgb(158, 149, 137);
  font-size: 12px;
  width: 100%;
  & a {
    text-decoration: none;
    color: dodgerblue;
  }
  & a:hover {
    text-decoration: underline;
  }
}

footer p:first-of-type {
  margin-top: 10px;
}

.backtop {
  position: fixed;
  bottom: 40px;
  z-index: 10;
  right: 50px;
  animation: appear 1ms ease-in-out both;
  animation-timeline: scroll();
}

.backtop::after {
  content: '';
}

.backtop svg {
  width: 40px;
}

@keyframes appear {
  from {
    visibility: hidden;
    opacity: 0;
  }
  to {
    visibility: visible;
    opacity: 1;
  }
}

/* for mobile */
@media screen and (max-width: 650px) {
  footer {
    background: rgb(29, 27, 27);
    text-align: center;
    color: #fff;
  }
  .backtop {
    right: 0 !important;
  }
}
</style>
