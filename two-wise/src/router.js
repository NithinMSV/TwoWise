import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/HomePage/Home';
import About from './components/AboutPage/About';
import Plans from './components/PlansPage/Plans';
import ContactUs from './components/ContactUs/ContactUs';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/plans',
            component: Plans
        },
        {
            path: '/contactus',
            component: ContactUs
        }
    ]
});