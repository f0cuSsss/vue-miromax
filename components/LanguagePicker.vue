<template>
  <div class="language-picker" @click.prevent="dropped = !dropped">
      <div class="language-picker__button">
          <h4 class="language-picker__current-lang">{{ cur_lang }}</h4>
      </div>
      <div 
        v-if="dropped" 
        class="language-picker__list"
      >
        <ul @click="handlePickLang">
            <li
                v-for="lang in languages"
                :key="lang"
                :class="lang == cur_lang ? 'active' : ''"
            >{{ lang }}</li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
    mounted() {
        this.cur_lang = this.languages[0];
    },
    data: () => ({
        cur_lang: '',
        languages: ['EN', 'RU'],
        dropped: false
    }),
    methods: {
        handlePickLang(e) {
            this.cur_lang = e.target.innerText;
        }
    }
}
</script>

<style lang="scss" scope>
    .language-picker {
        margin: 5px;
        position: relative;

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
            background-color: $color_1;
            border-radius: 15px;
            box-shadow: -2px 4px 14px 1px #a4a4a4;
            position: absolute;
            margin-top: 5px;
            padding: 3px;
            width: 100%;
            z-index: 100;
            
            ul {
                list-style: none;
                text-align: center;

                li {
                    padding: 5px;

                    &:hover {
                        background-color: $color_2;
                        border-radius: 15px;
                        cursor: pointer;
                    }

                    &.active {
                        color: $accent;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
</style>