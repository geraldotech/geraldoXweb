<script setup>
//import { BlogPostsSonyX8 } from '#components'
//import SonyX8 from '~/components/blog/posts/SonyX8.vue'

const route = useRoute()
const postSlug = route.params.slug
const single = ref({})
const isLoaded = ref(false)
const renderView = ref('')
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
      //renderView.value = post.vuecomponent ? `BlogPosts${post.vuecomponent}` : null
    }
  } catch (error) {
    console.error(error)
  }
}
handlerFetch()

const AsyncComp = computed(() => {
  if (isLoaded && !single.value.vuecomponent) {
    return null
  }

  if (isLoaded && single.value.vuecomponent) {
    // console.log(single.value.vuecomponent)
    const compoName = single.value.vuecomponent
    return defineAsyncComponent(() => import(`~/components/blog/posts/${compoName}.vue`))
  }
})

//const instance = getCurrentInstance()

/* 
console.log(instance.appContext.components.BlogPostsSonyX8.setup()) */

/* const Render = () => {
  return h('div', instance.appContext.components.BlogPostsSonyX8.name)
}
 */

//const renderView2 = resolveComponent(`BlogPostsSonyX8`)

onMounted(() => {
  //   const Existes = () => {
  //     try {
  //       return defineAsyncComponent(() => import(`~/components/blog/posts/SonyX8.vue`).then((res) => console.log(r)))
  //     } catch (err) {
  //       console.log(`error`)
  //     }
  //   }
  //  Existes()
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
    </section>
    <h2 v-else>Post {{ single }}</h2>

    <hr />

    <Component :is="AsyncComp" />

    <component :is="isLoaded ? 'renderView' : null" />
  </div>
</template>
