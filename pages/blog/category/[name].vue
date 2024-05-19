<script setup>
const route = useRoute()
const postCat = route.params.name

console.log(postCat)

const { data } = await useFetch(`https://api.geraldox.com/posts/category?name=${postCat}`)
</script>
<template>
  <div>
    <h1>Categories page {{ postCat }}</h1>
    <section
      class="cardcat"
      v-for="card in data">
      <p>
        <Nuxt-link :to="`/blog/${card.slug}`">{{ card.title }}</Nuxt-link>
      </p>
    </section>
  </div>
</template>
<style scoped>
div {
  padding: 1rem;
}
.card p {
  border-top: 2px solid rgb(5, 189, 186);
  background: rgb(14, 19, 25);
  padding: 1rem;
  margin-top: 10px;
}
</style>
