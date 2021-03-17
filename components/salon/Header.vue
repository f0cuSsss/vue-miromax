<template>
  <header class="header">

      <div class="header-top">
        <nuxt-link class="header-top__salon-logo" to="/salon">
            <img :src="require('@/assets/salon/images/b_salon_logo.svg')" alt="S&Mitler">
        </nuxt-link>
        <a href="tel: +375297022268" class="header-top__salon-tel">+375 (29) 999-88-77</a>

      </div>

      <div class="sidebar right-sidebar">
            <div class="burger-menu">
                <div class="menu-icon">
                    <span class="center-line"></span>
                </div>
            </div>

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

      <div class="sidebar bottom-sidebar">
          <div class="info-block">
            <div class="info-item place">
                <span>г. Минск, ул. Ивановского, 22а</span>
            </div>

            <div class="info-item phone">
                <a href="tel: +375297022268">+375 (29) 999-88-77</a>
            </div>

            <div class="info-item worktime">
                <span>Время работы: 10:00 - 22:00 ежедневно</span>
            </div>
          </div>
      </div>

      <div class="header-content">
          <h6 class="header-content__sub">Добро пожаловать в профессиональный</h6>
          <h1 class="header-content__title">Салон красоты</h1>
          <span class="header-content__city">в минске</span>
          <p class="header-content__description"><b>S&Mitler</b> является салоном бизнес-класса. Наши мастера создают Вам уверенность в себе, придавая выраженный индивидуализм внешности. В салоне можно воспользоваться услугами бьюти-индустрии – изюминкой и особенностью s&mitler.</p>
          <button class="header-content__about-salon">О салоне</button>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">

    .burger-menu {
        padding: 15px;
        top: 0;
        position: absolute;
        margin-top: 30px;
        transition: all 0.20s ease-in-out;

        &:hover {
            cursor: pointer;

            // background-color: red;
            // border-radius: 15px;
            opacity: 0.7;
            // color: rgba($color_1, 0.7);
        }

        .menu-icon {
            display: block;
            position: relative;
            width: 26px;
            height: 20px;

            .center-line {
                background-color: $color_1;
                float: left;
                position: absolute;
                width: 100%;
                height: 3px;
                border-radius: 15px;
                left: 0;
                top: 9px;
                transition: all 0.20s ease-in-out;
            }

            &::before, 
            &::after {
                content: '';
                background-color: $color_1;
                border-radius: 15px;
                position: absolute;
                width: 100%;
                height: 3px;
                left: 0;
            }

            &::before {
                top: 0;
            }

            &::after {
                bottom: 0;
            }
        }

    }

    .header {
        background: linear-gradient(#1a1a1a1a, #1a1a1a1a), url('@/assets/salon/images/header-bg.jpg') no-repeat;
        background-size: cover;
        
        height: 100vh;
        position: relative;

        &-top {
            position: absolute;
            padding: 40px 30px 0;
            width: calc(100% - 64px);
            display: flex;
            align-items: center;
            justify-content: space-between;
            

            &__salon-logo {
                // position: absolute;

                img {
                    height: 25px;
                }
            }

            &__salon-tel {
                text-decoration: none;
                font-size: 24px;
                color: $color_1;
                position: relative;
                
                &::before {
                    content: '';
                    position: absolute;
                    background: url('@/assets/salon/images/mobile-icon.svg') no-repeat;
                    width: 20px;
                    height: 20px;
                    left: -25px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }

        &-content {
            position: absolute;
            color: $color_1;
            left: 15%;
            top: 35%;
            width: 680px;
            overflow: hidden;
            text-transform: uppercase;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;

            &__sub {
                position: relative;
                display: inline-block;
                align-self: center;

                &::before, &::after {
                    content: '';
                    position: absolute;
                    background-color: rgba(255,255,255, 1);
                    top: 50%;
                    transform: translateY(0);
                    width: 100%;
                    height: 1px;
                }

                &::before {
                    left: -105%;
                }

                &::after {
                    right: -105%;
                }

            }
            &__title {
                // border-bottom: 1px solid $color_1;
                font-size: 45px;
                padding: 20px 30px;
                position: relative;
                text-align: center;
                letter-spacing: 5px;
                &::after {
                    content: '';
                    position: absolute;
                    background-color: $color_1;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    height: 1px;
                }
            }

            &__city {
                margin: 25px;
                position: relative;
                align-self: center;

                &::before, &::after {
                    content: '';
                    background: url('@/assets/salon/images/star.svg') no-repeat;
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                }

                &::before {
                    left: -30px;
                }

                &::after {
                    right: -30px;
                }
            }

            &__description {
                text-transform: none;
                margin-bottom: 30px;
                line-height: 1.75;
            }

            &__about-salon {
                background-color: #fad182;
                border-bottom: 3px solid #b6a990;
                border-radius: 4px;
                color: $color_1;
                align-self: center;
                font-weight: bold;
                text-transform: uppercase;
                padding: 10px 35px;
                transition: all 0.3s ease-in-out;
                filter: brightness(0.9);


                &:hover {
                    transition: all 0.3s ease-in-out;
                    cursor: pointer;
                    filter: brightness(1);
                }
            }
        }
    }



    .sidebar {
        background-color: rgba(0,0,0,.1);
        position: absolute;

        &.right-sidebar {
            // background-color: red;
            border-left: 1px solid rgba(255,255,255,.1);
            height: 100%;
            top: 0;
            right: 0;
            padding: 0 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            // position: relative;

            .social-list {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;

                &__item {
                    border-radius: 50%;
                    background-color: rgba(255,255,255,.4);
                    color: #353535;
                    padding: 12px;
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: filter 0.3s ease-in-out;
                    
                    img {
                        width: 20px;
                        fill: #353535;
                    }

                    &:hover {
                        filter: contrast(5%);
                        transition: filter 0.3s ease-in-out;
                    }
                }
            }
        }

        &.bottom-sidebar {
            border-top: 1px solid rgba(255,255,255,.1);
            width: 100%;
            // height: 40px;
            bottom: 0;
            left: 0;

            .info-block {
                display: flex;
                justify-content: space-between;
                margin: 0 15%;
                font-size: 16px;
                font-weight: 300;

                .info-item {
                    color: rgb(233, 233, 233);
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
                                background: url('@/assets/salon/images/direct-icon.svg');
                            }
                        }
                    }

                    &.phone {
                        a {
                            &::before {
                                background: url('@/assets/salon/images/mobile-icon.svg');
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
                                background: url('@/assets/salon/images/time-icon.svg');
                            }
                        }
                    }

                   
                }
            }
        }
    }
    



</style>