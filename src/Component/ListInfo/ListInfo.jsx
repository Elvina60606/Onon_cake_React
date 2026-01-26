import { Link } from "react-router-dom"; // 引入 Link
import avatar from "../../assets/images/avatar.png"; // 修正路徑

function ListInfo() { // 建議名稱與檔名一致
  return (
    <>
      <div className="bg-secondary-50">
        <main className="container py-md-5 py-4 mb-auto"> {/* 調整了 py 以符合 App.jsx 的結構 */}
          <div className="row justify-content-center">
            {/*--桌機版 side bar--*/}
            <aside className="col-lg-3 d-none d-lg-block">
              <div className="p-0 m-0 border rounded-4 overflow-hidden bg-white" id="myTab" role="tablist">
                <div className="bg-white w-100 text-center align-middle px-6 py-7">
                  <img
                    style={{ width: "80px", height: "80px" }}
                    className="border rounded-circle mb-4"
                    src={avatar}
                    alt="avatar"
                  />
                  <p className="fs-6 border-bottom pb-7">Claire158872</p>
                </div>
                <ul className="list-unstyled d-flex flex-column justify-content-start p-0">
                  <li className="mx-4" role="presentation">
                    <button className="nav-link w-100 py-2 mb-2 rounded-3 text-start active" id="shoppingHistory-tab" data-bs-toggle="tab" data-bs-target="#shoppingHistory" type="button" role="tab">
                      <span className="fs-6 text-primary-700 ps-3">
                        <span className="material-symbols-outlined align-bottom me-2">list_alt</span>
                        訂單紀錄
                      </span>
                    </button>
                  </li>
                  {/* ... 其他按鈕保持原樣，但注意 data-bs 屬性在 React 需配合 Bootstrap JS ... */}
                  <li className="mx-4" role="presentation">
                    <button className="nav-link w-100 py-2 mb-2 rounded-3 text-start" data-bs-toggle="modal" data-bs-target="#desk-logOut" type="button">
                      <span className="fs-6 text-primary-700 ps-3">
                        <span className="material-symbols-outlined align-bottom me-2">logout</span>
                        登出
                      </span>
                    </button>
                  </li>
                </ul>
              </div>

              {/*--登出 modal--*/}
              <div className="modal fade" id="desk-logOut" data-bs-backdrop="static" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body p-4">
                      <p className="fs-5">確定要登出嗎？</p>
                    </div>
                    <div className="modal-footer border-0">
                      {/* 這裡改用 Link 導向登入頁 */}
                      <Link to="/login" className="btn btn-primary" data-bs-dismiss="modal">確定登出</Link>
                      <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">關閉</button>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/*--右側內容--*/}
            <div className="col-lg-9">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="shoppingHistory" role="tabpanel">
                  <h3 className="mb-4">訂單紀錄</h3>
                  
                  {/* 桌機版表格 */}
                  <div className="border rounded-4 px-4 py-3 bg-white d-none d-lg-block">
                    <table className="table align-middle">
                      <thead>
                        <tr>
                          <th>訂單編號</th>
                          <th className="text-center">成立時間</th>
                          <th className="text-center">狀態</th>
                          <th>品項</th>
                          <th className="text-end">總金額</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>202508121920</td>
                          <td className="text-center">2025/08/12</td>
                          <td className="text-center">
                            <span className="badge rounded-pill bg-alert-50 text-alert-700 px-3 py-2">已成立</span>
                          </td>
                          <td>寄甜計劃12入</td>
                          <td className="text-end">NT$ 800</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* 分頁 (Pagination) */}
                  <nav className="mt-4">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled"><Link className="page-link" to="#">上一頁</Link></li>
                      <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">下一頁</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ListInfo;