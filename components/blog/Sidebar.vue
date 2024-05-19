<script setup>
const router = useRouter()
const selectedOption = ref('')


watch(selectedOption, () => {
  // console.log(selectedOption.value)
  router.push(`/blog/category/${selectedOption.value}`)
})
</script>
<template>
  <div class="sidebar">
    <section>
      <h1>About</h1>

      <p>In this space I will be sharing tech related content in the subjects of software development, Linux, containers, and also FrontEnd, which is one of my favorite hobbies.</p>
    </section>

    <section>
      <BlogSearchInput />
    </section>
    <section>
      <h2>
        Category:
        <Icon
          name="lucide:filter"
          size="1rem" />
      </h2>

      <select v-model="selectedOption">
        <option value="android">Android</option>
        <option value="developer">Developer</option>
        <option value="drivers">Drivers</option>
        <option value="linux">Linux</option>
        <option value="music">Music</option>
        <option value="network">Network</option>
        <option value="windows">Windows</option>
        <option value="uncategorized">Uncategorized</option>
      </select>
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
</style>
