<script setup>
const clickCloseMenu = () => {}
const handleMenuChangeIcon = () => {}
</script>
<template>
  <ul class="top-menu">
    <li>
      <NuxtLink to="/">Home</NuxtLink>
    </li>
    <li>
      <a href="..#projects">Projetos</a>
    </li>
    <li>
      <a href="..#experiences">Experiência</a>
    </li>
    <li>
      <a href="..#skills">Habilidades</a>
    </li>
    <li>
      <a href="..#contact">Contato</a>
    </li>
    <li>
      <NuxtLink to="/blog">Blog</NuxtLink>
    </li>
  </ul>

   <AppAlert />
</template>
<style scoped>

/* TOP HOME PAGE */
.top-menu {
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 8vh;
  z-index: 3;
  background-color: #000000;

  & a{
    color: #fff;
    text-decoration: none;
  }
}

.top-menu .items_menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'Anta', sans-serif;
  gap: 2.8em;
  padding: 1rem;
}
.items_menu a {
  text-decoration: none;
  color: #878787;
  font-size: 1.3rem;
  padding: 1rem;
  &:hover {
    color: #fff;
  }
}
.top-menu .logo {
  font-weight: 900;
  font-family: 'Anta', sans-serif;
  font-size: 2.5em;
  & a {
    text-decoration: none;
    color: #fff;
  }
}

#toggleMenu,
label:has(#toggleMenu) {
  display: none;
  cursor: pointer;
}
i.menuiconelement {
  font-size: 2rem;
}

@media (max-width: 900px) {
  label:has(#toggleMenu) {
    display: block;
  }
  .top-menu {
    position: sticky;
    display: flex;
    top: 0;
    justify-content: space-between;
    padding-inline: 0.2rem;
  }
  .top-menu .items_menu {
    position: absolute;
    top: 50px;
    z-index: 1;
    right: 0;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    gap: 3rem;

    /*   visibility: hidden;   
     */
    opacity: 0;
    height: 0;
    width: 100vw;
    transition: all 500ms ease-in-out;
  }

  /* === WHEN MENU IS CHECKED === */
  .top-menu:has(#toggleMenu:checked) .items_menu {
    top: 8vh;
    height: 100vh;
    overflow: hidden;
    /*   
 visibility: visible;
    */
    background-color: #000000;
    transition: all 500ms linear;
    opacity: 1;
  }
}

/* === TOP HOME PAGE === */


</style>
