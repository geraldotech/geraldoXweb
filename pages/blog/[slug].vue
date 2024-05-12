<script setup>
const route = useRoute()

//import { BlogPostsSonyX8 } from '#components'
//import SonyX8 from '~/components/blog/posts/SonyX8.vue'

const postSlug = route.params.slug
const single = ref({})
const isLoaded = ref(false)
const clickable = ref(true)

async function handlerFetch() {
  const data = await fetch(`https://api.geraldox.com/post/${postSlug}`)
  try {
    if (!data.ok) {
      single.value = data.statusText
      return
    }

    if (data.ok) {
      const post = await data.json()
      isLoaded.value = true
      single.value = post
    }
  } catch (error) {
    console.error(error)
  }
}
handlerFetch()

const instance = getCurrentInstance()

const AsyncComp = computed(() => {
  if (isLoaded && single.value.vuecomponent) {
    // console.log(single.value.vuecomponent)
    const compoName = single.value.vuecomponent
    return defineAsyncComponent(() => import(`~/components/blog/posts/${compoName}.vue`))
  }
})

onMounted(() => {
  setTimeout(() => {}, 2000)
})
// dynamic thanks
// https://github.com/nuxt/nuxt/issues/15448
</script>

<template>
  <div>
    <section v-if="!single.length">
      <h1>{{ single.title }}</h1>
      <p>Author: {{ single.author }}</p>
      <p>createAt: {{ single.createdAt }}</p>
      <p>lastUpdate: {{ single.lastUpdate }}</p>
      <p>vuecomponent: {{ single.vuecomponent }}</p>
      <p>
        {{ single.article }}
      </p>
      <!--  <p>DynamicImports {{ `BlogPosts` + single.vuecomponent }}</p> -->
      <!--   <LazyBlogPostsSonyX8 v-if="single.vuecomponent" /> -->

      <!-- <Component :is="isLoaded ? 'SonyX8' : null" /> -->
    </section>
    <h2 v-else>Post {{ single }}</h2>

    <hr />
    <Component :is="AsyncComp" />
  </div>
</template>
