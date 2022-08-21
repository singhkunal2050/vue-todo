import { createRouter , createWebHistory } from "vue-router";
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'


const routes = [
    {
        path : '/',
        name : 'Home',
        component : Home
    },
    {
        path : '/about',
        name : 'About',
        component : About
    },
    {
        path : '/admin',
        name : 'Admin',
        component : Admin
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router