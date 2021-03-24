<template>
    <div class="custom-elements">
        <h1 class="custom-elements__title">Custom reusable components</h1>

        <!-- Switcher -->
        <div class="custom-elements__item">
            <h3 class="custom-elements__item__title">Switcher</h3>
            <!-- <h5>Send data to email?</h5> -->
            <Switcher v-model="switcher1_value" />
            <p class="result">{{ switcher1_value }}</p>
        </div>

        <!-- Date picker component -->
        <div class="custom-elements__item">
            <h3 class="custom-elements__item__title">Date picker</h3>
            <DatePicker v-model="date1" format="MMMM D | YYYY" :options="{ yearRange: [2020, 20], blurFieldOnSelect: false, firstDay: 1 }" />
            <p class="result">{{ date1 }}</p>
        </div>

        <!-- Checkbox component -->
        <div class="custom-elements__item">
            <h3 class="custom-elements__item__title">Checkbox</h3>
            <Checkbox v-model="textbool" >
                <template #title>
                    {{ checkbox1.title }}
                </template>
            </Checkbox>
            <p class="result">{{ textbool }}</p>
        </div>

        <!-- Toasts component -->
        <div class="custom-elements__item">
            <h3 class="custom-elements__item__title">Toast</h3>

            <div class="toast-pos-controller">
                <h5>Vertical position:</h5>
                <button @click="toastPos.top = !toastPos.top">Change</button>
            </div>

            <div class="toast-pos-controller">
                <h5>Horizontal position:</h5>
                <button @click="toastPos.left = !toastPos.left">Change</button>
            </div>

            <div class="toast-controller">
                <!-- @click.prevent="$toast.showNew(2500, true, 'Test toast stack')" -->                
                <button 
                    class="show-toast-button show-success-toast" 
                    @click.prevent="$toast.show('success', toasts.success.delay, toasts.success.autoclose, toasts.success.message)"

                >
                    SUCCESS
                </button>

                <input 
                    class="fc-input" 
                    type="number" 
                    step="500"
                    v-model="toasts.success.delay"
                >

                <Checkbox v-model="textbool">
                <!-- <Checkbox v-model="toasts.success.autoclose">textbool -->
                    <template #title>
                        Auto close
                    </template>
                </Checkbox>
                <p class="result">{{ textbool }}</p>
            </div>

            <div class="toast-controller">
                <button 
                    class="show-toast-button show-info-toast" 
                    @click.prevent="$toast.show('info', toasts.info.delay, toasts.info.autoclose, toasts.info.message)"
                >
                    INFO
                </button>

                <input 
                    class="fc-input" 
                    type="number" 
                    step="500"
                    v-model="toasts.info.delay"
                >

                <Checkbox v-model="toasts.info.autoclose">
                    <template #title>
                        Auto close
                    </template>
                </Checkbox>
            </div>

            <div class="toast-controller">
                <button 
                    class="show-toast-button show-warn-toast" 
                    @click.prevent="$toast.show('warn', toasts.warn.delay, toasts.warn.autoclose, toasts.warn.message)"
                >
                    WARN
                </button>

                <input 
                    class="fc-input" 
                    type="number" 
                    step="500"
                    v-model="toasts.warn.delay"
                >

                <Checkbox v-model="toasts.warn.autoclose">
                    <template #title>
                        Auto close
                    </template>
                </Checkbox>
            </div>

            <div class="toast-controller">
                <button 
                    class="show-toast-button show-error-toast" 
                    @click.prevent="$toast.show('error', toasts.error.delay, toasts.error.autoclose, toasts.error.message)"
                >
                    ERROR
                </button>

                <input 
                    class="fc-input" 
                    type="number" 
                    step="500"
                    v-model="toasts.error.delay"
                >

                <Checkbox v-model="toasts.error.autoclose">
                    <template #title>
                        Auto close
                    </template>
                </Checkbox>
            </div>
        </div>
        
        <!-- Tags picker component -->
        <div class="custom-elements__item">
            <h3 class="custom-elements__item__title">Tags picker</h3>
            <TagPicker v-model="tags" />
            <p class="result">{{ tags }}</p>
        </div>

        <!-- Search select component -->
        <div class="custom-elements__item">
            <h3 class="custom-elements__item__title">Search select</h3>
            <SearchSelect 
                v-model="selectedSelectValue" 
                :options="SelectOptions"
                :filter-function="SearchSelectFilter"
            />
            <p class="result">{{ selectedSelectValue }}</p>
        </div>

        <!-- Use vue-notification -->
        <div class="custom-elements__item">
            <h3 class="custom-elements__item__title">vue-notification</h3>
            <button @click="showNotification">Show notification</button>
            <p class="result">{{ selectedSelectValue }}</p>
        </div>

    </div>
</template>

<script>
import Switcher from '@/components/custom_components/Switcher'
import DatePicker from '@/components/custom_components/DatePicker'
import Checkbox from '@/components/custom_components/Checkbox'
import TagPicker from '@/components/custom_components/TagPicker'
import SearchSelect from '@/components/custom_components/SearchSelect'

export default {
    layout: 'customelems',
    components: { 
        Switcher, 
        DatePicker, 
        Checkbox, 
        TagPicker,
        SearchSelect,
    },
    data: () => ({
        switcher1_value: false,
        switcher2_value: false,
        date1: '',
        checkbox1: { title: 'Accept all rules', isChecked: false },
        // toastPos: { top: false, left: false },
        toasts: { 
            success: { delay: 3000, autoclose: true, message: "It's success message" },
            info: { delay: 4000, autoclose: true, message: "It's info message" },
            warn: { delay: 3000, autoclose: false, message: "It's warn message" },
            error: { delay: 2500, autoclose: true, message: "It's error message" },
        },
        textbool: true,
        tags: ['mykolaiv', 'tangram', 'IT'],
        selectedSelectValue: null,
        SelectOptions: [
        "Anthrax",
        "Dark Angel",
        "Death Angel",
        "Destruction",
        "Exodus",
        "Flotsam and Jetsam",
        "Kreator",
        "Megadeth",
        "Metallica",
        "Overkill",
        "Sepultura",
        "Slayer",
        "Testament"
      ],
    }),
    methods: {
        SearchSelectFilter(search, options) {
            return options.filter(option =>
                option.toLowerCase().startsWith(search.toLowerCase())
            )
        },
        showNotification() {
            console.log("Trying to show vue-notification...");
            this.$notify({
                group: 'main',
                type: 'success',
                text: 'Operation successful',
                duration: 1500,
                speed: 1000
            });

            this.$notify({
                group: 'secondary',
                type: 'info',
                text: 'You received a message',
                duration: 1000,
                speed: 1000
            });

            this.$notify({
                group: 'secondary',
                type: 'warn',
                text: 'Warn message',
                duration: 1000,
                speed: 1000
            });

            this.$notify({
                group: 'main',
                type: 'error',
                text: 'Please, try later...',
                duration: 1000,
                speed: 1000
            });

            this.$notify({
                group: 'main-info',
                type: 'main-info',
                text: 'You must be logged in',
                duration: 1000,
                ignoreDuplicates: true,
                speed: 300
            });
        }
    },
    watch: {
        checkbox1() {
            console.log(this.checkbox1.isChecked);
        }
    }
}
</script>

<style lang="scss" scope>
    .fc-input {
        border-radius: 5px;
        border: 1px solid rgb(136, 136, 136);
        outline: none;
        padding: 5px;
        margin: 10px 0;
    }

    .custom-elements {
        background: rgb(251, 255, 240, 0.6);
        width: 100%;
        // height: 100vh;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 100px 35px 25px;

        &__title {
            position: absolute;
            text-align: center;
            top: 15px;
            left: 50%;
            transform: translateX(-50%);
            letter-spacing: 5px;
        }

        &__item {
            background-color: rgba(250, 250, 250, 0.7);
            border-radius: 5px;
            border: 1px solid rgb(227 201 201 / 50%);
            box-shadow: 0px 0px 8px 5px #eee;
            max-width: 450px;
            padding: 10px;
            padding-top: 50px;
            margin: 20px;
            position: relative;
            display: flex;
            flex-direction: column;
            // flex-direction: column;
            // overflow: hidden;
            min-width: 250px;
            align-self: flex-start;


            &__title {
                position: absolute;
                border-bottom: 1px solid rgba(238, 238, 238, 0.733);
                top: 5px;
                padding: 5px;
                margin-bottom: 10px;
                text-align: center;
                width: calc(100% - 20px);
            }

            .result {
                display: inline-block;
                color: rgba(199, 199, 199, 0.699);
                margin: 7px;
            }
        }
    }

    .show-toast-button {
        cursor: pointer;
        border-radius: 5px;
        padding: 5px;
        font-size: 14px;
        font-weight: bold;
        margin: 10px;
    }

    .show-success-toast {
        background-color: rgb(0, 184, 0);
        color: white;
    }

    .show-info-toast {
        background-color: rgb(87, 0, 158);
        color: white;
    }

    .show-error-toast {
        background-color: rgb(216, 41, 41);
        color: white;
    }

    .show-warn-toast {
        background-color: rgb(221, 188, 0);
        color: #000;
    }

    .toast-pos-controller {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 5px;

        button {
            background-color: rgb(0, 173, 130);
            border-radius: 7px;
            color: #fff;
            cursor: pointer;
            padding: 5px;
            margin-left: 10px;
        }
    }

    .toast-controller {
        border-bottom: 1px solid rgb(143, 143, 143);
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        // justify-content: center;
        // align-items: center;

        button {
            // align-self: normal;
        }
    }
</style>