<template>
  <div class="app">
    <Header></Header>
    <main>
      <Nuxt />
    </main>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    margin-top: 2px;
    flex: 1 1 auto;
  }
</style>
