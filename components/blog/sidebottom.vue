<script setup>
const props = defineProps({
  category: {
    type: String,
    // required: true
  },
})

const route = useRoute()
const postSlug = route.params.slug

const posts = ref([])

useFetch(async () => {
  try {
    const data = await $fetch(`https://api.geraldox.com/posts/category?name=${props.category}`)
    // Ensure data is an array and then slice it
    // ensure that data is an array before applying array methods like filter and slice
    if (Array.isArray(data)) {
      const notIncludesCurrent = data.filter((post) => !post.slug.includes(postSlug))
      posts.value = Array.isArray(notIncludesCurrent) ? notIncludesCurrent.slice(0, 5) : []
    }

    //console.log(notIncludesCurrent.map(post => post.title))
  } catch (error) {
    console.error('Error fetching data:', error)
    posts.value = []
  }
})
</script>

<template>
  <div class="sidebottom">
    <section class="author">
      <p>
        By:
        <a
          href="/about"
          class=""
          >Geraldo Filho</a
        >
      </p>
      <p>A Frontend Developer with more than half a decade of experience, I write about the things I like. Coding, tech writing, Linux, Android, Windows and other tech stuff...</p>
    </section>

    <h2>More from {{ category }}</h2>
    <section v-if="posts.length">
      <nav class="links">
        <NuxtLink
          v-for="relational in posts"
          :to="`/blog/${relational.slug}`"
          >{{ relational.title }}</NuxtLink
        >
      </nav>
    </section>
    <div v-show="!posts.length">No Related Posts!</div>
  </div>
</template>
<style scoped>
.links a {
  display: block;
  color: #05bdba;
  padding: 1px;
}

.author {
  background-color: rgb(34, 34, 34);
  padding: 5px;
}
</style>
