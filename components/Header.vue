<template>
  <header class="header">
      <div class="actions-block">
        <div class="burger-menu" @click.prevent="displayMenu">
            <div class="menu-icon">
                <span class="center-line"></span>
            </div>
        </div>

        <div ref="menu" class="menu " @click.prevent="displayMenu"> 
            <div class="menu__inner" @click="(e) => e.stopPropagation()">
                <div class="menu__header">
                    <button 
                        class="menu__close"
                        @click.prevent="displayMenu"
                    ></button>

                    <logo />

                    <drop-button :iconPath="require('../assets/images/miromax/outline-place-40px.svg')">
                        <template #title>Київ, ТРЦ Аладдін</template>
                        <template #data>
                            <h5>Київ, ТРЦ Аладдін</h5>
                            <h5>Другой город</h5>
                        </template>
                    </drop-button>
                </div>
            </div>
        </div>

        <logo />
        <drop-button
            :iconPath="require('../assets/images/miromax/outline-place-40px.svg')"
            :data="places"
        >
            <template #imageBefore>
                <!-- <span v-html="calendarLogo"></span> -->
                <span>X</span>
            </template>
        </drop-button>
        <MiromaxApp />
      </div>
      <div class="actions-block">
          <div class="action__item">
              <span class="hire-now-title">Зараз у прокатi:</span>
          </div>
          <div class="action__item">
              <choosemoviesButton :iconPath="require('../assets/images/popup/baseline-tune-24px.svg')">
                  <template #title>Підібрати фільм</template>
              </choosemoviesButton>
          </div>
          <div class="action__item">
              <drop-button 
                :inner="true" 
                :iconPath="require('../assets/images/outline-calendar_today-24px.svg')"
                :data="calendarData"
              ></drop-button>
          </div>
          <div class="action__item">
            <sidebar-button :iconPath="require('../assets/images/twotone-closed_caption-24px.svg')">
                <!-- <template #title>Розклад: 33 Сеанси</template> -->
                <template #seances><nobr>33</nobr></template>
            </sidebar-button>
          </div>
          <div class="action__item">
            <auth-button></auth-button>
          </div>
      </div>
  </header>
</template>

<script>
import dButton from './drop-button.vue'
import choosemoviesButton from './choosemovies-button.vue'
import logo from '@/components/logo'
import calendarLogo from '../assets/images/miromax/outline-place-40px.svg?raw'

export default {
    components: { dButton, logo, choosemoviesButton },
    methods: {
        displayMenu(e) {
            this.$refs.menu.classList.toggle('expanded');
        }
    },
    data() {
        return {
            calendarData: ['Сьогодні, 25 Серпня', 'Завтра, 26 Серпня', 'Четверг, 27 Серпня', 'П\'ятниця, 28 Серпня', 'Субота, 29 Серпня', 'Неділя, 30 Серпня'],
            places: ['Київ, ТРЦ Аладдін', 'Тернопіль, ТРЦ Подоляни']
        }
    }
}
</script>

<style lang="scss" scope>
    .header {
        // background-color: red;
        background: $color_1;
        border-radius: 0px 0px 16px 16px;
        box-shadow: 0 4px 2px -2px #00000014;
        display: flex;
        justify-content: space-between;
        align-items: center;
        opacity: 1;
        // padding: 16px 32px;
        padding: 16px;
        position: relative;
    }

    .burger-menu {
        padding: 15px;
        
        transition: all 0.20s ease-in-out;

        &:hover {
            cursor: pointer;
            .center-line {
                // width: 70%;
                transform: scaleX(0.6);
                transition: all 0.20s ease-in-out;
            }
        }

        .menu-icon {
            display: block;
            position: relative;
            width: 26px;
            height: 20px;

            .center-line {
                background-color: #000464;
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
                background-color: #000464;
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


    .menu {
        // background-color: rgba(216, 216, 216, 0.349);
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        
        transform: translateY(-100%);
        z-index: 50;
        transition: all 0.4s ease-in-out;
        opacity: 0;
        &.expanded {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.4s ease-in-out;
        }

        .menu__inner {
            background-color: $color_1;
            box-shadow: 0px 60px 115px 25px #565656;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            width: 100vw;
            height: 700px;
            z-index: 51;

            .menu__header {
                display: flex;
                align-items: center;
                padding: 10px 0;
                    .menu__close {
                        background: url('@/assets/images/close-24px.svg') no-repeat;
                        border-radius: 50%;
                        cursor: pointer;
                        background-color: $color_2;
                        margin: 25px;
                        padding: 5px;

                        color: $color_4;
                        width: 35px;
                        height: 35px;
                        background-size: contain;

                        transition: all 0.4s ease-in-out;

                        &:hover {
                            background-color: $color_4;
                            color: $color_1;
                            fill: red;
                            transition: all 0.4s ease-in-out;
                        }
                    }
            }
        }
    }


    .actions-block {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .hire-now-title {
            font-weight: 600;
            font-size: 15px;
        }

        .action__item + .action__item {
            margin-left: 20px;
        }
    }
</style>