<template>
    <div class="filter">
        <div class="filter__header">
            <img :src="beforeImage" alt="">
            <h3 class="filter__title">{{ this.title }}</h3>
        </div>

        <div v-if="items.length > 0" class="filter-list">
            <div 
                class="filter-list__item"
                v-for="filter in items"
                :key="filter.id"
                :class="filter.checked ? 'active' : ''"
                @click="$emit('checkItem', filter)"
            >
                <span class="filter-list__item__name">{{ filter.name + ' (' + filter.count + ')' }}</span>
            </div>
        </div>
        <span class="error-load-filters" v-else>Can't load filter list</span>
    </div>
</template>

<script>

export default {
    props: {
        beforeImage: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    },
    watch: {
        items() {}
    }
}
</script>

<style lang="scss" scope>
    %presudo {
        content: '';
        //display: flex;
    }

    .error-load-filters {
        font-size: 11px;
        color: rgb(122, 0, 0);
    }

    .filter {
        margin-top: 15px;
        cursor: pointer;

        &__header {
            display: flex;
            align-items: center;
            img {
                width: 20px;
                height: 20px;
                margin-right: 7px;
            }

            &__title {
                font-size: 20px;
                font-weight: 700;
                padding: 15px;

                // &::before {
                //     @extend %presudo;
                //     // background: url('');
                //     width: 30px;
                //     height: 30px;
                //     padding-right: 10px;
                // }

                &::after {
                    content: '(Кількість фільмів)';
                    font-size: 14px;
                    font-weight: 600;
                    color: $color_6;
                    margin-left: 12px;
                }
            }
        }


        &-list {
            display: flex;
            flex-wrap: wrap;
            &__item {
                border: 1px solid $color_7;
                border-radius: 16px;
                padding: 11px 24px;
                margin: 5px;

                &__name {
                    // $name: &;
                    font-size: 14px;
                }

                &:hover {
                    border: 1px solid $accent;
                    background: $color_7;
                }

                &.active {
                    background-color: $accent;
                    color: $color_1;
                    // #{$name} {
                    //     %item-presudo {
                    //         width: 18px;
                    //         height: 18px;
                    //     }

                    //     color: $color_1;
                    //     &::before {
                    //         @extend %pseudo;
                    //         @extend %item-presudo;
                    //         background-color: rgb(217, 255, 0);
                    //     }

                    //     &::after {
                    //         @extend %pseudo;
                    //         @extend %item-presudo;
                    //         background-color: rgb(66, 216, 29);
                    //     }
                    // }
                }
            }
        }
    }
</style>

