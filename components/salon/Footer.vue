<template>
  <footer class="footer">
      <div class="footer__row">

        <div class="footer__column footer__column__first">
            <nuxt-link class="header-top__salon-logo" to="/salon">
                <img :src="require('@/assets/salon/images/b_salon_logo.svg')" alt="S&Mitler">
            </nuxt-link>
            <p>Cалон красоты бизнес-класса в Минске</p>
            <p>ООО «Минск красота» ОГРН 111222334556</p>
            <div class="social-list">
                <a href="https://tangram.ua/eng/index.html" class="social-list__item">
                <img :src="require('@/assets/salon/images/vk-logo.svg')" alt="">
                </a>
                <a href="https://tangram.ua/eng/index.html" class="social-list__item">
                <img :src="require('@/assets/salon/images/facebook-logo.svg')" alt="">
                </a>
                <a href="https://tangram.ua/eng/index.html" class="social-list__item">
                <img :src="require('@/assets/salon/images/twitter-logo.svg')" alt="">
                </a>
            </div>
        </div>

        <div class="footer__column footer__column__second">
            <ul class="nav-list">
                <li 
                    class="nav-list__item"
                    v-for="item in navlist"
                    :key="item"

                >
                    <CrystalIcon />
                    <a href="#">{{ item.title }}</a>
                </li>
            </ul>
        </div>

        <div class="footer__column footer__column__third">
            <div class="info-block">
                <div class="info-item place">
                    <span>г. Минск, ул. Ивановского, 22а</span>
                </div>

                <div class="info-item worktime">
                    <span>Время работы: 10:00 - 22:00 ежедневно</span>
                </div>

                <div class="info-item phone">
                    <a href="tel: +375297022268">+375 (29) 999-88-77</a>
                </div>


            </div>
        </div>

      </div>
  </footer>
</template>

<script>
import CrystalIcon from '@/assets/salon/images/crystal.svg?raw';
export default {
    components: { CrystalIcon },
    data() {
        return {
            navlist: [
                { title: 'Парикмахерский сервис', navto: '' },
                { title: 'Ногтевой сервис', navto: '' },
                { title: 'Косметологический сервис', navto: '' },
                { title: 'Массаж и SPA', navto: '' },
                { title: 'Солярий', navto: '' },
                { title: 'Наши специалисты', navto: '' },
            ]
        }
    }
}
</script>

<style lang="scss" scope>
    .footer {
        background-color: #242424;
        padding: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        &__row {
            display: flex;
            
        }

        &__column {
            display: flex;
            flex-direction: column;
            // flex-wrap: wrap;
            overflow: hidden;

            & + .footer__column {
                margin-left: 25px;
            }

            &__first {
                width: 200px;

                p {
                    color: rgba(255,255,255,.4);
                    margin: 10px 0;
                }
            }

            &__second {
                width: 275px;
            }

            &__third {
                width: 370px;
            }
        }

        .social-list {
                display: flex;
                flex-direction: row;
                align-items: center;
                // height: 100%;
                margin-top: 10px;

                &__item {
                    border-radius: 50%;
                    background-color: rgba(255,255,255,.4);
                    color: #353535;
                    padding: 10px;
                    // margin-bottom: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: filter 0.3s ease-in-out;

                    & + .social-list__item {
                        margin-left: 15px;
                    }
                    
                    img {
                        width: 15px;
                        fill: #353535;
                    }

                    &:hover {
                        filter: contrast(5%);
                        transition: filter 0.3s ease-in-out;
                    }
                }
        }

        .nav-list {

            &__item {
                padding: 10px 0;
                padding-left: 22px;
                // position: relative;

                a {
                    color: rgba(255,255,255,.5);

                    &:hover {
                        color: #f9c869;
                        text-decoration: none;
                    }

                    
                }

                &::before {
                        // content: '';
                        // position: absolute;
                        // background: url('@/assets/salon/images/diamond-outlined-shape.svg');


                        // @include coloredImage('@/assets/salon/images/diamond.svg', rgba(255, 255, 255, .7));
                        // display: inline-block;
                        // position: relative;
                        // vertical-align: middle;
                        // width: 15px;
                        // height: 15px;
                        // left: -7px;


                        // background-color: red;
                        // display:inline-block;
                        // vertical-align:top;
                        // left: 0px;
                        // top: 50%;
                        // transform: translateY(-50%);



                        content: '';
                        width: 15px;
                        height: 15px;
                        background: url('@/assets/salon/images/diamond-outlined-shape.svg');
                        // @include coloredImage('@/assets/salon/images/time-icon.svg', rgba(255, 255, 255, .6));
                        z-index: 1000;
                        left: -8px;
                        top: 50%;
                        position: relative;
                        transform: translateY(-50%);
                    }
            }
        }

        .info-block {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            // align-items: center;
            margin: 0 15%;
            font-size: 16px;
            font-weight: 300;

            .info-item {
                color: rgba(255,255,255,.9);
                padding: 12px;
                position: relative;

                a {
                    text-decoration: none;
                    color: rgb(233, 233, 233);
                }

                span {

                    &::before {
                        content: '';
                        width: 15px;
                        height: 15px;
                        
                        left: -8px;
                        top: 50%;
                        position: absolute;
                        transform: translateY(-50%);
                    }
                }

                &.place {
                    span {
                        &::before {
                            // background: url('@/assets/salon/images/direct-icon.svg');
                            @include coloredImage('@/assets/salon/images/direct-icon.svg', rgba(255, 255, 255));
                        }
                    }
                }

                &.phone {
                    a {
                        font-size: 1.4em;
                        color: #fff;
                        font-weight: 500;
                        &::before {
                            // background: url('@/assets/salon/images/mobile-icon.svg');
                            @include coloredImage('@/assets/salon/images/mobile-icon.svg', rgba(255, 255, 255));
                            content: '';
                            width: 15px;
                            height: 15px;
                            left: -8px;
                            top: 50%;
                            position: absolute;
                            transform: translateY(-50%);
                        }
                    }
                }

                &.worktime {
                    span {
                        &::before {
                            @include coloredImage('@/assets/salon/images/time-icon.svg', rgba(255, 255, 255, .6));
                        }
                    }
                }

                
            }
        }

    }
</style>