import Vue from 'vue'

const Toast = {
  install(Vue) {
    this.event = new Vue()
    Vue.prototype.$toast = {
      show(toast, time = 2000, autoclose = false, message = "Successful") {
        Toast.event.$emit('show', toast, time, autoclose, message)
      },

      // showNew(time = 2000, autoclose = false, message = "Successful") {
      //   Toast.event.$emit('showNew', time, autoclose, message)
      // },

      $event: this.event,
    }
  },
}


Vue.use(Toast)