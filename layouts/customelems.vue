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

    <!-- <notifications group="main" position="top center"/>
    <notifications group="secondary" position="bottom right"/> -->
    <fc-notify group="main" position="top center" max="3" />
    <fc-notify group="secondary" position="bottom right" max="5" />
    <fc-notify group="errors" position="top right" max="3" />
    <fc-notify group="main-info" position="top center" center max="1"/>
  </div>
</template>

<script>
import ToastBlock from '@/components/custom_components/toasts/ToastBlock'
import ToastSuccess from '@/components/custom_components/toasts/ToastSuccess'
import ToastError from '@/components/custom_components/toasts/ToastError'
import ToastWarn from '@/components/custom_components/toasts/ToastWarn'
import ToastInfo from '@/components/custom_components/toasts/ToastInfo'
import fcNotify from '@/components/custom_components/fc-notify'

export default ({
    components: { 
        ToastBlock, ToastSuccess, ToastInfo, ToastWarn, ToastError, fcNotify
    },
})
</script>
