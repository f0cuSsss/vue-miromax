<template>
    <HamburgerMenu>
        <template #header>
            <Logo />
            <EmporiumDropdown />
            <drop-button 
                :iconPath="require('@/assets/images/baseline-smartphone-24px.svg')"
                :data="phones"
                :style="{ 'margin-left': '250px' }"
            ></drop-button>
            
            <LanguagePicker :style="{ 'margin-left': '350px' }" />
        </template>

        <template #content>
            <div class="wrapper">
                <div class="social">
                    <h4 class="social__title">Ми в соціальних мережах</h4>
                    <div class="social__list">
                        <a href="#" class="social__list__item">
                            <img :src="require('@/assets/images/social/facebook_24px_black.svg')" alt="">
                            <span class="social__list__item__name">Facebook</span>
                        </a>

                        <a href="#" class="social__list__item">
                            <img :src="require('@/assets/images/social/instagram_24px_black.svg')" alt="">
                            <span class="social__list__item__name">Instagram</span>
                        </a>

                        <a href="#" class="social__list__item">
                            <img :src="require('@/assets/images/social/youtube_24px_black.svg')" alt="">
                            <span class="social__list__item__name">Youtube</span>
                        </a>
                    </div>
                </div>

                <div class="navigation">
                    <nuxt-link class="navigation__item" to="">Розклад сеансів</nuxt-link>
                    <nuxt-link class="navigation__item" to="">Мій особистий кабінет</nuxt-link>
                    <nuxt-link class="navigation__item" to="">Про нас</nuxt-link>
                    <nuxt-link class="navigation__item" to="">Кінотеатри</nuxt-link>
                    <nuxt-link class="navigation__item" to="">Події та акції</nuxt-link>
                </div>
            </div>


            <span class="copyright">2020 Copyright miromax</span>
        </template>
    </HamburgerMenu>
</template>

<script>
import HamburgerMenu from '@/components/menu/HamburgerMenu'
import EmporiumDropdown from '@/components/EmporiumDropdown'
import LanguagePicker from '@/components/LanguagePicker'

export default {
    components: { HamburgerMenu, EmporiumDropdown, LanguagePicker },
    data: () => ({
        phones: ['+38 (066) 999 9999']
    })
}
</script>

<style lang="scss" scope>

    .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        // padding-top: 130px;
        padding: 60px 350px 100px 40px;
        align-items: center;

        .social {
            display: flex;
            flex-direction: column;

            &__title {
                font-size: 13px;
                font-weight: 400;
                margin-bottom: 32px;
            }

            &__list {
                display: flex;
                flex-direction: column;

                &__item {
                    display: flex;
                    align-items: center;
                    color: black;
                    text-decoration: none;

                    img {
                        width: 24px;
                        height: 24px;
                        margin-right: 20px;
                    }

                    &__name {
                        font-size: 17px;
                        font-weight: 600;
                    }

                    & + .social__list__item {
                        margin-top: 34px;
                    }
                }
            }
        }

        .navigation {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;

            &__item {
                font-size: 32px;
                font-weight: 700;
                color: #000;
                text-decoration: none;
                transition: all 0.3s ease-in-out;
                position: relative;

                & + .navigation__item {
                    margin-top: 40px;
                }

                &:hover {
                    color: $accent;

                    &::before {
                        content: '';
                        position: absolute;
                        color: $accent;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 1px;
                        transition: all 0.3s ease-in-out;
                    }
                }

                &:hover &::before {
                    content: '';
                    position: absolute;
                    color: $accent;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    transition: all 0.3s ease-in-out;
                }
            }
        }
    }
    


    .copyright {
        position: absolute;
        font-size: 13px;
        font-weight: 400;
        bottom: 20px;
        left: 28px;
    }
</style>