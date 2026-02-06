import images from '@/assets/images/images.js';

import { Outlet, Link } from 'react-router';

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container">
               {/* navbar logo */}
                    <Link  to='/'
                           className="navbar-brand me-auto py-0">
                        <img src={images.ononLogoSm} 
                            alt="onon_logo-sm"
                            className="d-lg-none" />
                        <img src={images.ononLogo} 
                            alt="onon_logo"
                            className="d-none d-lg-block" />
                    </Link>
                    <a href="shopping-cart.html" className="nav-link d-lg-none">
                    <div className="position-relative">
                        <span className="material-symbols-outlined fill align-bottom text-primary"> shopping_cart</span>
                        <span className="position-absolute top-0 start-100 translate-middle badge border border-white bg-secondary-500">0</span>
                    </div>
                    </a>
                {/* 漢堡按鈕 */}
                    <button className="navbar-toggler border-0" type="button"   
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* mobile */}
                    <ul className="navbar-nav ms-auto mb-5 d-lg-none text-primary-800">
                        <form className="position-relative d-lg-none mt-5 w-100">
                            <span className="material-symbols-outlined position-absolute top-50 translate-middle-y ps-5 text-primary">search</span>
                            <input className="form-control input-search ps-10" 
                                    type="search"
                                    placeholder="輸入關鍵字" />
                            <button className="btn btn-search btn-primary fw-medium position-absolute top-50 end-0 translate-middle-y me-2">搜尋</button>
                        </form>
                        <div className="bg-primary-500 d-lg-none w-100 my-5" style={{height: "4px"}}></div>
                        <div className='mb-5 d-flex'>
                            <img src={images.avatar} alt="avatar"
                                 style={{width:60, height:60}}
                                 className='border rounded-circle' />
                            <div className='ms-6'>
                                <p className='text-primary-300'>會員</p>
                                <p>Claire158872</p>
                            </div>
                        </div>
                        <li>
                            <Link to='/login' className='py-3 w-100'>會員中心</Link>
                        </li>
                        <li>
                            <Link to='/membersignup' className='py-3 w-100'>修改會​員​資料​</Link>
                        </li>
                        <li>
                            <a href="" className='py-3 w-100'>修改密碼</a>
                        </li>
                        <li>
                            <Link to='/orders' className='py-3 w-100'>訂單紀錄</Link>
                        </li>
                        <li>
                            <Link to='/coupon' className='py-3 w-100'>優惠券＆點數</Link>
                        </li>
                        <li>
                            <a href="" className='py-3 w-100'>寄甜商品</a>
                        </li>
                        <div className="bg-primary-500 d-lg-none w-100 my-5" style={{height: "4px"}}></div>
                        <li>
                            <a href="" className='py-3 w-100'>最新消息</a>
                        </li>
                        <li>
                            <Link to='/products' className='py-3 w-100'>商品介紹</Link>
                        </li>
                        <div className="bg-primary-500 d-lg-none w-100 my-5" style={{height: "4px"}}></div>
                        <li>
                            <a href="" className='py-3 w-100 d-flex'>
                                <span className="material-symbols-outlined text-primary-300 me-2" 
                                          style={{width: "20px", height: "20px"}}>login</span>
                                <p>登出</p>    
                            </a>
                        </li>
                    </ul>
                    
                    <div className="empty-section d-lg-none"></div>
                {/* desktop */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-6 align-items-center d-none d-lg-flex">
                        <li className="nav-item">
                            <a className="nav-link" href="#">最新消息</a>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className="nav-link">商品介紹</Link>
                        </li> 
                        <div className="collapse" id="collapsSearch">
                            <form className="position-relative">
                                <span className="material-symbols-outlined position-absolute top-50 translate-middle-y ps-5 text-primary">search</span>
                                <input className="form-control input-search ps-10" type="search" placeholder="輸入關鍵字" />
                                <button className="btn btn-search btn-primary fw-medium position-absolute top-50 end-0 translate-middle-y me-2">搜尋</button>
                            </form>
                        </div>
                        <li className="nav-item">
                            <button className="nav-link" 
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsSearch">
                                <span className="material-symbols-outlined align-bottom">search</span>
                            </button>
                        </li>
                        <li className="nav-item">
                            <Link to='/carts' className="nav-link">
                                <div className="position-relative">
                                    <span className="material-symbols-outlined fill align-bottom"> shopping_cart</span>
                                    <span className="position-absolute top-0 start-100 translate-middle badge border border-white bg-secondary-500">0</span>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown-center">
                                <img src={images.avatar}  alt='avatar'
                                     style={{width:40, height:40}}
                                     className="dropdown-toggle border rounded-circle"
                                     data-bs-toggle="dropdown" 
                                     aria-expanded="false" />
                                <ul className="dropdown-menu dropdown-menu-end"
                                    style={{width:250}}>
                                    <li>
                                        <Link to='/login' className="dropdown-item px-6 py-2">
                                            <span className="fs-6 text-primary-700">
                                                <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">person</span>會員中心
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/membersignup' className="dropdown-item px-6 py-2">
                                            <span className="fs-6 text-primary-700">
                                                <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">edit</span>修改會​員​資料
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/' className="dropdown-item px-6 py-2">
                                            <span className="fs-6 text-primary-700">
                                                <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">lock</span>修改密碼
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/orders' className="dropdown-item px-6 py-2">
                                            <span className="fs-6 text-primary-700">
                                                <span className="material-symbols-outlined align-bottom me-2 text-primary-300">credit_card</span>訂單紀錄
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/coupon' className="dropdown-item px-6 py-2">
                                            <span className="fs-6 text-primary-700">
                                                <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">local_activity</span>優惠券＆點數
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/' className="dropdown-item px-6 py-2">
                                            <span className="fs-6 text-primary-700">
                                                <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">takeout_dining</span>寄甜商品
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='border-top'>
                                        <Link to='/' className="dropdown-item px-6 py-2">
                                            <span className="fs-6 text-primary-700">
                                                <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">logout</span>登出
                                            </span>
                                        </Link>
                                    </li>           
                                </ul>
                                </div>
                        </li>
                    </ul> 
                {/* 桌機版end */}
                </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Header;