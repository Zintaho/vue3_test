import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './Home';
import Movie from './Movie';
import About from './About';

export default createRouter({
    // Hash
    // ex) https://url/#/resource
    history: createWebHashHistory(),
    //pages
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/Movie',
            component: Movie
        },
        {
            path: '/about',
            component: About
        }
    ]
});