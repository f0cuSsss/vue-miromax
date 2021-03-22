<template>
  <label class="checkbox">
      <input 
        class="checkbox__item" 
        type="checkbox" 
        :checked="checked" 
        
      /> 

      <div class="checkbox__mark">
          <span class="checkbox__mark__inner"></span>
      </div>

      <div class="checkbox__content">
          <slot name="text"></slot>
      </div>
  </label>
</template>

<script>
export default {
    props: {
        checked: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        sendToParent() {
            this.$emit('value', this.checked);
        }
    }
}
</script>
// 
<style lang="scss" scope>
    .checkbox {
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        margin: 25px 0;

        &__item {
            position: absolute;
            appearance: none;
            width: 0;
            height: 0;
            opacity: 0;
            &:checked + .checkbox__mark {
                background: $accent;
                display: flex;
                justify-content: center;
                align-items: center;

                .checkbox__mark__inner {
                    background: url('@/assets/images/baseline-check_box_outline_blank-24px.svg') no-repeat;
                    background-size: contain;
                    border: none;
                    position: absolute;
                    width: 24px;
                    height: 24px;
                }
            }

        }

        &__mark {
            display: inline-block;
            position: absolute;
            top: -10px;
            left: 0;
            border-radius: 50%;
            height: 40px;
            width: 40px;
            padding: 10px;
            vertical-align: bottom;
            transition: all 0.15s ease-in-out;

            &:hover {
                background-color: $accent;
                .checkbox__mark__inner {
                    border: 2px solid $color_1;
                    transition: all 0.15s ease-in-out;
                }
            }

            &__inner {
                border: 2px solid $accent;
                border-radius: 5px;
                width: 100%;
                height: 100%;
                display: block;

                &:hover {
                    outline: none;
                }
            }
        }

        &__content {
            padding-left: 56px;
            font-size: 14px;
        }
    }
</style>