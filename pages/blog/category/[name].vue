<script setup>
const route = useRoute()
const postCat = route.params.name

const { data } = await useFetch(`https://api.geraldox.com/posts/category?name=${postCat}`)
</script>
<template>
  <div class="container">
    <div
      v-if="data"
      class="listPosts">
      <h1>{{ postCat.charAt(0).toUpperCase() + postCat.slice(1) }}</h1>
      <figure
        v-show="$route.params.name === 'android'"
        class="banner">
        <img
          src="/assets/img/android.png"
          alt="android.png" />
      </figure>

      <section
        v-if="!data.includes('No posts found')"
        class="blog_card"
        v-for="card in data">
        <h2>
          <Nuxt-link :to="`/blog/${card.slug}`">{{ card.title }}</Nuxt-link>
        </h2>
        <p>{{ card.createdAt }}</p>
      </section>
      <div v-else>
        <p>{{ data }}</p>
      </div>
    </div>
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
  /* background-color: #1c1f26; */
  background-color: rgb(2, 3, 26);
  color: #e3e1dd;
}
.card p {
  border-top: 2px solid rgb(5, 189, 186);
  background: rgb(14, 19, 25);
  padding: 1rem;
  margin-top: 10px;
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

.banner img{
  width: 100%;
}
</style>
