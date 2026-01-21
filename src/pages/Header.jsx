import ononLogoSm from '../assets/images/onon_logo-sm.svg';
import ononLogo from '../assets/images/onon_logo.svg';

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container">
               {/* navbar logo */}
                    <a className="navbar-brand me-auto py-0" href="index.html" >
                        <img src={ononLogoSm} 
                            alt="onon_logo-sm"
                            className="d-lg-none" />
                        <img src={ononLogo} 
                            alt="onon_logo"
                            className="d-none d-lg-block" />
                    </a>
                    <a href="shopping-cart.html" className="nav-link d-lg-none">
                    <div className="position-relative">
                        <span className="material-symbols-outlined fill align-bottom text-primary"> shopping_cart</span>
                        <span className="position-absolute top-0 start-100 translate-middle badge border border-white bg-secondary-500">0</span>
                    </div>
                    </a>
                {/* 漢堡按鈕 */}
                    <button className="navbar-toggler border-0" type="button"   
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                    <span className="material-symbols-outlined">menu</span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* 手機版 */}
                    <ul className="navbar-nav ms-auto mb-5 align-items-center d-lg-none">
                        <form className="position-relative d-lg-none my-5 w-100">
                            <span className="material-symbols-outlined position-absolute top-50 translate-middle-y ps-5 text-primary">search</span>
                            <input className="form-control input-search ps-10" 
                                    type="search"
                                    placeholder="輸入關鍵字" />
                            <button className="btn btn-search btn-primary fw-medium position-absolute top-50 end-0 translate-middle-y me-2">搜尋</button>
                        </form>
                {/* <!--待補：最新消息連結--> */}
                        <li className="nav-item d-lg-none w-100">
                            <a className="nav-link py-0" href="#">
                                <div className="d-flex justify-content-between align-items-center py-3">
                                <p className="h6 text-primary-800 mb-0">最新消息</p>
                                <span className="material-symbols-outlined text-primary-300" style={{width: "20px"}}> arrow_forward_ios</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item d-lg-none w-100">
                            <a className="nav-link py-0" href="product.html">
                                <div className="d-flex justify-content-between align-items-center py-3">
                                <p className="h6 text-primary-800 mb-0">商品介紹</p>
                                <span className="material-symbols-outlined text-primary-300" style={{width: "20px"}}> arrow_forward_ios</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                {/* 漢堡選單裡的那條分隔線 */}
                <div className="bg-primary-500 d-lg-none w-100" style={{height: "4px"}}></div>
                    <a className="nav-link w-100 d-lg-none d-flex align-items-center pt-7 pb-3" href="member-login.html">
                        <span className="material-symbols-outlined text-primary-300 align-bottom me-2" style={{width: "20px", height: "20px"}}>login</span>
                        <p className="h6 text-primary-800">註冊/登入</p>
                    </a>
                    <div className="empty-section d-lg-none"></div>
                {/* 手機版end */}
                {/* 桌機版start */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-6 align-items-center d-none d-lg-flex">
                {/* 待補：最新消息連結 */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">最新消息</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="product.html">商品介紹</a>
                        </li> 
                        <div className="collapse" id="collapsSearch">
                            <form className="position-relative">
                                <span className="material-symbols-outlined position-absolute top-50 translate-middle-y ps-5 text-primary">search</span>
                            <input className="form-control input-search ps-10" 
                                    type="search"
                                    id="input-search"
                                    placeholder="輸入關鍵字" />
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
                            <a href="shopping-cart" className="nav-link">
                            <div className="position-relative">
                                <span className="material-symbols-outlined fill align-bottom"> shopping_cart</span>
                                <span className="position-absolute top-0 start-100 translate-middle badge border border-white bg-secondary-500">0</span>
                            </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="member-login.html"
                               className="btn btn-primary">註冊/登入
                            </a>
                        </li>
                    </ul> 
                {/* 桌機版end */}
                </div>
                </div>
            </nav>
        </>
    )
}

export default Header;