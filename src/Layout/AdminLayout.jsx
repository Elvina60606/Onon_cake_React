import { Link, Outlet } from "react-router-dom";

const AdminLayout =() => {

    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <div className="collapse navbar-collapse"       
                         id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/admin/dashboard' className="nav-link" > 後台首頁 </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/admin/product' className="nav-link" > 後台產品管理 </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/admin/order' className="nav-link" > 後台訂單管理 </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/admin/coupon' className="nav-link" > 後台優惠卷管理 </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="container my-6">
                <Outlet />
            </main>
    </>)
}

export default AdminLayout;