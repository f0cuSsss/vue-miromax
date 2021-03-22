import Vue from 'vue'

Vue.filter(
    'dateParser', 
    function(value) {
        return new Date(value).toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'});
});