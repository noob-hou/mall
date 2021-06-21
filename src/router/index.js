import { createRouter, createWebHistory } from 'vue-router'
const Home = () =>
    import ('views/home/Home.vue');
const Classify = () =>
    import ('views/classify/Classify.vue');
const Cart = () =>
    import ('views/cart/Cart.vue');
const Profile = () =>
    import ('views/profile/Profile.vue');
const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/classify',
    component: Classify
}, {
    path: '/cart',
    component: Cart
}, {
    path: '/profile',
    component: Profile
}, ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router