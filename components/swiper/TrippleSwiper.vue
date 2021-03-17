<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
        v-for="(slide, i) in slides"
        :key="slide.title+i"
    >
        <Service
            :service="slide"
            :invert="i % 2 != 0"
        />
    </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    <div class="slide-button slide-button__prev" slot="button-prev"></div>
    <div class="slide-button slide-button__next" slot="button-next"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import Service from '@/components/salon/Services/Service';
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-multiple-slides-per-biew',
    title: 'Multiple slides per view',
    components: {
      Swiper,
      SwiperSlide,
      Service
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 0,
        //   pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true
        //   },
          navigation: {
            nextEl: '.slide-button__next',
            prevEl: '.slide-button__prev'
          }
        }
      }
    },
    props: {
        slides: {
            type: Array,
            required: true
        }
    }
  }
</script>

<style lang="scss">

.swiper {
  background: #000;
  height: 100%;
  width: 100%;
  position: relative;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    background-color: #fff;
  }

  .slide-button {
    background-color: #eee;
    position: absolute;
    top: 0;
    padding: 10px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: filter 0.3s ease-in-out;
    z-index: 20;

    &:hover {
        filter: brightness(0.9);
        cursor: pointer;
        transition: filter 0.3s ease-in-out;
    }

    &::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    &__prev {
        left: 0;

        &::before {
            background: url('@/assets/salon/images/right-arrow.svg');
            transform: rotate(180deg) translateY(50%);
        }
    }

    &__next {
        right: 0;

        &::before {
            background: url('@/assets/salon/images/right-arrow.svg');
            
        }
    }
  }
}
</style>