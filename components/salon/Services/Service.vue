<template>
  <div class="service" :style="{ 'background-color': service.bgColor }">
       <ServiceTemplate v-if="invert" :data="service" />
       <div class="service__preview-image">
           <img :src="require(`@/assets/salon/images/${service.image_name}`)" alt="" >
       </div>
       <ServiceTemplate v-if="!invert" :data="service" />
  </div>
</template>

<script>
import ServiceTemplate from '@/components/salon/Services/ServiceTemplate'
export default {
    components: { ServiceTemplate },
    props: {
        service: {
            type: Object,
            required: true
        },
        invert: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scope>
    .service {
        width: calc(100vw / 3);
        height: 100%;
        display: flex;
        flex-direction: column;
        transition: all 0.3s ease-in-out;


        &:hover {
            .service__preview-image {
                opacity: 1;
                transition: opacity 0.5s ease-in-out;
            }
        }

        &__preview-image {
            height: 50%;
            overflow: hidden;
            position: relative;
            opacity: 0.6;
            transition: opacity 0.5s ease-in-out;

            img {
                width: 100%;
            }
        }
    }
</style>