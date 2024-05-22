<script setup>
// enabling cache
const nuxtApp = useNuxtApp()

const url = 'https://api.geraldox.com/posts'
//const url = 'http://localhost:4444/posts'

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
  <main class="container">
    <div class="listPosts">
      <div>
        <h1>geraldoX Blog</h1>
      </div>
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
    <BlogSidebar class="sidebar" />
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

section {
  padding: 10px 0;
}

.listPosts {
  padding: 5px;
  flex: 1 0 80%;
  /* background-color: #1c1f26; */
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

.blog_card a {
  color: #e3e1dd;
}

.blog_card a {
  text-decoration: none;
}

.category a {
  color: #60c7de;
}

time {
  color: #b0a99f;
}
.blog_card h1:hover {
  text-decoration: underline;
}
</style>
