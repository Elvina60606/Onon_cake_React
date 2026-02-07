import Layout from '@/pages/Layout';

import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import Products from '../pages/Products';
import Product from '../pages/Product';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';
import Coupon from '../pages/Coupon';
import OrdersList from '../pages/OrdersList';
import MemberSignUp from '../pages/MemberSignUp';
import NotFound from '@/pages/NotFound';


const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/products',
                element: <Products />,
            },
            {
                path: '/product/:id',
                element: <Product />,
            },
            {
                path: '/shoppingcart',
                element: <ShoppingCart />,
            },
            {
                path: '/coupon',
                element: <Coupon />,
            },
            {
                path: '/orders',
                element: <OrdersList />,
            },
            {
                path: '/membersignup',
                element: <MemberSignUp />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ]
    }    
]

export default routes;