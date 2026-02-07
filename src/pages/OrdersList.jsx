import images from '@/assets/images/images.js';


function OrdersList() {
    return (
    <>
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
    </>
    )
}

export default OrdersList;