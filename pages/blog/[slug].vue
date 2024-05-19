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

// if (this.$options._resolveComponent('GeraldoMaster')) {
//   console.log('Component exists');
// } else {
//   console.log('Component does not exist');
// }

const AsyncComp = computed(() => {
  if (isLoaded && !single.value.vuecomponent) {
    return null
  }

  if (isLoaded && single.value.vuecomponent) {
    // console.log(single.value.vuecomponent)
    const instance = getCurrentInstance()
    const compoName = single.value.vuecomponent
    let componentExists = `BlogPosts${compoName}` in instance.appContext.components
    if (!componentExists) {
      return
    }
    // only load if component exists
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

onMounted(() => {
  handlerFetch()
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
  <div class="singlePage">
    <div class="singlePost">
      <section v-if="!single.length">
        <div class="breadcrumbs">
          <p>
            <NuxtLink to="/">Home</NuxtLink> > <NuxtLink to="/blog">Blog</NuxtLink> >
            <NuxtLink :to="`/blog/category/${single.category}`">{{ single.category }}</NuxtLink>
          </p>
          <h1>{{ single.title }}</h1>
          <p>by: {{ single.author }} posted on: {{ single.createdAt }}</p>
          <p>lastUpdate: {{ single.lastUpdate }}</p>
          <hr />
        </div>
        <!-- <p>vuecomponent: {{ single.vuecomponent }}</p> -->
        <!-- v-html enable to handle html tags from backend -->
        <p v-html="single.article"></p>
      </section>
      <h2 v-else>Post {{ single }}</h2>

      <Component :is="AsyncComp" />
      <!--  <component :is="isLoaded ? 'renderView' : null" /> -->
    </div>
    <BlogSidebar class="sidebar" />
  </div>
</template>
<style scoped>
.singlePage {
  display: flex;
  flex-wrap: wrap;
}

.sidebar,
.singlePost {
  padding: 10px;
  line-height: 1.5;
}

.sidebar {
  flex: 1 0 20%;
  flex-direction: column;
}
.singlePost {
  min-height: 80vh;
  flex: 1 0 80%;
  flex-direction: column;
}

.singlePost > img {
  height: 100px;
  width: 200px;
}

.breadcrumbs {
  padding-block: 10px;
  line-height: 1.4;
}
.breadcrumbs h1 {
  font-size: 2rem;
}
</style>
