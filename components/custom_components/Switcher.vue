<template>
  <span 
    class="fc-switcher"
    role="checkbox"
    tabindex=0
    :aria-checked="toggled"
    @click.prevent="toggle"
    @keydown.space.prevent="toggle"
  ></span>
</template>

<script>
export default {
    model: {
        prop: 'toggled',
        event: 'toggle'
    },
    props: ['toggled'],
    methods: {
        toggle() {
            this.$emit('toggle', !this.toggled);
        }
    }
}
</script>

<style lang="scss" scope>
    $bgFalseColor: rgb(147, 233, 255);
    $borderFalseColor: rgb(173, 239, 255);

    $bgTrueColor: rgb(52, 255, 137);
    $borderTrueColor: rgb(0, 216, 18);

    $bgCircleFalseColor: rgb(32, 192, 255);
    $bgCircleTrueColor: rgb(0, 202, 44);

    $width: 2rem;

    .fc-switcher {
        box-sizing: border-box;
        background-color: $bgFalseColor;
        border-radius: 10px;
        border: 1px solid $borderFalseColor;
        cursor: pointer;
        width: $width;
        height: $width / 2;
        margin: 0 5px;
        position: relative;
        transition: all 0.3s ease-in-out;


        &::before {

            content: '';
            background-color: $bgCircleFalseColor;
            position: absolute;
            border-radius: 10px;
            top: 1px;
            left: 1px;
            height: ($width / 2) - 0.24rem;
            width: ($width / 2) - 0.24rem;
            transition: all 0.3s ease-in-out;
        }

        &:focus {
            outline: none;
        }

       &[aria-checked="true"] {
           background-color: $bgTrueColor;
           border: 1px solid $borderTrueColor;

           &::before {
               transition: all 0.3s ease-in-out;
               transform: translateX($width / 2);
               background-color: $bgCircleTrueColor;
           }
       }
    }
</style>