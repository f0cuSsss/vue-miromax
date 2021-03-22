<template>
  <input 
    ref="picker"
    class="fc-datepicker" 
    type="text"
    :value="value"
    placeholder="Select a date"
    autocomplete="off"
  >
</template>

<script>
import Pikaday from 'pikaday'

export default {
    props: {
        value: {
            requried: true
        },
        format: {
            type: String,
            default: 'March 18 2021'
        },
        options: {
            type: Object,
            default: {}
        }
    },
    mounted() {
        const picker = new Pikaday({
            field: this.$refs.picker,
            format: this.format,
            onSelect: () => {
                this.$emit('input', picker.toString());
            },
            ...this.options
        });
    }
}
</script>

<style lang="scss" scope>
    .fc-datepicker {
        display: block;
        width: 100%;
        color: #22292f;
        border-width: 1px;
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
    }
</style>