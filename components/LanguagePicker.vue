<template>
  <div class="language-picker">
      <div class="language-picker__button">
          <h4 class="language-picker__current-lang">{{ language }}</h4>
      </div>
      <div class="language-picker__list">
          <div class="language-picker__list__item">

          </div>
      </div>
  </div>
</template>

<script>
export default {
    data: () => ({
        language: 'EN'
    })
}
</script>

<style lang="scss" scope>
    .language-picker {
        margin: 5px;

        &__button {
            border-radius: 15px;
            border: 1px solid $accent;
            cursor: pointer;
            padding: 11px 24px;
            padding-right: 26px;
            display: flex;
            position: relative;
            
            &::after {
                content: '';
                background: url('@/assets/images/dropdown/baseline-arrow_drop_down-24px.svg');
                width: 15px;
                height: 15px;
                
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 20%;
                right: 12px;
            }

            &__current-lang {
                font-size: 20px;
                font-weight: 700;
                color: #000;
            }
        }

        &__list {
            width: 100%;
            &__item {

            }
        }
    }
</style>