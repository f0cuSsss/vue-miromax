<template>
  <div class="dropdown">
      <button class="dropdown-button" @click.prevent="dropdownDisplay">
      <div ref="iconBefore" v-if="!inner" class="icon__before icon_w40_h40">
        <img :src="iconPath" alt="\/">
        <!-- <slot name="imageBefore"></slot> -->
      </div>
      <!-- <div ref="iconBefore" v-else class="icon-wrapper hover-wrapper"> -->
      <div ref="iconBefore" v-else class="icon__before icon-wrapper hover-wrapper">
        <img :src="iconPath" alt="\/">
        <!-- <imageBefore /> -->
        <!-- <slot name="imageBefore"><span>A</span></slot> -->
        <!-- <imageBefore /> -->
      </div>
      <span>
          <!-- <slot name="title"></slot> -->
          {{ calendarItem }}
      </span>
      <div ref="iconAfter" class="icon__after">
          <ExpandIcon />
      </div>
      <!-- <span v-html="icons['expand']"></span> -->
  </button>

  <div v-if="data.length > 1" ref="dropdownMenu" class="dropdown__menu" >
     <ul class="dropdown__datalist">
      <li
        v-for="item in data"
        :key="item"
        @click.prevent="pickItem"
        :class="calendarItem == item ? 'active' : ''"
      >{{ item }}</li>  
     </ul> 
  </div>
  </div>
</template>

<script>
import ExpandIcon from "~/assets/images/dropdown/expand_more-24px.svg?inline";
 
  export default {
    components: { ExpandIcon },
    mounted() {
        this.calendarItem = this.data[0];
        this.isOpen = false;
    },
    // computed: {
    //     imageBefore() {
    //         return () =>
    //             import(`../assets/images/outline-calendar_today-24px.svg`)
    //     }
    // },
    // components: {
    //     imageBefore: () => import(`../assets/images/outline-calendar_today-24px.svg`)
    // },
    // components: {
    //     imageBefore: () => import(this.iconPath)
    // },
    props: { 
        iconPath: {
            type: String
        },
        inner: {
            type: Boolean,
            default: false
        },
        data: {
            type: Array,
            default: () => ['Выберите елемент']
        }
    },
    data() {
        return {
            // icons: { expandIcon: ExpandIcon2 },
            calendarItem: {
                type: String
            },
            isOpen: {
                type: Boolean
            }
        }
    },
    methods: {
        dropdownDisplay(status = false) {
            if(this.data.length <= 1) return;

            this.isOpen = status;
            
            this.$refs.dropdownMenu.classList.toggle('expanded');
            this.$refs.iconAfter.classList.toggle('expanded');
            this.$refs.iconBefore.classList.toggle('expanded');
        },
        pickItem(e) {
            this.calendarItem = e.target.innerHTML;
            this.dropdownDisplay();
        }
    }
}
</script>

<style lang="scss" scope>
    .dropdown {
        position: relative;

        .dropdown-button {
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            // margin: 32px;
            margin: 0 10px;

            .expanded {
                background-color: $accent;
                svg {
                    fill: $color_1;
                    transform: rotate(180deg);
                }
            }

            &:hover  {
                cursor: pointer;

                .hover-wrapper {
                    img {
                        fill: $color_1;
                    }
                }
                
            }

            span {
                font-weight: 600;
                font-size: 15px;
            }

            .icon_w40_h40 {
                width: 40px;
                height: 40px;
            }

            .icon__after {
                width: 20px;
                height: 20px;
                margin-left: 8px;
                border: 1px solid $color_3;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

                transition: all 0.15s ease-in;
                transition: transform 0.2s ease;   

                &:hover {
                    background-color: $accent;
                    transition: all 0.15s ease-in;
                    transition: transform 0.2s ease-in-out;

                    svg {
                        fill: $color_1;
                        transform: rotate(180deg);
                        transition: transform 0.2s ease-in-out;
                    }
                }

                svg {
                    transition: transform 0.2s ease-in-out;
                }

            }
        }

        .dropdown__menu {
            background-color: $color_1;
            border-radius: 15px;
            box-shadow: -2px 4px 14px 1px #a4a4a4;
            padding: 5px;
            position: absolute;
            top: 125%;
            left: 0;
            overflow: hidden;
            width: 100%;
            z-index: 2;
            height: auto;
            display: none;
            visibility: 0;
            transition: all 0.4s ease-in-out;
            &.expanded {
                display: flex;
                visibility: 1;
                transition: all 0.4s ease-in-out;
            }

            .dropdown__datalist {
                width: 100%;
                z-index: 55;

                li {
                    cursor: pointer;
                    margin: 15px 10px;
                    padding: 3px 15px;
                    list-style-type: none;
                    font-size: 17px;
                    font-weight: 400;
                    transition: all 0.3s ease-in-out;
                        &:hover {
                            background-color: $color_2;
                            transition: all 0.3s ease-in-out;
                        }
                    &.active {
                        color: $accent;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
</style>