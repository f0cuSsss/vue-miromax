<template>
  <div
    v-if="visible"
    class="modal" 
    @click="closeModal"
  >
    <div class="modal-inner" @click.stop>
        <div class="modal-inner__header">
            <button 
                class="modal-inner__close-btn" 
                @click="closeModal"
            ></button>
        </div>
        <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
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
        closeModal() {
            this.$modal.hide(this.name)
        }
    },
    beforeMount() {
        console.log(this.$modal.$event);
        this.$modal.$event.$on('show', (modal, params) => {
            this.params = params;
            return this.name === modal ? (this.visible = true) : null;
        })

        this.$modal.$event.$on('hide', (modal) => {
            return this.name === modal ? (this.visible = false) : null;
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
    .modal {
        background-color: rgba(255, 255, 255, 0.75);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        
        .modal-inner {
            background-color: $color_1;
            border-radius: 20px;
            // box-shadow: 1px 11px 20px -8px #9091a8;
            box-shadow: 0px 7px 20px -8px #9091a8;
            padding: 20px;

            max-width: 60%;
            min-width: 300px;

            max-height: 75%;
            min-height: 350px;

            .modal-inner__header {
                display: flex;
                justify-content: flex-end;
                padding-bottom: 7px;

                .modal-inner__close-btn {
                    background-color: $color_3;
                    border-radius: 50%;
                    padding: 5px;
                    width: 25px;
                    height: 25px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: all .25 ease-in-out;

                    &::before {
                        content: '';
                        background: url('@/assets/images/close-24px.svg') no-repeat;
                        background-size: contain;
                        width: 15px;
                        height: 15px;
                    }

                    &:hover {
                        cursor: pointer;
                        fill: $color_1;
                        color: $color_1;
                        background-color: $color_5;
                        transition: all .25 ease-in-out;
                    }
                }
            }
        }
    }
</style>