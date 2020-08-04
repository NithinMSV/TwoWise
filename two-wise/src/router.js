import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Default View/Home/Home';
import About from './components/Default View/About/About';
import Plans from './components/Default View/Plans/Plans';
import Contact from './components/Default View/Contact/Contact';
import PublicLayout from './layouts/Public';
import Login from './views/Login'
import DashboardLayout from './layouts/Dashboard';
import Dashboard from './views/Dashboard';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: PublicLayout,
            children: [
                {
                    path: "/",
                    component: Home
                },
                {
                    path: "/home",
                    component: Home
                },
                {
                    path: "/about",
                    component: About
                },
                {
                    path: "/plans",
                    component: Plans
                },
                {
                    path: "/contactus",
                    component: Contact
                }
            ]
        },
        {
            path: '/dashboard',
            component: DashboardLayout,
            children: [
                {
                    path: "",
                    component: Dashboard
                }
            ]
        },
        {
            path: "/login",
            component: PublicLayout,
            children: [
              {
                path: "",
                component: Login
              }
            ]
          },
    ]
});