<template>
  <div class="services">
      <!-- <Service
        v-for="(serv, i) in services.slice(startSlide, countScreenSlides + startSlide)"
        :key="serv.title+i"
        :service="serv"
        :invert="i % 2 != 0"
      />

      <button class="services__slide-button services__slide-button__prev" @click.prevent="ShowPrevSlide"></button>
      <button class="services__slide-button services__slide-button__next" @click.prevent="ShowNextSlide"></button> -->

      <TrippleSwiper :slides="services" />

  </div>
</template>

<script>
import Service from '@/components/salon/Services/Service';
import TrippleSwiper from '@/components/swiper/TrippleSwiper'

export default {
    components: { Service, TrippleSwiper },
    data: () => ({
        services: [
            {
                title: 'Масаж и спа',
                list: [
                    { title: 'Спина мужская', price: '11' },
                    { title: 'Спина женская', price: '10' },
                    { title: 'Поясничный отдел', price: '8' },
                ],
                image_name: 'services-1.jpg',
                bgColor: '#66c7cd'
            },
            {
                title: 'Парикмахерская',
                list: [
                    { title: 'Мужская стрижка', price: '10' },
                    { title: 'Женская стрижка', price: '15' },
                    { title: 'Окрашивание и тонирование', price: '20' },
                ],
                image_name: 'services-2.jpg',
                bgColor: '#f86868'
            },
            {
                title: 'Косметологический',
                list: [
                    { title: 'Чистка лица', price: '40' },
                    { title: 'Антивозрастная программа LYSEDIA', price: '55' },
                    { title: 'Пилинг', price: '29' },
                ],
                image_name: 'services-3.jpg',
                bgColor: '#f9c869'
            },
            {
                title: 'Ногтевой',
                list: [
                    { title: 'Манекюр', price: '10' },
                    { title: 'Педикюр', price: '18' },
                    { title: 'Покрытие гель лак LUXIO', price: '10' },
                ],
                image_name: 'services-4.jpg',
                bgColor: '#66c7cd'
            },
            {
                title: 'Солярий',
                list: [
                    { title: 'Крем для загара', price: '2' },
                    { title: 'Минута солярия', price: '20' },
                ],
                image_name: 'services-5.jpg',
                bgColor: '#f86868'
            },
        ],
        startSlide: 0,
        countScreenSlides: 3
    }),
    // methods: {
    //     ShowPrevSlide() {
    //         this.startSlide > 0 ? (this.startSlide--) : null;
    //     },
    //     ShowNextSlide() {
    //         this.startSlide + this.countScreenSlides < this.services.length 
    //             ? (this.startSlide++) 
    //             : null; 
    //     }
    // }
}
</script>

<style lang="scss" scope>
    .services {
        height: 100vh;
        display: flex;
        overflow: hidden;
        position: relative;

        .services__slide-button {
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