import Vue from 'vue'

const Dialog = {
  install(Vue) {
    this.event = new Vue()
    Vue.prototype.$dialog = {
      ask(dialog) {
        // document.body.style.setProperty('overflow', 'hidden')
        // console.log(dialog);
        Dialog.event.$emit('ask', dialog)
      },
      hide(dialog) {
        // document.body.style.removeProperty('overflow')
        Dialog.event.$emit('hide', dialog)
      },
      $event: this.event,
    }
  },
}


Vue.use(Dialog)