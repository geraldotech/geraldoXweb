// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon'],
  css: ['~/assets/main.css'],
  devtools: { enabled: true },
  alias:{
    "@": "/<srcDir>",
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  nitro: {
    prerender: {
      routes: ['/blog/slug'],
    }
  },
  runtimeConfig: {
    public: {
      secret: process.env.BASEURL,
    }
  }
})
