<template>
  <Toast name="error" class="toast-error">
    <template #icon>
        <img 
            src="@/assets/images/custom_components/toasts/toast-error.svg" 
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
    .toast-error {
        background-color: rgb(190, 0, 0);
    }
</style>