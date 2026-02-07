import Header from '../Component/Header';

import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import Products from '../pages/Products';
import Product from '../pages/Product';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';
import Coupon from '../pages/Coupon';
import OrdersList from '../pages/OrdersList';
import MemberSignUp from '../pages/MemberSignUp';


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
        ]
    },    
]



export default routes;