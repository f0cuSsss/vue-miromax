<template>
  <!-- <h1 class="no-have-films" v-if="films.length === 0">Не можу знайти фільми :(</h1> -->
  
  <div 
    v-if="!isFilmsLoading"
    class="films-list"
  >
      <film
        v-for="(film, i) in films"
        :key="i"
        :film="film"
      />
  </div>

  <Loader v-else />
</template>

<script>
import { mapGetters } from 'vuex'

import film from '@/components/films/filmitem'
import Loader from '@/components/loaders/Loader'

export default {
  props: {
    films: {
      type: Array,
      default: () => []
    }
  },
  components: { film, Loader },
  computed: {
    ...mapGetters({
      isFilmsLoading: 'films/getLoadingStatus'
    })
  },
  // watch: {
  //   isFilmsLoading() {}
  // }
}
</script>

<style lang="scss" scoped>
    .no-have-films {
      text-align: center;
      letter-spacing: 3px;
      font-weight: 400;
      margin-top: 30px;
    }

    .films-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 50px;
        grid-row-gap: 30px;
        padding-bottom: 30px;
        width: 100%;
        min-height: 100%;
        padding: 30px;
    }
</style>