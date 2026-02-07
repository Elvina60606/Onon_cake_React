import images from '@/assets/images/images.js';
import { Outlet } from 'react-router-dom';

const SidebarLayout = () => {

    return (
        <>
          <div className=' bg-secondary-50'>
            <main className="container py-md-12 py-8 mb-auto">
              <div className="row justify-content-center">
                <aside className="col-3 d-none d-lg-block">
                  <div className="p-0 m-0 border rounded-4 overflow-hidden bg-white" 
                      id="myTab" 
                      role="tablist"
                  >
                      <div className="bg-white w-100 text-center align-middle px-6 py-7">
                          <img style={{width: '80px', height: '80px'}}
                              className="border rounded-circle mb-4" 
                              src={images.avatar}
                              alt="avatar" />
                          <p className="fs-6 border-bottom pb-7">Claire158872</p>
                      </div>
                      <ul className="li-style-none d-flex flex-column justify-content-start p-0">
                        <li className="mx-6" role="presentation">
                            <button className="nav-link w-100 py-2 mb-2 rounded-3 text-start sideBar-hover" 
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

                {/*--右側內容--*/}
                <Outlet />
                
              </div>
            </main>
          </div>
        </>
    )
};

export default SidebarLayout;