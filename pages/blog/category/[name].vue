<script setup>
const route = useRoute()
const postCat = route.params.name


const { data } = await useFetch(`https://api.geraldox.com/posts/category?name=${postCat}`)


</script>
<template>
  <div v-if="data" class="listPosts">
    <h1>Posts Categories: {{ postCat }}</h1>
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
</template>
<style scoped>
.listPosts {
  min-height: 80vh;
  padding: 1rem;
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
  border: 1px solid #B0A99F;
  background: rgb(14, 19, 25);
  padding: 1rem;
  margin-block: 10px;
 
}

.blog_card a, .blog_card{
  color: #e3e1dd;
}

.blog_card a{
  text-decoration: none;
}
</style>
