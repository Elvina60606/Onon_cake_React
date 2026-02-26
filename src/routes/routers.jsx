import Layout from '@/Layout/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import Products from '../pages/Products';
import Product from '../pages/Product';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';
import MemberSignUp from '../pages/MemberSignUp';
import ProtectedRoute from './ProtectedRoute';
import SidebarLayout from '@/Layout/SidebarLayout';
import OrdersList from '../pages/OrdersList';
import Coupon from '../pages/Coupon';

import AdminLayout from '@/Layout/AdminLayout';
import Dashboard from '@/admin/Dashboard';
import AdminProtectedRoute from './AdminProtectedRoute';
import ProductManagement from '@/admin/ProductManagement';
import OrderManagement from '@/admin/OrderManagement';
import CouponManagement from '@/admin/CouponManagement';

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
                element: <ProtectedRoute />,
                children: [
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
        ]
    },
    {
        path: 'admin',
        element:
                <AdminLayout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                element: <AdminProtectedRoute />,
                children: [
                    {
                        path: 'product',
                        element: <ProductManagement />
                    },
                    {
                        path: 'order',
                        element: <OrderManagement />
                    },
                    {
                        path: 'coupon',
                        element: <CouponManagement />
                    },
                ]
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />,
    },    
]

export default routes;