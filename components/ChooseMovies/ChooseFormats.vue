<template>
    <ChooseFilter
        :beforeImage="require('@/assets/images/outline-movie_creation-24px.svg')"
        title="Формат, LUX" 
        :items="pickedFormats"
        @checkItem="checkFormat"
    />
</template>

<script>
export default {
    beforeMount() {
        this.pickedFormats = this.formats;
        console.log(this.pickedFormats);
    },
    props: {
        formats: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    data: () => ({
        pickedFormats: []
    }),
    methods: {
        checkFormat(format) {
            this.pickedFormats.forEach(f => {
                if(f.name === format.name) {
                    f.checked = !f.checked;
                }
            });
        }
    }
}
</script>