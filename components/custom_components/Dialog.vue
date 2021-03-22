<template>
  <div
    v-if="visible"
    class="dialog" 
  >
    <div class="dialog-inner">
        <h3>Confirm your action</h3>
        <slot name="body"></slot>
        <div class="dialog-inner__bottom">
            <button 
                class="dialog-inner__button dialog-inner__close-btn" 
                @click="close"
            >Close</button>
            <button 
                class="dialog-inner__button dialog-inner__confirm-btn" 
                @click="confirm"
            >Confirm</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Dialog',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            params: {},
            visible: false
        }
    },
    methods: {
        closeDialog() {
            this.$dialog.hide(this.name)
            return true;
        },
        close() {
            this.$emit('deleteDialogResult', false);
            this.closeDialog()
        },
        confirm() {
            this.$emit('deleteDialogResult', true);
            this.closeDialog()
        }
    },
    beforeMount() {
        this.$dialog.$event.$on('ask', (dialog) => {
            return this.name === dialog ? (this.visible = true) : null;
        })
        this.$dialog.$event.$on('hide', (dialog) => {
            return this.name === dialog ? (this.visible = false) : null;
        })
    },
    mounted() {
        document.addEventListener('keydown', (e) => {
            if (this.visible && e.which === 27) {
                this.visible = false
            }
        })
    },
    beforeDestroy() {
        document.removeEventListener('keydown', (e) => {
            if (this.visible && e.which === 27) {
                this.visible = false
            }
        });
    },
}
</script>

<style lang="scss" scope>
    .dialog {
        background-color: rgba(214, 214, 214, 0.75);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        transition: all 0.3s ease-in-out;
        
        &-inner {
            background-color: $color_1;
            border-radius: 15px;
            box-shadow: 0px 7px 20px -8px #9091a8;
            padding: 20px;
            padding-bottom: 60px;
            max-width: 40%;
            max-height: 90%;
            position: relative;

            h3 {
                margin-bottom: 10px;
                padding-bottom: 10px;
                border-bottom: 1px solid rgba(177, 177, 177, 0.589);;
            }

            &__bottom {
                position: absolute;
                // width: 100%;
                bottom: 10px;
                right: 15px;
                left: 15px;
                display: flex;
                justify-content: space-between;
                padding-bottom: 7px;
                overflow: hidden;
            }

            &__button {
                // border-radius: 50%;
                padding: 5px;
                color: #fff;
                // width: 25px;
                // height: 25px;
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all .25 ease-in-out;

                &:hover {
                    cursor: pointer;
                    filter: contrast(1.2) brightness(1.1);
                    // fill: $color_1;
                    // color: $color_1;
                    // background-color: $color_5;
                    transition: all .25 ease-in-out;
                }
            }

            &__confirm-btn {
                background-color: rgb(5, 156, 5);
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
                font-weight: bold;
                letter-spacing: 1px;
                // clip-path: polygon(0 25px,100% 0,100% calc(100% - 15px), 100% 100%, 0 100%, 25px 0);
                // clip-path: polygon(25px 0,100% 0,100% calc(100% - 15px), 100% 100%, 0 100%,0 25px);
            }

            &__close-btn {
                background-color: rgb(207, 18, 18);
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                font-size: 14px;
                // margin-right: 1px;          
            }
        }
    }
</style>