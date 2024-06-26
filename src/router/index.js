import { createWebHistory, createRouter } from 'vue-router'
import { useUsers } from '@/stores/user'
import Welcome from '@/pages/guest/Welcome.vue'
import AboutUs from '@/pages/guest/AboutUs.vue'
import Shop from '@/pages/guest/Shop.vue'
import Article from '@/pages/guest/Article.vue'
import OfficialAgent from '@/pages/guest/officialAgent.vue'

import PageNotFound from '@/pages/errors/404.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Login from '@/pages/auth/Login.vue'
import Register from '@/pages/auth/Register.vue'
import ForgotPassword from '@/pages/auth/ForgotPassword.vue'
import ResetPassword from '@/pages/auth/ResetPassword.vue'
import VerifyEmail from '@/pages/auth/VerifyEmail.vue'

const APP_NAME = import.meta.env.VITE_APP_NAME

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome,
        meta: {
            title: 'Home',
            metaTags: [
                {
                    name: 'Welcome',
                },
                {
                    property: 'og:Welcome',
                },
            ],
        },
    },
    // Admin
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: () => import('@/pages/admin/Dashboard.vue'),
        query: {
            verified: 'verified',
        },
        meta: {
            guard: 'auth',
        },
    },

    // User
    {
        path: '/admin/user',
        name: 'admin.user.index',
        component: () => import('@/pages/admin/user/Index.vue'),
        query: {
            verified: 'verified',
        },
        meta: {
            guard: 'auth',
        },
    },
    // Product
    {
        path: '/admin/product',
        name: 'admin.product.index',
        component: () => import('@/pages/admin/product/Index.vue'),
        query: {
            verified: 'verified',
        },
        meta: {
            guard: 'auth',
        },
    },
    // Category
    {
        path: '/admin/category',
        name: 'admin.category.index',
        component: () => import('@/pages/admin/category/Index.vue'),
        query: {
            verified: 'verified',
        },
        meta: {
            guard: 'auth',
        },
    },

    // home
    {
        path: '/home',
        redirect: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        query: {
            verified: 'verified',
        },
        meta: {
            guard: 'auth',
        },
    },
    // shop
    {
        path: '/shop',
        name: 'shop',
        component: Shop,
        meta: {
            title: 'Shop',
        },
    },
    // Article
    {
        path: '/article',
        name: 'article',
        component: Article,
        meta: {
            title: 'Article',
        },
    },
    // Official Agent
    {
        path: '/official-agent',
        name: 'officialAgent',
        component: OfficialAgent,
        meta: {
            title: 'Official Agent',
        },
    },
    // About Us
    {
        path: '/about-us',
        name: 'aboutUs',
        component: AboutUs,
        meta: {
            title: 'About Us',
        },
    },
    // Dashboard
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            title: 'Dashboard',
            guard: 'auth',
        },
    },
    // Login
    {
        path: '/login',
        name: 'login',
        component: Login,
        query: {
            reset: 'reset',
        },
        meta: {
            title: 'Log in',
            guard: 'guest',
        },
    },
    // Register
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            title: 'Register',
            guard: 'guest',
        },
    },
    // Forgot Password
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: ForgotPassword,
        meta: {
            title: 'Forget Password',
            guard: 'guest',
        },
    },
    // Password Token Reset
    {
        path: '/password-reset/:token',
        name: 'password-reset',
        component: ResetPassword,
        query: {
            email: 'email',
        },
        meta: {
            title: 'Reset Password',
            guard: 'guest',
        },
    },
    // Verify Email
    {
        path: '/verify-email',
        name: 'verify-email',
        component: VerifyEmail,
        query: {
            resend: 'resend',
        },
        meta: {
            title: 'Email Verification',
            guard: 'auth',
        },
    },
    // 404 Page
    {
        path: '/page-not-found',
        name: 'page-not-found',
        component: PageNotFound,
        meta: {
            title: 'Page Not Found',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/page-not-found',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Navigation guard

router.beforeEach((to, from, next) => {
    const store = useUsers()

    const auth = store.authUser

    if (to.matched.some(route => route.meta.guard === 'guest') && auth)
        next({ name: 'dashboard' })
    else if (to.matched.some(route => route.meta.guard === 'auth') && !auth)
        next({ name: 'login' })
    else next()
})

// Page Title and Metadata

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.title)

    const nearestWithMeta = to.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.metaTags)

    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title + ' - ' + APP_NAME
    } else {
        document.title = APP_NAME
    }

    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(
        el => el.parentNode.removeChild(el),
    )

    if (!nearestWithMeta) return next()

    nearestWithMeta.meta.metaTags
        .map(tagDef => {
            const tag = document.createElement('meta')

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key])
            })

            tag.setAttribute('data-vue-router-controlled', '')

            return tag
        })

        .forEach(tag => document.head.appendChild(tag))

    next()
})

export default router
