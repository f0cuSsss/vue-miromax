<template>
  <button 
    class="action-button"
    :class="[
        gradient ? 'action-button--gradient' : '',
        massiveShadow ? 'action-button--massive-shadow' : '']"
    :style="{ 'background-color': bgColor, 'color': fontColor }"
    @click.prevent="$emit('click')"
  >{{ title }}</button>
</template>

<script>
export default {
    name: 'ActionButton',
    props: {
        title: {
            type: String,
            required: true
        },
        bgColor: {
            type: String,
            default: '#fff'
        },
        fontColor: {
            type: String,
            default: '#000067'
        },
        gradient: {
            type: Boolean,
            default: false
        },
        massiveShadow: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scope>
    .action-button {
        // background-color: $accent;
        border-radius: 25px;
        box-shadow: 0px 6px 20px -12px #7f7f8a;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        margin: 10px 0;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.7px;
        transition: all 0.20s ease-in-out;
    
        &:hover {
            transition: all 0.20s ease-in-out;
            box-shadow: none;
        }

        &--gradient {
            background: linear-gradient(to right, $accent, $accent_2);
        }

        &--massive-shadow {
            box-shadow: 0px 7px 20px 0px #000;
        }
    }
</style>