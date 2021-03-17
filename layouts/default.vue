<template>
  <div class="app">
    <Header></Header>
    <main>
      <Nuxt />
    </main>
    <Footer></Footer>

      <!-- Modals -->
    <AuthorizationMenuModal></AuthorizationMenuModal>
    <AuthModal></AuthModal>
    <RegModal></RegModal>
  </div>
</template>

<script>
import AuthorizationMenuModal from '@/components/modal/authentication/AuthorizationMenuModal'
import AuthModal from '@/components/modal/authentication/AuthModal'
import RegModal from '@/components/modal/authentication/RegModal'

export default {
    components: {
        AuthorizationMenuModal, AuthModal, RegModal
    },
}
</script>

<style lang="scss" scoped>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    margin-top: 2px;
    flex: 1 1 auto;
    margin-top: 100px;
  }
</style>
