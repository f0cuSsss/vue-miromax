
export default function ({ $axios, store }) {
    $axios.interceptors.request.use(config => {
    
      if(store.getters['user/userIsLoggedIn']) {
        console.log("User is logged in");
        let token = localStorage.getItem('authtoken');
        config.headers.common['Authorization'] = `Bearer ${token}`
      }

      return config;
    }, error => {
      console.log("Request error", error)
      return error;
    });


    $axios.interceptors.response.use(response => {
    // console.log("Response...", response)

    return response;
  }, error => {
    console.log("Response error", error)
    return error;
  });

}


// import axios from 'axios'
// import Vue from 'vue';

// axios.interceptors.request.use(config => {
//   console.log("Request...", config)
//   config.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authtoken')}`

//   console.log("Headers: ", config.headers);

// },error => {
//   console.log("Request error", error)
// });

// axios.interceptors.response.use(response => {
//   console.log("Response...", response)
// },error => {
//   console.log("Response error", error)
// });

// Vue.use(axios);