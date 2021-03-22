<template>
    <label 
        class="fc-checkbox"
        @click="onChange"
    >
        <input 
            class="fc-checkbox__item" 
            type="checkbox" 
            :checked="value"
        /> 

        <div class="fc-checkbox__mark">
            <span class="fc-checkbox__mark__inner"></span>
        </div>

        <div class="fc-checkbox__content">
            <slot name="title"></slot>
        </div>
    </label>
</template>

<script>
export default {
    // model: {
    //     prop: 'checked',
    //     event: 'change'
    // },
    // props: ['checked'],
    // methods: {
    //     onChange() {
    //         this.$emit('change', !this.checked);
    //     }
    // }
    // model: {
    //     event: 'change',
    // },
    props: ['value'],
    methods: {
        onChange() {
            this.$emit('input', !this.checked);
        }
    }
}
</script>

<style lang="scss" scope>

$disableColor: red;
$disableBorderColor: #00c2fc;
$disableBorderHoverColor: #0097c5;
$checkedBgColor: rgb(0, 240, 0);
$hoverColor: #8eeafe;

.fc-checkbox {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    margin: 5px;

    &__item {
        position: absolute;
        appearance: none;
        width: 0;
        height: 0;
        opacity: 0;
        &:checked + .fc-checkbox__mark {
            background: $checkedBgColor;
            display: flex;
            justify-content: center;
            align-items: center;

            .fc-checkbox__mark__inner {
                background: url('@/assets/images/custom_components/check-mark.svg');
                background-size: contain;
                background-repeat: no-repeat;
                border: none;
                position: absolute;
                width: 20px;
                height: 20px;
            }
        }

    }

    &__mark {
        display: inline-block;
        position: absolute;
        top: -8px;
        left: 0;
        border-radius: 50%;
        height: 35px;
        width: 35px;
        padding: 10px;
        vertical-align: bottom;
        transition: all 0.15s ease-in-out;

        &:hover {
            background-color: $hoverColor;
            .fc-checkbox__mark__inner {
                border: 2px solid $disableBorderHoverColor;
                transition: all 0.15s ease-in-out;
            }
        }

        &__inner {
            border: 2px solid $disableBorderColor;
            border-radius: 5px;
            width: 100%;
            height: 100%;
            display: block;

            &:hover {
                outline: none;
            }
        }
    }

    &__content {
        padding-left: 45px;
        font-size: 14px;
        
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }
}
</style>