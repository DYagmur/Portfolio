import AboutPage from './../components/AboutMe.vue';
import Contact from './../components/Contact.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/about",
        name: "AboutPage",
        component: AboutPage
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