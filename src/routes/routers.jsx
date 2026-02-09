import Layout from '@/pages/Layout/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import Products from '../pages/Products';
import Product from '../pages/Product';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';
import MemberSignUp from '../pages/MemberSignUp';

import SidebarLayout from '@/pages/Layout/SidebarLayout';
import OrdersList from '../pages/OrdersList';
import Coupon from '../pages/Coupon';

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
                path: '/membersignup',
                element: <MemberSignUp />,
            },
            {
                path: '/sidebarlayout',
                element: <SidebarLayout />,
                children: [
                    {
                        path: 'orders',
                        element: <OrdersList />,
                    },
                    {
                        path: 'coupon',
                        element: <Coupon />,
                    },
                ]
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />,
    },    
]

export default routes;