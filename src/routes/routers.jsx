import Header from '../Component/Header';

import Home from '../pages/Home';
import Products from '../pages/Products';
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
                path: '/products',
                element: <Products />,
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