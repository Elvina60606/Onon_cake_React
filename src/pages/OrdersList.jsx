import images from '@/assets/images/images.js';

function OrdersList() {
    return (
    <>
    <div className=' bg-secondary-50'>
      <main className="container py-md-12 py-8 mb-auto">
        <div className="row justify-content-center">
        {/*--桌機版side bar--*/}
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
          <div className="col-md-9">
            <div className="tab-content">
        {/*--訂單紀錄內容--*/}
              <div className="tab-pane active" 
                   id="ordersList" 
                   role="tabpanel" 
                   aria-labelledby="ordersList-tab"
                   tabIndex="0">
                    <h3 className="mb-6">訂單紀錄</h3>
        {/*--手機版--*/}
                <div className="border border-1 rounded-16 p-3 fs-6 d-lg-none bg-white">
                    <div className="order-info-mobile py-3 mb-6">
                      <div>
                        <span className="text-neutral-500">訂單編號</span>
                        <span>202508121920</span>
                      </div>
                      <div>
                        <span className="text-neutral-500">訂單成立時間</span>
                        <span>2025/08/12</span>
                      </div>
                      <div>
                        <span className="text-neutral-500">預計出貨日期</span>
                        <span>-</span>
                      </div>
                      <div>
                        <span className="text-neutral-500">狀態</span>
                        <span className="border border-0 rounded-pill bg-alert-50 text-alert-700 px-3 py-2">已成立</span>
                      </div>
                      <div>
                        <span className="text-neutral-500">品項</span>
                        <span>寄甜計劃12入</span>
                      </div>
                      <div>
                        <span className="text-neutral-500">總金額</span>
                        <span>NT$ 800</span>
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
        {/*--桌機版--*/}
                <div className="border border-1 rounded-16 px-6 py-3 fs-6 d-none d-lg-block bg-white">
                  <table className="table">
                    <thead>
                      <tr className="order-thead align-middle">
                        <th scope="col" style={{width: '15%' }}>訂單編號</th>
                        <th scope="col" style={{width: '15%' }} className="text-center">訂單成立時間</th>
                        <th scope="col" style={{width: '15%' }}>預計出貨日期</th>
                        <th scope="col" style={{width: '15%' }} className="text-center">狀態</th>
                        <th scope="col" style={{width: '30%' }}>品項</th>
                        <th scope="col" style={{width: '10%' }} className="text-end">總金額</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="order-body">
                        <th scope="row" className="py-6">202508121920</th>
                        <td className="text-center">2025/08/12</td>
                        <td className="text-center">-</td>
                        <td className="text-center"><span className="border border-0 rounded-pill bg-alert-50 text-alert-700 px-3 py-2">已成立</span></td>
                        <td>寄甜計劃12入</td>
                        <td className="text-end">NT$ 800</td>
                      </tr>
                    </tbody>
                  </table>
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
      </main>
      
    </div>
    
    
    </>
    )
}

export default OrdersList;