// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  devtools: { enabled: true },
  alias:{
    "@": "/<srcDir>",
  },
 // ssr: true,
  components: {
   // global: true,
  //  dirs: ['~/components'],
  },
})
