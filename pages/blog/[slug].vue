<script setup>
//import { BlogPostsSonyX8 } from '#components'
//import SonyX8 from '~/components/blog/posts/SonyX8.vue'

const route = useRoute()
const postSlug = route.params.slug
const single = ref({})
const isLoaded = ref(false)
const renderView = ref('')

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
})
// dynamic thanks
// https://github.com/nuxt/nuxt/issues/15448
</script>

<template>
  <div class="singlePage">
    <main v-if="!single.length" class="singlePost">
    
        <div class="breadcrumbs">
          <p>
            <NuxtLink to="/">Home</NuxtLink> > <NuxtLink to="/blog">Blog</NuxtLink> >
            <a :href="`/blog/category/${single.category}`"> {{ single.category }}</a>
          </p>
          <h1>{{ single.title }}</h1>
          <div class="author_dates">
            <p>By: {{ single.author }} | posted on: {{ single.createdAt }}</p>
            <p>Updated: {{ single.lastUpdate }}</p>
          </div>
          <hr />
        </div>
        <!-- <p>vuecomponent: {{ single.vuecomponent }}</p> -->
        <!-- v-html enable to handle html tags from backend -->
        <!-- only apply article class if has single.article, void min-height from css -->
        <article
          :class="single.length && 'article'"
          v-html="single.article">
        </article>
        <Component :is="AsyncComp" />
      
        <!--  <component :is="isLoaded ? 'renderView' : null" /> -->
        <BlogSidebottom class="sidebottom" :category="single.category" />
      
    </main>
    <h2 v-else>Post {{ single }}</h2>
    <BlogSidebar class="sidebar" />
  </div>
</template>
<style scoped>
.singlePage {
  display: flex;
  flex-wrap: wrap;
}

.singlePage .author_dates {
  font-size: 1rem;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.singlePage img {
  width: 100%;
  max-width: 50%;
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
  display: flex; /* flex too */
  min-height: 50vh;
  flex: 1 0 80%;
  flex-direction: column;
}

/* .singlePostz > img {
  height: 100px;
  width: 200px;
} */

.breadcrumbs {
  padding-block: 10px;
  line-height: 1.4;
  margin: 4px 0;
}
.breadcrumbs h1 {
  font-size: 2rem;
}

.article{
  flex: 1;
  min-height: 20vh;
 
}
article {
  margin: 10px 0;
}
</style>
