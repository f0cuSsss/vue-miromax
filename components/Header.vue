<template>
  <header class="header">
      <div class="actions-block">
        <HamburgerMenu>
            <template #header>
                <logo />
                <drop-button :iconPath="require('../assets/images/miromax/outline-place-40px.svg')">
                    <template #title>Київ, ТРЦ Аладдін</template>
                    <template #data>
                        <h5>Київ, ТРЦ Аладдін</h5>
                        <h5>Другой город</h5>
                    </template>
                </drop-button>
            </template>

            <template #content>
                <h2>Content</h2>
            </template>
        </HamburgerMenu>

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
import HamburgerMenu from '@/components/menu/HamburgerMenu'
import dButton from './drop-button.vue'
import choosemoviesButton from './choosemovies-button.vue'
import logo from '@/components/logo'
import calendarLogo from '../assets/images/miromax/outline-place-40px.svg?raw'

export default {
    components: { HamburgerMenu, dButton, logo, choosemoviesButton },
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