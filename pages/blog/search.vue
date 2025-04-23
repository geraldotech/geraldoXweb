<script setup>
const route = useRoute()
const postCat = route.query
const { q } = postCat
const load = ref(false)

const { data } = await useFetch(`https://api.gcosta.shop/posts/search?q=${q}`)
onMounted(async () => {})

watch(
  () => route.query.q,
  async (newValue, oldValue) => {
    if (newValue !== oldValue) {
      load.value = false // Reset load to false before fetching new data
     
      location.reload()
    }
  }
)

const clickHandler = () => {
  console.log(load.value)
  console.log(data)
}
</script>

<template>
  <div class="container">
    <section class="listPosts">
    <!--   <button @click="clickHandler">clickHandler</button> -->

      <h1>Search Page: {{ q }}</h1>
      <div v-if="data && data.length && !data.includes('not posts found')" class="listPosts">
        <section>
        <div
          class="blog_card"
          v-for="post in data">
          <h1>
            <NuxtLink :to="`/blog/${post.slug}`"> {{ post.title }}</NuxtLink>
          </h1>
          <time>{{ post.createdAt }}</time>
          <p class="category">
            <NuxtLink :to="`/blog/category/${post.category}`">{{ post.category }}</NuxtLink>
          </p>
        </div>
      </section>
      </div>
      <div v-else>No posts found for {{ q }}</div>
    </section>

    <BlogSidebar class="sidebar" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.listPosts {
  padding: 5px;
  flex: 1 0 80%;
  background-color: rgb(2, 3, 26);
  color: #e3e1dd;
}

.blog_card {
  /*  border-top: 4px solid rgb(5, 189, 186); */
  border-radius: 10px;
  border: 1px solid #b0a99f;
  background: rgb(14, 19, 25);
  padding: 1rem;
  margin-block: 10px;
}

.blog_card {
  color: #e3e1dd;
}

.blog_card a {
  text-decoration: none;
  color: #e3e1dd;
}
</style>
