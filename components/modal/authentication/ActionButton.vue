<template>
  <button 
    class="action-button"
    :style="{ 'background-color': bgColor, 'color': fontColor }"
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
    }
</style>