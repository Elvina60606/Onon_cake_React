import Header from '../Component/Header';

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Products from '../pages/Products';
import Product from '@/pages/Product';
import Carts from '../pages/Carts';
import Coupon from '../pages/Coupon';
import OrdersList from '../pages/OrdersList';


const routes = [
    {
        path: '/',
        element: <Header />,
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
                path: '/carts',
                element: <Carts />,
            },
            {
                path: '/coupon',
                element: <Coupon />,
            },
            {
                path: '/orders',
                element: <OrdersList />,
            },
        ]
    },    
]



export default routes;