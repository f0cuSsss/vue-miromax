<template>
  <div 
    class="toast-block"
    :class="[
        verticalPos ? 'toast-block-top' : 'toast-block-bottom',
        horizontalPos ? 'toast-block-left' : 'toast-block-right'
    ]"
  >
      <slot name="toasts"></slot>
  </div>
</template>

<script>
export default {
    props: {
        verticalPos: {
            type: Boolean,
            default: false
        },
        horizontalPos: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scope>
    .toast-block {
        position: fixed;
        padding: 20px;
        display: flex;
        flex-direction: column;
        z-index: 999999;

        &-top {
            top: 0;
        }

        &-bottom {
            bottom: 0;
        }

        &-left {
            left: 0;
        }

        &-right {
            right: 0;
        }
    }
</style>