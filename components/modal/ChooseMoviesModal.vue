<template>
    <Modal name="choosemovie">
        <template #body>
            <div class="choose-movie">
                <div class="choose-movie__header">
                    <h1 class="choose-movie__header--title">Підібрати фільм</h1>
                </div>
                <div class="choose-movie__content">

                    <div class="choose-movie__filter-row">
                        <div class="choose-movie__filter-column">
                            <!-- <ChooseGenres :genres="parsedFilmTypes()" /> -->
                            <ChooseGenres />
                        </div>
                        <div class="choose-movie__filter-column">
                            <!-- <ChooseFormats :formats="parsedFilmFormats()" />
                            <ChooseEvents :events="parsedFilmEvents()" /> -->
                        </div>
                    </div>

                    <div class="choose-movie__filter-row">
                        <div class="choose-movie__filter-button">
                            <button class="choose-movie__filter-button--clear">Очистити фільтр</button>
                            <button class="choose-movie__filter-button--apply">Примінити фільтр</button>
                        </div>
                    </div>

                </div>
            </div>
        </template>
    </Modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    methods: {
        // ...mapActions({
        //     fetchGenres: 'filters/fetchGenres'
        // }),
        // ...mapGetters({
        //     getFilms: 'films/films'
        // }),
        // parsedFilmTypes() {
        //     let parsedTypes = [];
        //     if(!this.getFilms()) return parsedTypes;

        //     this.getFilms().forEach(film => {
        //         film.types.forEach(type => {
        //             if(parsedTypes.some(pt => pt.id === type.id)) {
        //                 parsedTypes.forEach(t => {
        //                     if(t.id === type.id) {
        //                         t.count++;
        //                     }
        //                     t = Object.assign(t, t['checked'] = false);
        //                 });
        //             } else {
        //                 parsedTypes.push({ id: type.id, name: type.name, count: 1 });
        //             }
        //         });
        //     });

        //     return parsedTypes;
        // },
        // parsedFilmFormats() {
        //     let parsedFormats = [];
        //     if(!this.getFilms()) return parsedFormats;

        //     this.getFilms().forEach(film => {
        //         if(parsedFormats.some(f => f.name === film.format)) {
        //             parsedFormats.forEach(t => {
        //                 if(t.name === film.format) {
        //                     t.count++;
        //                 }
        //                 t = Object.assign(t, t['checked'] = false);
        //             });
        //         } else {
        //             if(film.format)
        //                 parsedFormats.push({ name: film.format, count: 1 });
        //         }
        //     });

        //     return parsedFormats;
        // },
        // parsedFilmEvents() {
        //     let parsedEvents = [];
        //     if(!this.getFilms()) return parsedEvents;


        //     return parsedEvents;
        // }
    }
}
</script>

<style lang="scss" scope>
    %filter-button {
        border-radius: 25px;
        cursor: pointer;
        padding: 18px 25px;
        font-size: 17px;
        font-weight: 700;
    }

    .choose-movie {
        padding: 0 60px 25px;
        &__header {
            padding: 20px 0;
            border-bottom: 1px solid #000;

            &--title {
                font-weight: 700;
                font-size: 34;

                &::before {
                    content: '';
                    background: url('@/assets/images/popup/baseline-tune-24px.svg') no-repeat;
                    background-size: contain;
                    display: inline-block;
                    padding-left: 16px;
                    width: 40px;
                    height: 40px;
                    vertical-align: bottom;
                }
            }
        }
        
        &__content {
            min-width: 600px;
        }

        &__filter {
            &-row {
                flex-wrap: wrap;
                display: flex;
                justify-content: space-between;
                padding: 10px;
            }

            &-column {
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
            }

            &-button {
                display: flex;
                justify-content: flex-end;
                width: 100%;

                &--clear {
                    @extend %filter-button;
                    
                    background-color: transparent;
                    color: $color_6;
                    margin-right: 20px;
                }

                &--apply {
                    @extend %filter-button;
                    background-color: $accent;
                    background: linear-gradient(to right, $accent, $accent_2);
                    color: $color_1;
                }
            }
        }
    }
</style>