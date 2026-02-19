import { useState } from "react";

export default function MemberInfoSection({ formData, handleChange }) {
  // null: 未輸入, true: 格式正確, false: 格式錯誤
  const [isPhoneValid, setIsPhoneValid] = useState(null);

  const handlePhoneValidation = () => {
    // 台灣手機格式：09開頭，後接8個數字
    const phoneRegex = /^09\d{8}$/;

    if (formData.phone === "") {
      setIsPhoneValid(null);
    } else {
      setIsPhoneValid(phoneRegex.test(formData.phone));
    }
  };

  const [isEmailValid, setIsEmailValid] = useState(null);

  const handleEmailValidation = () => {
    // 這是最常見的 Email 驗證正規表示式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email === "") {
      setIsEmailValid(null);
    } else {
      setIsEmailValid(emailRegex.test(formData.email));
    }
  };

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
                  name="memberName"
                  placeholder="請填寫姓名"
                  value={formData.memberName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-4 d-flex justify-content-between">
                <div className="form-check-inline me-md-0">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
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
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
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
              name="birthday"
              placeholder="請選擇生日"
              value={formData.birthday}
              onChange={handleChange}
              required
            />
          </div>

          {/* 電話 */}
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-end">
              <label htmlFor="phoneNumber" className="form-label">
                電話 <span className="text-danger">*</span>
              </label>
              {/* isPhoneValid 為 true 時則不顯示文字，交給 input 的綠色邊框去表達 */}
              <span
                className={`small ${isPhoneValid === false ? "text-danger fw-bold" : "text-neutral-400"}`}
              >
                {isPhoneValid === false ? "格式錯誤" : "範例：0912345678"}
              </span>
            </div>
            <input
              type="tel"
              className={`form-control ${
                isPhoneValid === false
                  ? "is-invalid"
                  : isPhoneValid
                    ? "is-valid"
                    : ""
              }`}
              id="phone"
              name="phone" // 確保 name 與 formData 裡的 key 一致
              placeholder="請填寫電話"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handlePhoneValidation}
              maxLength="10" // 限制使用者最多只能輸入10個字
            />
          </div>

          {/* Email */}
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-end">
              <label htmlFor="email" className="form-label">
                電子信箱 <span className="text-danger">*</span>
              </label>
              <span className="small text-neutral-400">
                {isEmailValid === null && "範例：example@mail.com"}
                {isEmailValid === false && (
                  <span className="text-danger">格式不正確</span>
                )}
                {/* isEmailValid 為 true 時則不顯示文字，交給 input 的綠色邊框去表達 */}
              </span>
            </div>
            <input
              type="email"
              className={`form-control ${
                isEmailValid === null
                  ? ""
                  : isEmailValid
                    ? "is-valid"
                    : "is-invalid"
              }`}
              id="email"
              name="email"
              placeholder="請填寫電子信箱"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleEmailValidation} // 滑鼠離開時才驗證
              required
            />
          </div>

          {/* 地址 */}
          <div className="col-12">
            <label htmlFor="postCode" className="form-label">
              聯絡地址
            </label>

            <div className="row g-2">
              <div className="col-12 col-md-4">
                <input
                  type="text"
                  className="form-control"
                  id="postCode"
                  name="postCode"
                  placeholder="郵遞區號"
                  value={formData.postCode}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6 col-md-4">
                <select
                  className="form-select"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                >
                  <option value="">縣市</option>
                </select>
              </div>
              <div className="col-6 col-md-4">
                <select
                  className="form-select"
                  name="district"
                  id="district"
                  value={formData.district}
                  onChange={handleChange}
                >
                  <option value="">鄉鎮市區</option>
                </select>
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  placeholder="請輸入地址"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
