<template>
    <Toast :name="name" class="toast-success">
        <template #icon>
            <img 
                src="@/assets/images/custom_components/toasts/toast-success2.svg" 
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
    components: { Toast },
    props: {
        name: {
            type: String,
            default: 'success'
        }
    }
}
</script>

<style lang="scss" scope>
    .toast-success {
        background-color: rgb(0, 190, 32);
    }
</style>