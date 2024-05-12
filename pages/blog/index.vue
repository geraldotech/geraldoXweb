<script setup>
// enabling cache
const nuxtApp = useNuxtApp()

const url = 'https://api.geraldox.com/posts'

const { data } = await useFetch(url, {
  headers: {
    Accept: 'application/json',
    psw: '9090',
    Authorization: 'Bearer GERALDODEVGPDEV',
  }, 
  
  transform(input) {
    return {
      ...input,
     // fetchAt: new Date(),
    }
  },
  getCachedData(key) {
    // return nullish value -> refetch the data
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
  },
})

//console.log(data)



</script>
<template>
  <div>
    <h1>Blog Posts</h1>

    <ul>
      <li v-for="post in data">
        <NuxtLink :to="`/blog/${post.slug}`">  {{ post.title }}</NuxtLink>
      
      </li>
    </ul>
  </div>
</template>
