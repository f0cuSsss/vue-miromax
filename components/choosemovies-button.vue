<template>
    <div>
        <button class="choosemovies-button" @click="$modal.show('choosemovie')">
            <div class="icon__before icon-wrapper hover-wrapper">
                <img :src="iconPath" alt="\/">
            </div>
            <span>
                <slot name="title"></slot>
            </span>
        </button>

        <ChooseMoviesModal></ChooseMoviesModal>
    </div>
</template>

<script>
import ChooseMoviesModal from '@/components/modal/ChooseMoviesModal'
export default {
    components: {
        ChooseMoviesModal
    },
    props: ['iconPath']
}
</script>

<style lang="scss" scope>
    .choosemovies-button {
        background-color: transparent;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            font-weight: 600;
            font-size: 15px;
        }
    }
</style>