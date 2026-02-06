import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import routes from './routes/routers.jsx';
import { createHashRouter, RouterProvider } from 'react-router';
const router = createHashRouter(routes)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
