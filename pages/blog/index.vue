<script setup>
const url = 'https://api.gcosta.shop/posts' 
//const url = 'http://localhost:4444/posts'

const currentPage = ref(1)
const postsPerPage = 10

const fetchData = async () => {
  const response = await fetch(`${url}?_page=${currentPage.value}&_limit=${postsPerPage}`, {
    headers: {
      Accept: 'application/json',
      psw: '9090',
      Authorization: 'Bearer GERALDODEVGPDEV',
    },
  })
  return await response.json()
}

const responseData = ref([])

fetchData().then((data) => {
  responseData.value = data
})

const totalPages = computed(() => Math.ceil(responseData.value.length / postsPerPage))

const paginatedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  return responseData.value.slice(startIndex, endIndex)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    fetchData().then((data) => {
      responseData.value = data
    })
  }
}

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    fetchData().then((data) => {
      responseData.value = data
    })
  }
}
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
          v-for="post in paginatedPosts"
          :key="post.id">
          <h1>
            <NuxtLink :to="`/blog/${post.slug}`"> {{ post.title }}</NuxtLink>
          </h1>
          <time>{{ post.createdAt }}</time>
          <p class="category">
            <NuxtLink :to="`/blog/category/${post.category}`">{{ post.category }}</NuxtLink>
          </p>
        </div>
      </section>
      <div class="pagination">
        <button
          @click="previousPage"
          :disabled="currentPage === 1">
          Previous
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages">
          Next
        </button>
      </div>
      <p>published posts: {{ responseData.length }}</p>
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

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.pagination button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
.pagination button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
