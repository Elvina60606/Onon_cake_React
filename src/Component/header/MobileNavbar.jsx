import images from '@/assets/images/images.js';
import { useLocation } from "react-router";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useRef } from "react";
import { Link } from "react-router";

import { Collapse } from 'bootstrap';


const MobileNavbar =({mobileNavRef}) => {

    const myPickUpLaterModal= useRef(null);
    const myLogoutModal = useRef(null);

    const openModal =() =>{
        myPickUpLaterModal.current.show();
    };
    const openLogoutModal=() =>{
        myLogoutModal.current.show();
    };

    {/* navbar */}
    const { isLogin, setIsLogin } = useAuth();
    const location = useLocation();

    // 跳轉頁面時，navbar收合（待補點擊button時收合）
    useEffect(() => {
        if (!mobileNavRef.current) return;

        const navBarCollapse = Collapse.getInstance(mobileNavRef.current)
        || new Collapse (mobileNavRef.current, { toggle : false});

        navBarCollapse.hide();
    }, [location]);

    return (
        <>
            { isLogin ? (
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
                                <Link to='/sidebarlayout/orders' className='py-3 w-100'>訂單紀錄</Link>
                            </li>
                            <li>
                                <Link to='/sidebarlayout/coupon' className='py-3 w-100'>優惠券＆點數</Link>
                            </li>
                            <li>
                                <button type='button'
                                        className='button-reset px-0 py-3 w-100 text-start'
                                        onClick={openModal}>
                                        寄甜商品
                                </button>
                            </li>
                            <div className="bg-primary-500 d-lg-none w-100 my-5" style={{height: "4px"}}></div>
                            <li>
                                <Link to='/' className='py-3 w-100'>最新消息</Link>
                            </li>
                            <li>
                                <Link to='/products' className='py-3 w-100'>商品介紹</Link>
                            </li>
                            <div className="bg-primary-500 d-lg-none w-100 my-5" style={{height: "4px"}}></div>
                            <li>
                                <button className='button-reset px-0 py-3 w-100 text-start d-flex'
                                        onClick={openLogoutModal}>
                                    <span className="material-symbols-outlined text-primary-300 me-2" 
                                            style={{width: "20px", height: "20px"}}>login</span>
                                    <p>登出</p>    
                                </button>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav ms-auto mb-5 d-lg-none text-primary-800">
                            <form className="position-relative d-lg-none my-5 w-100">
                                <span className="material-symbols-outlined position-absolute top-50 translate-middle-y ps-5 text-primary">search</span>
                                <input className="form-control input-search ps-10" 
                                        type="search"
                                        placeholder="輸入關鍵字" />
                                <button className="btn btn-search btn-primary fw-medium position-absolute top-50 end-0 translate-middle-y me-2">搜尋</button>
                            </form>
                            <li>
                                <Link to='/' className='py-3 w-100'>最新消息</Link>
                            </li>
                            <li>
                                <Link to='/products' className='py-3 w-100'>商品介紹</Link>
                            </li>
                            <div className="bg-primary-500 d-lg-none w-100 my-5" style={{height: "4px"}}></div>
                            <li>
                                <Link to='login'
                                      className='button-reset px-0 py-3 w-100 text-start d-flex'>
                                    <span className="material-symbols-outlined text-primary-300 me-2" 
                                            style={{width: "20px", height: "20px"}}>login</span>
                                    <p>登入/註冊</p>    
                                </Link>
                            </li>
                        </ul>
                    )}
        </>
    )
}

export default MobileNavbar;