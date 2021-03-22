<template>
  <div class="my-account">
      <h1>My account</h1>
  </div>
</template>

<script>
export default {
    middleware: 'auth'
}
</script>

<style lang="scss" scope>
    .my-account {
        display: flex;
        align-items: center;
    }
</style>
