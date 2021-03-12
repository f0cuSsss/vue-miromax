<template>
  <button class="miromax-app">
      <span>Miromax застосунок</span>
  </button>
</template>

<style lang="scss" scope>
    .miromax-app {
        // background: url('../assets/images/miromax/Shadow_01.svg');
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $accent !important;
        border-radius: 24px;
        padding: 12px;
        font-size: 17px;
        span {
            display: flex;
            align-items: center;
            color: $color_1;
            font-weight: 600;
            &::before {
                content: '';
                display: inline-block;
                background: url('../assets/images/miromax/baseline-24px.svg');
                vertical-align: center;
                margin-right: 8px;
                width: 24px;
                height: 24px;
            }
        }
    }
</style>