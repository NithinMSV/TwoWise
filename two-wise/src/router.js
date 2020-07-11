import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/HomePage/Home';
import About from './components/AboutPage/About';

Vue.use(Router);

export default new router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ]
});