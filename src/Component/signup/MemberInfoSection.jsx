export default function MemberInfoSection() {
  return (
    <div className="card h-100">
      <div className="mx-md-11 my-md-8 m-4">
        <h5 className="mb-4">會員資料</h5>

        <form className="row g-4">
          {/* 姓名 */}
          <div className="col-12">
            <label htmlFor="memberName" className="form-label">
              姓名 <span className="text-danger">*</span>
            </label>

            <div className="row g-2 align-items-center">
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  id="memberName"
                  placeholder="請填寫姓名"
                />
              </div>

              <div className="col-4 d-flex justify-content-between">
                <div className="form-check-inline me-md-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    先生
                  </label>
                </div>

                <div className="form-check-inline me-md-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                  />
                  <label className="form-check-label" htmlFor="female">
                    小姐
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* 生日 */}
          <div className="col-12">
            <label htmlFor="birthday" className="form-label">
              生日 <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control"
              id="birthday"
              placeholder="請選擇生日"
            />
          </div>

          {/* 電話 */}
          <div className="col-12">
            <label htmlFor="phoneNumber" className="form-label">
              電話 <span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder="請填寫電話"
            />
          </div>

          {/* Email */}
          <div className="col-12">
            <label htmlFor="memberEmail" className="form-label">
              電子信箱 <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="memberEmail"
              placeholder="請填寫電子信箱"
            />
          </div>

          {/* 地址 */}
          <div className="col-12">
            <label htmlFor="postCode" className="form-label">
              聯絡地址 <span className="text-danger">*</span>
            </label>

            <div className="row g-2">
              <div className="col-12 col-md-4">
                <input
                  type="text"
                  className="form-control"
                  id="postCode"
                  placeholder="郵遞區號"
                />
              </div>
              <div className="col-6 col-md-4">
                <select className="form-select" id="city-select">
                  <option>縣市</option>
                </select>
              </div>
              <div className="col-6 col-md-4">
                <select className="form-select" id="district-select">
                  <option>鄉鎮市區</option>
                </select>
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="請輸入地址"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
