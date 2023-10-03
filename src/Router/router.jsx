import Layout from '~/Router/Layout'
import Home from '~/Router/Home'
import About from '~/Router/About'
import Dashboard from '~/Router/Dashboard'

const publicRoutes = [

    { path: '/', components: Home },
    { path: '/layout', components: Layout },
    { path: '/about', components: About },
    { path: '/dashboard', components: Dashboard },

];
const privaRoutes = [];
export { publicRoutes, privaRoutes }