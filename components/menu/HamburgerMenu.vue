<template>
    <div>
        <div class="burger-menu" @click.prevent="displayMenu">
            <div class="menu-icon">
                <span class="center-line"></span>
            </div>
        </div>

        <div ref="menu" class="menu " @click.prevent="displayMenu"> 
            <div class="menu__inner" @click="(e) => e.stopPropagation()">
                <div class="menu__inner__header">
                    <button 
                        class="menu__close"
                        @click.prevent="displayMenu"
                    ></button>

                    <slot name="header"></slot>    
                </div>
                <div class="menu__inner__content">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        displayMenu(e) {
            this.$refs.menu.classList.toggle('expanded');
        }
    },
}
</script>

<style lang="scss" scope>
    .burger-menu {
        padding: 15px;
        
        transition: all 0.20s ease-in-out;

        &:hover {
            cursor: pointer;
            .center-line {
                // width: 70%;
                transform: scaleX(0.6);
                transition: all 0.20s ease-in-out;
            }
        }

        .menu-icon {
            display: block;
            position: relative;
            width: 26px;
            height: 20px;

            .center-line {
                background-color: #000464;
                float: left;
                position: absolute;
                width: 100%;
                height: 3px;
                border-radius: 15px;
                left: 0;
                top: 9px;
                transition: all 0.20s ease-in-out;
            }

            &::before, 
            &::after {
                content: '';
                background-color: #000464;
                border-radius: 15px;
                position: absolute;
                width: 100%;
                height: 3px;
                left: 0;
            }

            &::before {
                top: 0;
            }

            &::after {
                bottom: 0;
            }
        }

    }


    .menu {
        // background-color: rgba(216, 216, 216, 0.349);
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        
        transform: translateY(-100%);
        z-index: 50;
        transition: all 0.4s ease-in-out;
        opacity: 0;
        &.expanded {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.4s ease-in-out;
        }

        .menu__inner {
            background-color: $color_1;
            box-shadow: 0px 60px 115px 25px #565656;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            width: 100vw;
            height: 700px;
            z-index: 51;

            &__header {
                display: flex;
                align-items: center;
                padding: 10px 0;
                    .menu__close {
                        background: url('@/assets/images/close-24px.svg') no-repeat;
                        border-radius: 50%;
                        cursor: pointer;
                        background-color: $color_2;
                        margin: 25px;
                        padding: 5px;

                        color: $color_4;
                        width: 35px;
                        height: 35px;
                        background-size: contain;

                        transition: all 0.4s ease-in-out;

                        &:hover {
                            background-color: $color_4;
                            color: $color_1;
                            fill: red;
                            transition: all 0.4s ease-in-out;
                        }
                    }
            }

            &__content {
                padding: 10px;
            }
        }
    }
</style>