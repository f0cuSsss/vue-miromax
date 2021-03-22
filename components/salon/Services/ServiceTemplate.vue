<template>
  <div class="service-info" >
      <img src="@/assets/salon/images/logo-2.svg" alt="S&Mitler" class="service-info__logo">
      <h2 class="service-info__title">{{ data.title }}</h2>
      <h4 class="service-info__sub">СЕРВИС</h4>
      <ul class="service-info__list">
          <li
            v-for="(item, i) in data.list"
            :key="item+i"
          >
            <h6>{{ item.title | filterTitle }}<strong>{{ item.price | filterPrice }}</strong></h6>
          </li>
      </ul>
      <button class="service-info__detail">Подробнее</button>
  </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    filters: {
        filterTitle(value) {
            return value + ' - ';
        },
        filterPrice(value) {
            return ' ' + value + ' руб.'
        }
    }
}
</script>

<style lang="scss" scope>
    .service-info {
        color: #fff;
        text-align: center;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 25px;

        &__logo {
            height: 25px;
        }

        &__title {
            text-transform: uppercase;
            margin: 15px 0;
        }

        &__sub {
            text-transform: uppercase;
        }

        &__list {
            width: 100%;
            margin: 25px 0;
            display: flex;
            flex-direction: column;

            li {
                border-bottom: 1px solid rgba(0, 0, 0, 0.26);
                list-style: none;
                padding: 13px;

                h6 {
                    font-size: 19px;
                    font-weight: 500;
                }

                strong {
                    font-size: 19px;
                    font-weight: 400;
                    color: #000;
                }


                &:last-child {
                    border-bottom: none;
                }
            }
        }

        &__detail {
            background-color: #fff;
            border-bottom: 3px solid rgb(214, 214, 214);
            border-radius: 4px;
            color: #000;
            letter-spacing: 3px;
            text-transform: uppercase;
            padding: 20px 30px;
            transition: filter 0.3s ease-in-out;

            

            &:hover {
                transition: filter 0.3s ease-in-out;
                cursor: pointer;
                filter: brightness(0.8)
            }
        }
    }
</style>