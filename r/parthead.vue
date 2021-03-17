<template>
  <div class="app">
        <header class="header">
            <div class="actions-block">
                <TopSlideMenu />
                <Logo />
                <EmporiumDropdown />
            </div>
            <div class="actions-block">
                <div class="action__item">
                    <RightSlideMenu />
                </div>
                <div class="action__item">
                    <auth-button />
                </div>
            </div>
        </header>
        <div class="content">
            <Nuxt />
        </div>
  </div>
</template>

<script>
import TopSlideMenu from '@/components/menu/TopSlideMenu'
import Logo from '@/components/Logo'
import EmporiumDropdown from '@/components/EmporiumDropdown'
import RightSlideMenu from '@/components/menu/RightSlideMenu'

export default {
    components: { TopSlideMenu, Logo, EmporiumDropdown, RightSlideMenu },
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
        position: fixed;
        width: 100%;
        z-index: 1;
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