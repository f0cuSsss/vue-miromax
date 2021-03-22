import Vue from 'vue'

const Modal = {
  install(Vue) {
    this.event = new Vue()
    Vue.prototype.$modal = {
      show(modal, params = {}) {
        document.body.style.setProperty('overflow', 'hidden')
        Modal.event.$emit('show', modal, params)
      },
      hide(modal) {
        document.body.style.removeProperty('overflow')
        Modal.event.$emit('hide', modal)
      },
      $event: this.event,
    }
  },
}


Vue.use(Modal)