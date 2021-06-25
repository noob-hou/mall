import { createRouter, createWebHistory } from 'vue-router'
const Home = () =>
    import ('views/home/Home.vue');
const Classify = () =>
    import ('views/classify/Classify.vue');
const Cart = () =>
    import ('views/cart/Cart.vue');
const Profile = () =>
    import ('views/profile/Profile.vue');
const Detail = () =>
    import ('../views/detail/Detail.vue');
const routes = [{
        path: '',
        redirect: '/home'
    }, {
        name: 'home',
        path: '/home',
        component: Home,
        meta: { keepAlive: true },
    }, {
        name: 'classify',
        path: '/classify',
        component: Classify,
        meta: { keepAlive: true },
    }, {
        name: 'cart',
        path: '/cart',
        component: Cart,
        meta: { keepAlive: true },
    }, {
        path: '/profile',
        component: Profile
    },
    {
        name: 'detail',
        path: '/detail/:iid',
        component: Detail
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router