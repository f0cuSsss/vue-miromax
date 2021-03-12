export const actions = {
    async fetchFilms({ commit }, filters) {
        const response = await this.$axios.get('https://miromax-two.docker.tangram.biz/api/movies?theatre_id=ky1');
        const films = response.data.data;

        // console.log(console.log(JSON.parse(JSON.stringify(films[2]))));
        console.log(films);

        commit('setFilms', films);
    }
}

export const mutations = {
    setFilms(state, films) {
        state.films = films;
    }
}

export const state = () => ({
    films: []
})

export const getters = {
    films: state => state.films
}