export const actions = {
    async fetchFilms({ commit, dispatch }, filters) {
        try {
            const { data } = await this.$axios.$get('https://miromax-two.docker.tangram.biz/api/movies?theatre_id=ky1');
            data ? commit('setFilms', data) : null;
            commit('setLoading', false);
        } catch(e) {
            dispatch('setError', e, { root: true });
        }
    }
}

export const mutations = {
    setFilms(state, films) {
        state.films.data = films;
    },
    setLoading(state, status) {
        state.films.isLoading = status;
    }
}

export const state = () => ({
    films: { data: [], isLoading: true }
})

export const getters = {
    films: ({ films }) => films.data,
    getLoadingStatus: ({ films }) => films.isLoading,

}