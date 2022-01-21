import axios from 'axios';
export default {
    namespaced: true,
    state: () => ({
        movies: [],
        message: '',
        loading: false
    }),
    getters: {},
    mutations: {
        updateState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        resetMovies(state) {
            state.movies = []
        }
    },
    // always async
    actions: {
        async searchMovies({commit}, payload) {
            const {title, type, year} = payload;
            const OMDB_API_KEY ='ca2209eb';
            const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`);
            const {Search} = res.data;
            commit('updateState', {
                movies: Search,
                message: 'Hello world!',
                loading: true
            })
        }
    }
}