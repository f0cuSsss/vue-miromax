export const state = () => ({
    error: null
})

export const mutations = {
    setError(state, error) {
        state.error = error
    }
}

export const actions = {
    setError({ commit }, payload) {
        commit('setError', payload)
    }
}

export const getters = {
    error: ({ error }) => error
}