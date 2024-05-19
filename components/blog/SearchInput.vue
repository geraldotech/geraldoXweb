<script setup>
const route = useRoute()
const postCat = route.query
const { q } = postCat

const router = useRouter()
const searchWord = ref('')

const searchHandler = () => {
 // console.log(searchWord.value)
  router.push(`/blog/search?q=${searchWord.value}`)
}


</script>
<template>
   <section>
      <h2>Search: <Icon name="uil:search" size="1.2rem" /></h2>
      <form
        class="formSearch"
        @submit.prevent="searchHandler">
        <input
          type="text"
          minlength="3"
          v-model="searchWord"
          placeholder="Enter at least 3 characters"
          required />
        <input
          type="submit"
          value="Search" />
      </form>
    </section>
   <!--  <p>
      <button type="button" @click="() => router.push('/blog/search?q=win')">
      Click me win
    </button>
    </p> -->
</template>