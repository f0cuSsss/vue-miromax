export const actions = {
    async fetchGenres({ commit, dispatch }) {
        try {
            const { data } = await this.$axios.$get(`https://miromax-two.docker.tangram.biz/api/movie-types?theatre_id=ky1`);
            data ? commit('setGenres', data) : null;
            commit('setGenreLoading', false);
            // commit('setGenres', response.data.data);
        } catch(e) {
            dispatch('setError', e, { root: true })
            console.log(e);
        }
    },
    async fetchFormats({ commit, dispatch }) {
        try {
            const { data } = await this.$axios.$get('https://miromax-two.docker.tangram.biz/api/movie-formats?theatre_id=ky1');
            data ? commit('setFormats', response.data.data) : null;
        } catch(e) {
            dispatch('setError', e, { root:  true })
            console.log(e);
        }
    }
}

export const mutations = {
    setGenres(state, genres) {
        state.genres = genres;
    },
    setToggleGenreActive(state, id) {
        // TODO toggle active genre
        console.log("GENRES", state.genres);
    },
    setFormats(state, formats) {
        state.formats = formats;
    },
    setGenreLoading(state, bal) {
        state.genres.isLoading = bal;
    }
}

export const state = () => ({
    genres: { data: [], isLoading: false },
    formats: [],
    events: [],
})

export const getters = {
    genres: ({ genres }) => genres.data,
    getActiveGenres: ({ genres }) => genres.data.map(g => g.movies_count != 0),
    formats: ({ formats }) => formats,
    events: ({ events }) => events,

    getGenresLoadingStatus: ({ genres }) => genres.isLoading,
}