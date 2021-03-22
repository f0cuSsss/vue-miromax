<template>
    <ChooseFilter v-if="!isLoading"
        :beforeImage="require('@/assets/images/GLasses-24px.svg')" 
        title="Жанр" 
        :items="getGenres" 
        @checkItem="checkGenre"
    />
    <Loader v-else />
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

import Loader from '@/components/loaders/Loader'

export default {
    async mounted() {
        await this.fetchGenres();
    },
    components: {
        Loader
    },
    methods: {
        ...mapActions({
            fetchGenres: 'filters/fetchGenres'
        }),
        ...mapMutations({
            toggleActive: 'filters/setToggleGenreActive'
        }),
        checkGenre(genre) {
            this.pickedGenres.forEach(g => {
                if(g.id === genre.id) {
                    g.checked = !g.checked;
                }
            });
            toggleActive = genre.id;
        },
    },
    computed: {
        ...mapGetters({
            getGenres: 'filters/genres',
            isLoading: 'filters/getGenresLoadingStatus'
        }),
    }
}
</script>