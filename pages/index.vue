<template>
  <div class="container">
    <filmList :films="films" />
  </div>
</template>

<script>
// import variables from '~/assets/scss/colors.scss'
import { mapActions, mapGetters } from 'vuex'

import filmList from '@/components/films/filmList'

export default {
    components: {
        filmList
    },
    async mounted() {
      await this.fetchFilms();

      if(this.$route.query.modal) {
        this.$modal.show(this.$route.query.modal);
      }
    },
    methods: {
      ...mapActions({
        fetchFilms: 'films/fetchFilms'
      })
    },
    computed: {
      ...mapGetters({
        films: 'films/films'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    background-color: $color_1;
    
    svg {
      fill: $color_4;
    }
  }
</style>