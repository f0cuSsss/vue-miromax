<template>
  <Toast name="info" class="toast-info">
    <template #icon>
        <img 
            src="@/assets/images/custom_components/toasts/toast-info.svg" 
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
    .toast-info {
        background-color: rgb(0, 152, 190);
    }
</style>