<template>
  <Toast name="warn" class="toast-warn">
    <template #icon>
        <img 
            src="@/assets/images/custom_components/toasts/toast-warn2.svg" 
            alt=""
        >
    </template>
    <template #content>
        <slot></slot>
    </template>
  </Toast>
</template>

<script>
import Toast from '@/components/custom_components/toasts/Toast'

export default {
    components: { Toast }
}
</script>

<style lang="scss" scope>
    .toast-warn {
        background-color: rgb(190, 161, 0);
    }
</style>