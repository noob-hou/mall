import { createRouter, createWebHistory } from 'vue-router'
const Home = () =>
    import ('views/home/Home.vue');
const Classify = () =>
    import ('views/classify/Classify.vue');
const Cart = () =>
    import ('views/cart/Cart.vue');
const Profile = () =>
    import ('views/profile/Profile.vue');
const Manage = () =>
    import ('views/profile/add/Manage.vue');
const Detail = () =>
    import ('../views/detail/Detail.vue');
const Login = () =>
    import ('../views/home/PopUpLogin.vue');
const Register = () =>
    import ('../components/Register.vue');
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
        component: Profile,
        children: []
    },
    {
        name: 'detail',
        path: '/detail/:iid',
        component: Detail
    }, {
        path: '/add',
        component: Manage,
        meta: { keepAlive: true },

    }, {
        path: '/addlocation',
        component: () =>
            import ('../views/profile/add/AddAddress.vue')
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/register',
        component: Register
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.path == '/cart' || to.path == '/add') {
        const token = window.sessionStorage.getItem('token')
        if (!token) return next('/login');
        next()
    }
    return next()
})
export default router