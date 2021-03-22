import { validEmail, validPhone } from '@/utils/validators'

export const actions = {
    async login({ commit }, userData) {

      let response;
      try{

        let payload = {}

        if(validEmail(userData.emailOrPhone)) {
            payload['email'] = userData.emailOrPhone;
            console.log("It's email");
        } 
        else if(validPhone(userData.emailOrPhone)) {
            payload['phone'] = userData.emailOrPhone;
            console.log("It's phone");
        } 
        else {
            console.log("Error reg parse");
            return;
        };

        payload['password'] = userData.password;
        
        response = await this.$axios.post(
            'https://miromax-two.docker.tangram.biz/api/auth/login',
            payload
        );

        console.log(response);
      } catch(e) {
        const error = e.response.data.error
        console.log("ERROR", error)
        commit('setError', error)
      }

      if(response && response.data) {
          localStorage.setItem('authtoken', response.data.token);
          commit('login', response.data)
      }
    },
    logout({ commit }) {
        localStorage.removeItem('authtoken');
        commit('logout');
    },
    parseToken({ commit }) {
        let token = localStorage.getItem('authtoken');
        if(token)
            commit('setToken', token)
    }
}

export const mutations = {
    login(state, { data, token }) {
        state.user = data;
        state.token = token;
    },
    logout(state) {
        state.user = null;
        state.token = null;
    },
    setError(state, payload) {
        state.error = payload
    },
    setToken(state, token) {
        state.token = token;
    }
}

export const state = () => ({
    user: null,
    isLoggedIn: false,
    token: null,
    error: null
})

export const getters = {
    getUserData(state) {
        return state.user;
    },
    userIsLoggedIn(state) {
        return state.token;
    },
    error: ({ error }) => error
}
