<script setup>
const router = useRouter()
const selectedOption = ref('')

const { data } = await useFetch('https://api.geraldox.com/posts/categories')

//console.log(categories[0])

watch(selectedOption, () => {
  // console.log(selectedOption.value)
  router.push(`/blog/category/${selectedOption.value}`)
})
</script>
<template>
  <div class="sidebar">
    <section>
      <BlogSearchInput />
    </section>
    <h3>
      Category:
      <Icon
        name="lucide:filter"
        size="1rem" />
    </h3>
    <section class="category">
      <select v-model="selectedOption">
        <option
          v-for="cat in data"
          :value="cat.category">
          {{ cat.category.charAt(0).toUpperCase() + cat.category.slice(1) }} - {{ cat.post_count }}
        </option>
      </select>
    </section>
    <h1>About</h1>
    <p>In this space I will be sharing tech related content in the subjects of software development, Linux, containers, and also FrontEnd, which is one of my favorite hobbies.</p>
    <section>
      <figure class="imgflex">
        <img
          src="https://geraldox.com/src/assets/img/pairprogramming-amico.svg"
          alt="" />
      </figure>
    </section>
  </div>
</template>
<style>
.formSearch input {
  border: none;
  padding: 8px;
  border: 1px solid;
  margin: 0 2px;
}

.sidebar .category{
  text-align: center;
}
</style>
