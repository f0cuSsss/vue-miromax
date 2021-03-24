<template>
    <notifications 
        classes="fc-notify"
        :class="center ? 'notify-vertical-center' : ''"
        :group="group" 
        :position="position"
        :max="max"
    />
</template>

<script>
export default {
    props: {
        group: {
            required: true
        },
        position: {
            required: true
        },
        center: {
            type: Boolean,
            default: false
        },
        max: {
            type: Number,
            default: 2
        }
    }
}
</script>

<style lang="scss" scope>
    .notify-vertical-center {
        top: 50% !important;
        transform: translateY(-100%);
    }

    .fc-notify {
        background: #44A4FC;
        border-left: 5px solid #187FE7;
        border-radius: 2px;
        color: #ffffff;
        padding: 10px;
        margin: 5px;
        
        .notification-title {
            
        }
        
        .notification-content {
            font-weight: medium;
            font-size: 15px;
        }

        &.success {
            background: #1dc750;
            border-left-color: #008f28;
            color: #000;
        }

        &.info {
            background: #30acc2;
            border-left-color: #00788d;
        }

        &.main-info {
            background: #adf3ff;
            border-left-color: #adf3ff00;
            border-radius: 5px;
            color: #000;
            font-weight: bold;
            text-align: center;
        }
        
        &.warn {
            background: #ffeb36;
            border-left-color: #a89700;
            color: #000;
        }
        
        &.error {
            background: #d6453b;
            border-left-color: #8f0a00;
        }
        

    }
</style>