<template>
    <drop-button 
        :iconPath="require('../assets/images/miromax/outline-place-40px.svg')"
        :data="places"
    >
    </drop-button>
</template>

<script>
export default {
    data: () => ({
        places: ['Київ, ТРЦ Аладдін', 'Тернопіль, ТРЦ Подоляни']
    })
}
</script>