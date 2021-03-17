<template>
  <div class="film-item">
      <div class="film__image">
          <img :src="`https://miromax-two.docker.tangram.biz/${film.poster_link}`" alt="Film image">          
      </div>
      <div class="film__content">
          <h3 class="film__title">{{ film.name }}</h3>
          <div class="film__details">
            <h4 class="film__age-limit">{{ film.age_limit }}</h4>
            <div class="film__categories">
                <span 
                    v-for="type in film.types"
                    :key="type.name"
                >{{ type.name }}</span>
            </div>
          </div>
          <div class="film__sessions">
              <h4 class="film__session-day">Сьогоднi</h4>
              <div class="film_sessions-list">
                  <div 
                    class="film__session"
                    v-for="event in film.events.slice(cur_part - swipe_part, cur_part)"
                    :key="event.id"
                  >
                      <h3 class="film__session--time">{{ event.start_datetime | dateParser }}</h3>
                      <div class="film__session-places">
                          
                        <div 
                            class="film__session--place"
                            v-for="price in event.prices"
                            :key="price.id"
                        >
                          <img :src="require('@/assets/images/film/Good.svg')" alt="GOOD">
                          <div class="film__session-price">
                              <h4 class="session-price--count">{{ price.price }}</h4>
                              <span class="session-price--currency">грн</span>
                          </div>
                        </div>

                      </div>
                  </div>
              </div>

              <div v-if="film.events.length > 4" class="film__sessions-slider">
                  <h4 class="film__sessions-slider--title">Наступні сеанси</h4>
                    <div class="sessions-slider__actions">
                        <button 
                            class="slider-button slider-back__button"
                            :class="cur_page === 1 ? 'disabled' : ''"
                            @click="prevSlide"
                        ></button>
                        <button 
                            class="slider-button slider-next__button"
                            :class="(cur_page === Math.ceil(film.events.length / swipe_part)) ? 'disabled' : ''"
                            @click="nextSlide"
                        ></button>
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import dateParser from '@/filters/dateParser'
export default {
    mounted() {
        this.cur_part = this.swipe_part;
    },
    props: {
        film: {
            type: Object
        }
    },
    data: () => ({
        cur_page: 1,
        cur_part: 0,
        swipe_part: 4
    }),
    methods: {
        prevSlide() {
            if(this.cur_page != 0) {
                this.cur_page--;
                this.calcPart();
            }
        },
        nextSlide() {
            if(this.cur_page < (this.film.events.length / 4)) {
                this.cur_page++;
                this.calcPart();
            }
        },
        calcPart() {
            this.cur_part = this.swipe_part * this.cur_page;
        }
    }
}
</script>

<style lang="scss" scoped>
    .film-item {
        background-color: #F2F2F2;
        border-radius: 16px;
        // width: 100%;
        display: grid;
        grid-template-columns: 1fr 3fr;

        .film__image {
            display: flex;
            align-items: center;
            padding: 20px 0;
            padding-right: 15px;

            img {
                width: 320px;
                border-radius: 10px;
                margin-left: -15px;
            }
        }

        .film__content {
            padding: 40px 10px;
            margin-top: 40px;
            padding-right: 40px;
            display: flex;
            flex-direction: column;

            .film__title {
                font-size: 28px;
            }

            .film__details {
                display: flex;
                padding: 10px 0;
                
                .film__age-limit {
                    font-size: 18px;
                    font-weight: 700;
                }

                .film__categories {
                    color: #000;
                    opacity: 0.5;
                    &::before {
                        content: '|';
                        padding: 0 10px;
                    }

                    span {
                        &::after {
                            content: ', ';
                        }

                        &:last-child:after {
                            content: ''
                        }
                    }
                }
            }
        }

        .film__sessions {

            .film__session-day {
                font-size: 16px;
                font-weight: 700;
                padding: 15px 0;
            }

            .film_sessions-list {
                display: flex;
                flex-wrap: wrap;
                .film__session {
                    $p: &;
                    background-color: $color_1;
                    border-radius: 20px;
                    box-shadow: 0px 8px 7px 0px #bdbdbd;
                    cursor: pointer;
                    padding: 10px;
                    width: 100px;
                    height: 100px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transition: all 0.3s ease-in-out;

                    &:hover {
                        box-shadow: none;
                        transition: all 0.3s ease-in-out;
                    }

                    + .film__session {
                        margin-left: 15px;
                    }

                    &--time {
                        font-size: 24px;
                        font-weight: 700;
                        padding-bottom: 5px;
                    }

                    &-places {
                        

                        .film__session--place {
                            display: flex;
                            overflow: hidden;
                            padding: 2px 0;
                            img {
                                padding-right: 5px;
                            }

                            .film__session-price {
                                display: flex;
                                align-items: center;
                                .session-price--count {
                                    font-weight: 600;
                                    font-size: 14px;
                                }

                                .session-price--currency {
                                    padding-left: 1px;
                                    font-weight: 400;
                                    font-size: 11px;
                                }
                            }
                        }
                    }
                }
                
            }

            .film__sessions-slider {
                display: flex;
                justify-content: space-between;
                padding-top: 50px;
                .film__sessions-slider--title {
                    font-size: 20px;
                    font-weight: 400;
                    letter-spacing: 0px;
                }

                .sessions-slider__actions {
                    display: flex;

                    .slider-button + .slider-button {
                        margin-left: 30px;
                    }

                    .slider-button {
                        background-color: $color_1;
                        border-radius: 50%;
                        cursor: pointer;
                        width: 40px;
                        height: 40px;
                        padding: 5px;
                        fill: $accent;
                        color: $accent;
                        // background-color: $accent;
                        display: flex;
                        justify-content: center;
                        align-items: center;
               
                        &:hover {
                            background-color: $accent;
                        }

                        &.disabled {
                            cursor: not-allowed;
                            pointer-events: none;
                            background-color: rgba($color_1, 0.5);
                        }
                    }

                    .slider-back__button {
                        &::before {
                            content: '';
                            background: url('~/assets/images/film/east-24px.svg');
                            fill: $accent;
                            transform: rotate(180deg);
                            height: 20px;
                            width: 20px;
                            background-size: contain;
                            background-repeat: no-repeat;
                        }
                    }

                    .slider-next__button {
                        &::before {
                            content: '';
                            background: url('~/assets/images/film/east-24px.svg');
                            fill: $accent;
                            height: 20px;
                            width: 20px;
                            background-size: contain;
                            background-repeat: no-repeat;
                        }
                    }
                }
            }
        }

    }
</style>