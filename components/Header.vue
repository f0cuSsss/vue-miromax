<template>
  <header class="header">
      <div class="actions-block">
        <TopSlideMenu />
        <Logo />
        <EmporiumDropdown />
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
            <RightSlideMenu />
          </div>
          <div class="action__item">
            <auth-button />
          </div>
      </div>
  </header>
</template>

<script>
import dButton from './drop-button.vue'
import choosemoviesButton from './choosemovies-button.vue'
import Logo from '@/components/Logo'
import EmporiumDropdown from '@/components/EmporiumDropdown'
import TopSlideMenu from '@/components/menu/TopSlideMenu'
import RightSlideMenu from '@/components/menu/RightSlideMenu'

export default {
    components: { dButton, Logo, choosemoviesButton, EmporiumDropdown, TopSlideMenu, RightSlideMenu },
    methods: {
        displayMenu(e) {
            this.$refs.menu.classList.toggle('expanded');
        }
    },
    data() {
        return {
            calendarData: ['Сьогодні, 25 Серпня', 'Завтра, 26 Серпня', 'Четверг, 27 Серпня', 'П\'ятниця, 28 Серпня', 'Субота, 29 Серпня', 'Неділя, 30 Серпня']
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