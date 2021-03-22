<template>
  <a :href="link" class="social_link hover-wrapper">
    <img :src="iconPath" :alt="iconAlt">
  </a>
</template>

<script>
export default {
    props: {
        iconPath: {
            type: String,
            required: true
        },
        iconAlt: {
            type: String
        },
        link: {
            type: String
        }
    }
}
</script>

<style lang="scss" scope>
    .social_link {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: $color_1;
        padding: 5px;
        width: 40px;
        height: 40px;
        margin-left: 50px;

        &+& {
            margin-left: 24px;
        }
    }
</style>