<template>
    <input 
        class="f-input" 
        :type="type"
        :placeholder="placeholder"
        v-model="value"
        @change="sendtoParent"
    />
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: 'Поле для ввода'
        }
    },
    data() {
        return {
            value: ""
        }
    },
    methods: {
        sendtoParent() {
            this.$emit('value', this.value);
        }
    }
}
</script>

<style lang="scss" scope>
    .f-input {
        background-color: rgba($color_2, 0.4);
        border-radius: 4px;
        border: none;
        display: block;
        color: #000;
        font-size: 14px;
        font-weight: 600;
        padding: 19px 24px;
        width: 100%;

        &::placeholder {
            color: #000;
        }

        &:focus {
            outline: none;
        }
        
        & + .f-input {
            margin-top: 30px;
        }
    }
</style>