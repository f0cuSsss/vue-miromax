<template>
    <div class="sidebar">
        <div class="sidebar-button" @click.prevent="handleDisplaySidebar">
            <div class="icon__before icon-wrapper hover-wrapper">
                <img :src="iconPath" alt="\/">
            </div>
            <span>Розклад: <slot name="seances"></slot> Сеанси</span>
        </div>

        <div ref="sidebarMenu" class="sidebar-menu">
            <div class="sidebar-menu__inner">
                <div class="sidebar__header">
                    <h3 class="sidebar__header--title">Розклад сеансів Київ, ТРЦ Аладдин: <span>33 Сеанси</span></h3>
                    <div class="sidebar__header--video-formats">
                        <h3>Формат, LUX</h3>
                        <ul class="formats__list">
                            <li class="active">Всi</li>
                            <li>2D</li>
                            <li>3D</li>
                            <li>LUX</li>
                        </ul>
                    </div>
                </div>

                <div class="sidebar-menu__content">
                    <div class="schedule__days-list">
                        <button 
                            class="schedule__days--item"
                            :class="activeDay == item.day ? 'active' : ''"
                            v-for="item in schedule_days"
                            :key="item.date"
                            @click.prevent="setActiveDay(item.day)"
                        >
                            <h4 class="schedule__date">{{ item.date }}</h4>
                            <span class="schedule__day">{{ item.day }}</span>
                        </button>
                    </div>
                    <div class="schedule__detail-list">
                        <button
                            class="schedule__detail--item"
                            v-for="film in films"
                            :key="film.id"
                        >
                            <div class="schedule__position schedule-item-column">
                                <div class="schedule-item-row">
                                    <h3 class="schedule__time">TIME</h3>
                                </div>
                                <div class="schedule-item-row">
                                    <span class="schedule__hall">HALL</span>
                                </div>
                            </div>
                            <div class="schedule__film--detail schedule-item-column">
                                <div class="schedule-item-row">
                                    <h3 class="schedule__film--name">Film name</h3>
                                </div>
                                <div class="schedule-item-row">
                                    <div class="schedule__film-types">
                                        <h4 class="schedule__film--age-limit">12+</h4>
                                        <span class="schedule__film--types">Жанр (ы)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="schedule__film-price-block schedule-item-column">
                                <div class="schedule-item-row">
                                    <img :src="require('@/assets/images/film/Good.svg')" alt="GOOD">
                                    <div class="schedule__film--price">
                                        <h4 class="schedule__price--count">100</h4>
                                        <span class="schedule__price--currency">грн</span>
                                    </div>
                                </div>
                                <div class="schedule-item-row">
                                    <span>Купити квиток</span>
                                </div>
                            </div>
                            <div class="schedule__film-price-block schedule-item-column">
                                <div class="schedule-item-row">
                                    <img :src="require('@/assets/images/film/Good.svg')" alt="GOOD">
                                    <div class="schedule__film--price">
                                        <h4 class="schedule__price--count">100</h4>
                                        <span class="schedule__price--currency">грн</span>
                                    </div>
                                </div>
                                <div class="schedule-item-row">
                                    <span>Купити квиток</span>
                                </div>
                            </div>
                            <button class="schedule__buy-button schedule-item-column">
                                
                            </button>
                        </button>
                    </div>
                </div>
            </div>

            <button 
                class="sidebar__close-button"
                @click.prevent="handleDisplaySidebar"
            ></button>

        </div>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: ['iconPath'],
    mounted() {
        this.activeDay = this.schedule_days[0].day;
        console.log(this.films);
    },
    data() {
        return {
            schedule_days: [
                { date: '21 Серпня', day: 'Сьогодні' },
                { date: '22 Серпня', day: 'Завтра' },
                { date: '23 Серпня', day: 'Неділя' },
                { date: '24 Серпня', day: 'Понеділок' },
                { date: '25 Серпня', day: 'Вівторок' },
                { date: '26 Серпня', day: 'Середа' },
                { date: '27 Серпня', day: 'Четверг' }
            ],
            activeDay: {
                type: String
            }
        }
    },
    methods: {
        handleDisplaySidebar(status = false) {
            this.$refs.sidebarMenu.classList.toggle('expanded');
        },
        setActiveDay(day) {
            this.activeDay = day;
        }
    },
    computed: {
        ...mapGetters({
            'films': 'films/films'
        }),
    }
}
</script>

<style lang="scss" scoped>
    .sidebar {

        .sidebar__close-button {
            background-color: $color_1;
            cursor: pointer;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            position: absolute;
            top: 25px;
            right: 30px;
            z-index: 56;

            &::before {
                content: '';
                background: url('@/assets/images/twotone-closed_caption-24px.svg') no-repeat;
                background-size: contain;
                width: 25px;
                height: 25px;
                transform: rotate(180deg);
                
            }

            &:hover {
                background-color: $accent;
                &::before {
                    fill: $color_1;
                }
                
            }
        }
        
        .sidebar-button {
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
                font-weight: 600;
                font-size: 15px;

                nobr {
                    color: $accent;
                }
            }

            &:hover {
                cursor: pointer;
            }

        }

        .sidebar-menu {
            background-color: rgba(236, 236, 236, 0.418);
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            transform: translateX(100%);
            transition: all 0.5s ease-in-out;
            z-index: 55;
            opacity: 0;

            &.expanded {
                opacity: 1;
                transform: translateX(0%);
                transition: all 0.5s ease-in-out;
            }

            .sidebar-menu__inner {
                overflow-y: hidden;
                position: fixed;
                background-color: $color_2;
                box-shadow: -14px 9px 80px 4px #969696;
                border-top-left-radius: 25px;
                border-bottom-left-radius: 25px;
                overflow: hidden;
                padding: 30px 20px;
                padding-right: 100px;
                height: 100vh;
                width: 1000px;
                right: 10px;
                top: 0;
                z-index: 56;
                .sidebar__header {
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 2px solid $color_3;
                    padding: 10px;


                    .sidebar__header--title {
                        font-size: 17px;
                        font-weight: 600;

                        span {
                            color: $accent;
                        }
                    }

                    .sidebar__header--video-formats {
                        display: flex;

                        h3 {
                            font-size: 17px;
                            font-weight: 700;

                            &::before {
                                content: '';
                                background: url('@/assets/images/GLasses-24px.svg') no-repeat;
                                padding-right: 30px;
                                padding-bottom: 2px;
                                width: 20px;
                                height: 20px;
                            }
                        }

                        .formats__list {
                            margin-left: 10px;
                            li {
                                list-style-type: none;
                                font-weight: 600;
                                color: $color_5;
                                cursor: pointer;
                                display: inline;
                                padding: 2px 5px;

                                &.active {
                                    color: $accent;
                                }
                            }
                        }
                    }
                }

                .sidebar-menu__content {
                    display: flex;
                    flex-direction: column;

                    .schedule__days-list {
                        margin: 25px 20px;
                        // background-color: red;
                        text-align: center;
                        .schedule__days--item {
                            background-color: $color_1;
                            cursor: pointer;
                            padding: 24px;
                            margin: 0 1px;

                            &.active {
                                background-color: $accent;

                                .schedule__date, .schedule__day {
                                    color: $color_1;
                                }
                            }

                            &:first-child {
                                border-top-left-radius: 10px;
                                border-bottom-left-radius: 10px;
                            } 
                            
                            &:last-child {
                                border-top-right-radius: 10px;
                                border-bottom-right-radius: 10px;
                            }

                            .schedule__date {
                                font-weight: 700;
                                font-size: 13px;
                                margin-bottom: 8px;
                            }

                            .schedule__day {
                                color: $color_6;
                            }
                        }
                    }
                    

                    .schedule__detail-list {
                        // background-color: red;
                        border-top: 1px solid rgba(36, 36, 36, 0.055);
                        margin-top: 20px;
                        display: flex;
                        flex-direction: column;
                        .schedule__detail--item {
                            padding: 10px;
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            .schedule-column {
                                display: flex;
                                flex-direction: column;
                                .schedule-item-row:last-child {
                                    margin-top: 5px;
                                }
                            }

                            .schedule__position {

                                .schedule__time {

                                }

                                .schedule__hall {

                                }
                            }

                            .schedule__film--detail {
                                
                                .schedule__film--name {

                                }

                                .schedule__film-types {

                                    .schedule__film--age-limit {

                                    }

                                    .schedule__film--types {

                                    }
                                }
                            }

                            .schedule__film-price-block {
                                display: flex;
                                overflow: hidden;
                                padding: 2px 0;
                                img {
                                    padding-right: 5px;
                                }

                                .schedule__film--price {
                                    display: flex;
                                    align-items: center;
                                    .schedule__price--count {
                                        font-weight: 600;
                                        font-size: 14px;
                                    }
                                    
                                    .schedule__price--currency {
                                        padding-left: 1px;
                                        font-weight: 400;
                                        font-size: 11px;
                                    }
                                }

                            }

                            .schedule__buy-button {
                                border: 1px solid rgb(206, 206, 206);
                                border-radius: 10px;
                                padding: 13px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                &::before {
                                    content: '';
                                    background: url('@/assets/images/twotone-closed_caption-24px.svg') no-repeat;
                                    background-size: contain;
                                    width: 25px;
                                    height: 25px;
                                    transform: rotate(180deg);

                                }
                            }
                        }
                    }

                }
            }


        }
        


    }
</style>