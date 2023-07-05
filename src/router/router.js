import AboutMe from '../components/';
import Contact from './../components/Contact.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/about",
        name: "AboutMe",
        component: AboutMe
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;