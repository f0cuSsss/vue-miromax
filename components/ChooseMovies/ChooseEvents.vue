<template>
    <ChooseFilter
        :beforeImage="require('@/assets/images/outline-new_releases-24px.svg')" 
        title="Події" 
        :items="events" 
    />
</template>

<script>
export default {
    props: {
        events: {
            type: Array,
            required: true,
            default: () => []
        }
    }
}
</script>