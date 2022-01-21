import {createStore} from 'vuex'
import movie from './movie.js'
import about from './movie.js'

export default createStore({
    modules: {
        movie,
        about
    }
})