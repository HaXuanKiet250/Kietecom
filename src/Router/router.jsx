import config from '~/config';

// Layouts
// import { HeaderOnly } from '~/layouts';

// Pages
import Combined from '~/Router';
import Sign from '~/pages/Following';
import Wishlist from '~/pages/Profile';
import Cart from '~/pages/Upload';
import Search from '~/pages/Search';


// Public routes
const publicRoutes = [
    { path: config.routes.Combined, component: Combined },
    { path: config.routes.Sign, component: Sign },
    { path: config.routes.Wishlist, component: Wishlist },
    { path: config.routes.Cart, component: Cart },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
