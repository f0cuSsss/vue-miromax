<template>
  <div class="app">
    <Nuxt />


    <ToastBlock :verticalPos="false" :horizontalPos="false">
        <template #toasts>
            <ToastSuccess></ToastSuccess>
            <ToastWarn></ToastWarn>
            <ToastInfo></ToastInfo>
            <ToastError></ToastError>

            <ToastSuccess name="removeTag"></ToastSuccess>
        </template>
    </ToastBlock>
  </div>
</template>

<script>
import ToastBlock from '@/components/custom_components/toasts/ToastBlock'
import ToastSuccess from '@/components/custom_components/toasts/ToastSuccess'
import ToastError from '@/components/custom_components/toasts/ToastError'
import ToastWarn from '@/components/custom_components/toasts/ToastWarn'
import ToastInfo from '@/components/custom_components/toasts/ToastInfo'

export default ({
    components: { 
        ToastBlock, ToastSuccess, ToastInfo, ToastWarn, ToastError,
    },
})
</script>
