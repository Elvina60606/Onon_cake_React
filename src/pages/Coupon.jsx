import avatar from '../assets/images/avatar.png';
import logo3 from '../assets/images/logo3.svg';
import contentcopy from '../assets/images/contentcopy.svg';

const Coupon =() => {
    return(
        <>
        <div className="bg-secondary-50">
            <main className="container py-md-12 py-8 mb-auto">
                <div className="row justify-content-center">
                {/*桌機版side bar*/}
                <aside className="col-3 d-none d-lg-block">
                            <div className="p-0 m-0 border rounded-4 overflow-hidden bg-white" 
                                id="myTab" 
                                role="tablist"
                            >
                                <div className="bg-white w-100 text-center align-middle px-6 py-7">
                                    <img style={{width: '80px', height: '80px'}}
                                         className="border rounded-circle mb-4" 
                                         src={avatar}
                                         alt="avatar" />
                                    <p className="fs-6 border-bottom pb-7">Claire158872</p>
                                </div>
                                <ul className="li-style-none d-flex flex-column justify-content-start p-0">
                                  <li className="mx-6" role="presentation">
                                      <button className="nav-link w-100 py-2 mb-2 rounded-3 text-start sideBar-hover active" 
                                              id="member-center-tab" 
                                              data-bs-toggle="tab" 
                                              data-bs-target="#member-center" 
                                              type="button" 
                                              role="tab" 
                                              aria-controls="member-center" 
                                              aria-selected="true">
                                              <span className="fs-6 text-primary-700 ps-6">
                                                <span className="material-symbols-outlined fill align-bottom me-2">person</span>
                                                會員中心
                                              </span>
                                      </button>
                                  </li>
                                  <li className="mx-6" role="presentation">
                                      <button className="nav-link w-100 py-2 mb-2 rounded-3 text-start sideBar-hover" 
                                              id="changePassword-tab" 
                                              data-bs-toggle="tab" 
                                              data-bs-target="#changePassword" 
                                              type="button" 
                                              role="tab" 
                                              aria-controls="changePassword" 
                                              aria-selected="false">
                                              <span className="fs-6 text-primary-700 ps-6">
                                              <span className="material-symbols-outlined fill align-bottom me-2">edit</span>
                                                修改會​員​資料</span>
                                      </button>
                                  </li>
                                  <li className="mx-6" role="presentation">
                                      <button className="nav-link w-100 py-2 mb-2 rounded-3 text-start sideBar-hover" 
                                              id="shoppingHistory-tab" 
                                              data-bs-toggle="tab" 
                                              data-bs-target="#shoppingHistory" 
                                              type="button" 
                                              role="tab" 
                                              aria-controls="shoppingHistory" 
                                              aria-selected="false">
                                              <span className="fs-6 text-primary-700 ps-6">
                                                <span className="material-symbols-outlined fill align-bottom me-2">lock</span>
                                                修改密碼
                                              </span>
                                      </button>
                                  </li>
                                  <li className="mx-6" role="presentation">
                                      <button className="nav-link w-100 py-2 mb-2 rounded-3 text-start sideBar-hover" 
                                              id="ordersList-tab" 
                                              data-bs-toggle="tab" 
                                              data-bs-target="#ordersList" 
                                              type="button" 
                                              role="tab" 
                                              aria-controls="ordersList" 
                                              aria-selected="false">
                                              <span className="fs-6 text-primary-700 ps-6">
                                              <span className="material-symbols-outlined align-bottom me-2">credit_card</span>
                                                訂單紀錄
                                              </span>
                                      </button>
                                  </li>
                                  <li className="mx-6" role="presentation">
                                      <button className="nav-link w-100 py-2 mb-2 rounded-3 text-start sideBar-hover" 
                                              id="prePaidPlan-tab" 
                                              data-bs-toggle="tab" 
                                              data-bs-target="#prePaidPlan" 
                                              type="button" 
                                              role="tab" 
                                              aria-controls="prePaidPlan" 
                                              aria-selected="false">
                                              <span className="fs-6 text-primary-700 ps-6">
                                                <span className="material-symbols-outlined fill align-bottom me-2">local_activity</span>
                                                優惠券＆點數
                                              </span>
                                      </button>
                                  </li>
                                  <li className="mx-6" role="presentation">
                                      <button className="nav-link w-100 py-2 mb-2 rounded-3 text-start sideBar-hover" 
                                              id="prePaidPlan-tab" 
                                              data-bs-toggle="tab" 
                                              data-bs-target="#prePaidPlan" 
                                              type="button" 
                                              role="tab" 
                                              aria-controls="prePaidPlan" 
                                              aria-selected="false">
                                              <span className="fs-6 text-primary-700 ps-6">
                                                <span className="material-symbols-outlined fill align-bottom me-2">takeout_dining</span>
                                                寄甜商品
                                              </span>
                                      </button>
                                  </li>
                                  <li className="mx-6" role="presentation">
                                      <button className="nav-link w-100 py-2 mb-2 rounded-3 text-start sideBar-hover" 
                                              data-bs-toggle="modal" 
                                              data-bs-target="#desk-logOut" 
                                              type="button">
                                              <span className="fs-6 text-primary-700 ps-6">
                                                <span className="material-symbols-outlined align-bottom me-2">logout</span>
                                                登出
                                              </span>
                                      </button>
                                  </li>
                                </ul>
                                
                              </div>
                        {/*--登出modal--*/}
                            <div className="modal fade" 
                                 id="desk-logOut" 
                                 data-bs-backdrop="static" 
                                 data-bs-keyboard="false" 
                                 tabIndex="-1" 
                                 aria-labelledby="desk-logOutLabel" 
                                 aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-body ms-7 mt-7">
                                    <p className="fs-5">確定要登出嗎？</p>
                                  </div>
                                  <div className="modal-footer border-0">
                                    <a href="member-login.html" 
                                       className="btn btn-confirm btn-primary-300 text-white">
                                        確定登出
                                    </a>
                                    <button type="button" 
                                            className="btn btn-confirm btn-primary-300 text-white" 
                                            data-bs-dismiss="modal">
                                            關閉
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                </aside>
                {/*右側內容*/}
                    <div className="col-md-9">
                        <div className="tab-content">
                            {/*優惠卷＆點數內容*/}
                                <div className="tab-pane active" 
                                    id="couponAndPoint" 
                                    role="tabpanel" 
                                    aria-labelledby="couponAndPoint-tab" 
                                    tabIndex="0">
                                    <h3 className="mb-6">優惠券＆點數</h3>
                                    {/*紅利點數*/}
                                        <div className="d-lg-flex justify-content-around align-items-center bg-white border border-1 rounded-4 p-5 mb-6">
                                            <h5 className="text-neutral-800 mb-6 mb-lg-0 text-nowrap">紅利點數</h5>
                                            <div className="d-lg-flex w-100">
                                                <div className="d-flex justify-content-center align-items-center bg-primary-600 border rounded-2 py-6 px-auto mx-lg-6 w-100 mb-6 mb-lg-0">
                                                    <p className="text-white fs-6">目前剩餘</p>
                                                    <p className="h1 mx-6 text-white mx-6 mx-lg-3">500</p>  
                                                    <span className="text-white fs-6">點</span>
                                                </div>
                                                <div className="d-flex justify-content-center align-items-center bg-primary-600 border rounded-2 py-6 px-auto w-100">
                                                    <div>
                                                        <p className="text-white fs-6">即將過期</p>
                                                        <p className="text-secondary-100">2026/02/11 止</p>
                                                    </div>
                                                    <p className="h1 mx-6 text-white mx-6 mx-lg-3">200</p>  
                                                    <span className="text-white fs-6">點</span>
                                                </div>
                                            </div>
                                        </div>
                                    {/*優惠卷*/}
                                        <div className="bg-white border border-1 rounded-4 p-5">
                                            <h5 className="text-neutral-800 mb-6">優惠卷</h5>
                                        {/*mobile*/}
                                            <div className="d-lg-none">
                                                <div className="shadow rounded-4 mb-6">
                                                    <div className="d-flex justify-content-center coupon-card-up rounded-4 rounded-bottom-0">
                                                        <img className="me-3" 
                                                            style={{width: 24, height: 24}}
                                                            src={logo3} alt="canele-logo" />
                                                        <span className="h4 text-primary-700">12%  off</span>
                                                    </div>
                                                    <div className="p-4 rounded-4 rounded-top-0">
                                                        <h5 className="text-primary-700 mb-1">不限金額即享88折</h5>
                                                        <p className="text-neutral-800 mb-1">歡迎加入onon_cake二溫菓子</p>
                                                        <p className="text-neutral-800 mb-4 pb-4 border-bottom">首次購買甜點</p>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="text-nowrap">
                                                                <h6 className="text-primary-600">優惠券代碼</h6>
                                                                <p className="text-alert-500 fs-7">僅可使用一次</p>
                                                            </div>
                                                            <div>
                                                                <div className="input-group">
                                                                    <input type="text" 
                                                                        className="form-control ms-3 border-end-0" placeholder="firsttime" />
                                                                    <button className="btn border rounded-1 border-start-0" 
                                                                            type="button">
                                                                            <img src={contentcopy} alt="content-copy" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="py-4">
                                                    <nav aria-label="Page navigation example">
                                                        <ul className="pagination justify-content-center align-items-center gap-2">
                                                        <li className="page-item disabled">
                                                            <a className="page-link pagination-icon" href="#" aria-label="Previous">
                                                            <span className="material-symbols-outlined align-top fill fs-5">
                                                                skip_previous
                                                            </span>
                                                            </a>
                                                        </li>
                                                        <li className="page-item disabled">
                                                            <a className="page-link pagination-icon" href="#" aria-label="Previous">
                                                            <span className="material-symbols-outlined align-top fs-5">
                                                                chevron_left
                                                            </span>
                                                            </a>
                                                        </li>
                                                        <li className="page-item active">
                                                            <a className="page-link align-middle" href="#">1</a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#">2</a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#">3</a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link pagination-icon" href="#" aria-label="Next">
                                                            <span className="material-symbols-outlined align-top fs-5">
                                                                chevron_right
                                                            </span>
                                                            </a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link pagination-icon" href="#" aria-label="Next">
                                                            <span className="material-symbols-outlined align-top fill fs-5">
                                                                skip_next
                                                            </span>
                                                            </a>
                                                        </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        {/*desktop*/}
                                            <div className="row d-none d-lg-block">
                                                <div className="col-lg-6 mb-6">
                                                    <div className="shadow rounded-4 d-none d-lg-flex mb-4">
                                                        <div className="d-flex flex-column justify-content-center align-items-center coupon-card-left rounded-4 rounded-end-0">
                                                            <img className="mb-3"
                                                                style={{width: 24, height: 24}} 
                                                                src={logo3} alt="canele-logo" />
                                                            <h4 className="text-primary-700 text-nowrap">12%  off</h4>
                                                        </div>
                                                        <div className="p-4 rounded-4 rounded-start-0">
                                                            <h5 className="text-primary-700 mb-1">不限金額即享88折</h5>
                                                            <p className="text-neutral-800 mb-1">歡迎加入onon_cake二溫菓子</p>
                                                            <p className="text-neutral-800 mb-4 pb-4 border-bottom">首次購買甜點</p>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="text-nowrap">
                                                                    <h6 className="text-primary-600">優惠券代碼</h6>
                                                                    <p className="text-alert-500 fs-7">僅可使用一次</p>
                                                                </div>
                                                                <div>
                                                                    <div className="input-group">
                                                                        <input type="text" 
                                                                            className="form-control ms-3 border-end-0" placeholder="firsttime" />
                                                                        <button className="btn border rounded-1 border-start-0" 
                                                                                type="button">
                                                                                <img src={contentcopy} alt="content-copy" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="py-4">
                                                    <nav aria-label="Page navigation example">
                                                        <ul className="pagination justify-content-center align-items-center gap-2">
                                                        <li className="page-item disabled">
                                                            <a className="page-link pagination-icon" href="#" aria-label="Previous">
                                                            <span className="material-symbols-outlined align-top fill fs-5">
                                                                skip_previous
                                                            </span>
                                                            </a>
                                                        </li>
                                                        <li className="page-item disabled">
                                                            <a className="page-link pagination-icon" href="#" aria-label="Previous">
                                                            <span className="material-symbols-outlined align-top fs-5">
                                                                chevron_left
                                                            </span>
                                                            </a>
                                                        </li>
                                                        <li className="page-item active">
                                                            <a className="page-link align-middle" href="#">1</a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#">2</a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#">3</a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#">4</a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#">5</a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link pagination-icon" href="#" aria-label="Next">
                                                            <span className="material-symbols-outlined align-top fs-5">
                                                                chevron_right
                                                            </span>
                                                            </a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link pagination-icon" href="#" aria-label="Next">
                                                            <span className="material-symbols-outlined align-top fill fs-5">
                                                                skip_next
                                                            </span>
                                                            </a>
                                                        </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}

export default Coupon;