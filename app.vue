<template>
  <NuxtLayout>
    <main class="main">
      <Header />
      <NuxtPage class="nuxtpage" />
    </main>
    <Footer />
  </NuxtLayout>
</template>
<style>
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.nuxtpage {
  flex: 1;
}
</style>
