<template>
  <div class="container">
    <filmList :films="films" />

        <AuthorizationMenuModal></AuthorizationMenuModal>
        <AuthModal></AuthModal>
        <RegModal></RegModal>
  </div>
</template>

<script>
// import variables from '~/assets/scss/colors.scss'
import { mapActions, mapGetters } from 'vuex'

import filmList from '@/components/films/filmList'
import AuthorizationMenuModal from '@/components/modal/authentication/AuthorizationMenuModal'
import AuthModal from '@/components/modal/authentication/AuthModal'
import RegModal from '@/components/modal/authentication/RegModal'

export default {
    components: {
        AuthorizationMenuModal, filmList, AuthModal, RegModal
    },
    async mounted() {
      // console.log("VAR:", variables.primaryColor);
      await this.fetchFilms();

      // console.log(this.$route.query.modal);
      if(this.$route.query.modal) {
        this.$modal.show(this.$route.query.modal);
        // this.$route.params = {};
        // this.$modal.show('signin');
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