<template>
    <transition name="slide-fade"  >
        <div 
            v-show="visible" 
            class="toast" 
            :class="visible ? 'opened' : ''"
        >
            <slot name="icon"></slot>
            <p class="toast-content">
                <slot name="content">
                    <h4>{{ message }}</h4>
                </slot>
            </p>
            <button class="toast-close-button" @click.prevent="handleClose">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </button>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Toast',
    beforeMount() {
        this.$toast.$event.$on('show', (toast, time, autoclose, message) => {        
            if(this.name === toast) {
                this.message = message;

                if(autoclose) {
                    clearTimeout(this.timeoutId);
                    this.timeoutId = setTimeout(() => {
                        this.visible = false;
                    }, time);
                }
            }

            return this.name === toast ? (this.visible = true) : null;
        })

        // this.$toast.$event.$on('showNew', (time, autoclose, message) => {
        //     console.log("Toast name: ", this.name);        
        //     let toastName = Math.random().toString(36).substring(7);
        //     console.log(toastName);
        //     if(this.name === toastName && autoclose) {
        //         this.message = message;
        //         clearTimeout(this.timeoutId);
        //         this.timeoutId = setTimeout(() => {
        //             this.visible = false;
        //         }, time);
        //     }

        //     return this.name === toastName ? (this.visible = true) : null;
        // })
    },
    props: {
        name: {
            type: String,
            required: true
        },
    },
    data: () => ({
        visible: false,
        timeoutId: -1,
        message: ''
    }),
    methods: {
        handleClose() {
            this.visible = false;
            clearTimeout(this.timeoutId);
        }
    }
}
</script>

<style lang="scss" scope>
    .toast {
        border-radius: 4px;
        box-shadow: 0 0 10px 1px #999999;
        max-height: 80px;
        max-width: 400px;
        padding: 15px;
        padding-right: 40px;
        position: relative;
        font-size: 14px;
        transform: translateX(150%);
        transition: all 0.8s ease-in-out;
        opacity: 0;
        display: flex;
        align-items: center;
        width: 100%;

        img {
            margin-right: 10px;
            width: 25px;
            height: 25px;
            pointer-events: none;
        }

        &.opened {
            opacity: 1;
            transform: translateX(0%);
            transition: all 0.8s ease-in-out;
        }
        
        & + .toast {
            margin-top: 10px;
        }

        &-content {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        &-close-button {
            position: absolute;
            cursor: pointer;
            right: 8px;
            top: 50%;
            transform: translateY(-50%);
            margin-left: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>