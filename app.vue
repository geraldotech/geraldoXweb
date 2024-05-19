<template>
  <NuxtLayout>
    <main class="main">
      <Header />
      <NuxtPage class="nuxtpage" />
      <Footer />
    </main>
  </NuxtLayout>
</template>
<style>
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.container {
  flex: 1;
}
</style>
