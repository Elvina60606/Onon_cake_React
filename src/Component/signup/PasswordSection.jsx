import { useState, useEffect } from "react";

export default function PasswordSection({ formData, handleChange }) {
  // 建立兩個狀態，分別控制「密碼」與「確認密碼」的顯示
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

  // null 代表尚未驗證, true 代表合格, false 代表不合格
  const [isPwdValid, setIsPwdValid] = useState(null);
  const [isConfirmValid, setIsConfirmValid] = useState(null);

  // 驗證：密碼格式 (8-16碼英數)
  const handleValidation = () => {
    const pwdRegex = /^[a-zA-Z0-9]{8,16}$/;
    if (formData.password === "") {
      setIsPwdValid(null); // 如果是空的，回到初始灰色
    } else {
      setIsPwdValid(pwdRegex.test(formData.password));
    }
  };

  // 監控：只要密碼或確認密碼任一項變動，且確認密碼不是空的，就重新比對
  useEffect(() => {
    if (formData.confirmPassword !== "") {
      setIsConfirmValid(formData.password === formData.confirmPassword);
    } else {
      setIsConfirmValid(null);
    }
  }, [formData.password, formData.confirmPassword]);

  // 取得顏色類別
  const getValidationClass = (isValid) => {
    if (isValid === null) return "text-neutral-400";
    return isValid ? "text-success" : "text-danger";
  };

  // 取得圖示類別
  const getIconClass = () => {
    if (isPwdValid === null) return "bi-square-fill"; // 初始：空方框
    return isPwdValid ? "bi-check-square-fill" : "bi-x-square-fill"; // 正確：勾勾，錯誤：叉叉
  };

  // Demo按鈕
  const handleDemoFill = () => {
  const demoPwd = "Hiroshi123"; // 8-16英數

  // 模擬輸入 password
  handleChange({
    target: { name: "password", value: demoPwd }
  });

  // 模擬輸入 confirmPassword
  handleChange({
    target: { name: "confirmPassword", value: demoPwd }
  });

  // 直接設定驗證狀態
  setIsPwdValid(true);
  setIsConfirmValid(true);
};

  return (
    <div className="card">
      <div className="mx-md-11 my-md-8 mt-lg-8 mb-lg-13 m-4">
        <h5 className="mb-4">設定密碼</h5>

        <div className="mb-4">
          <label className="form-label">
            密碼 <span className="text-danger">*</span>
          </label>
          <div className="input-group">
            <input
              type={showPwd ? "text" : "password"} // 動態切換 type
              className={`form-control ${isPwdValid === false ? "is-invalid" : ""}`} // 不合格時輸入框變紅框
              id="password"
              name="password"
              placeholder="請填寫密碼"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleValidation} // 滑鼠離開時才驗證
            />
            <span
              className="material-symbols-outlined fill cursor-pointer input-group-text bg-white"
              onClick={() => setShowPwd(!showPwd)}
            >
              {showPwd ? "visibility" : "visibility_off"}
            </span>
          </div>
          <small
            className={`${getValidationClass(isPwdValid)} d-block mt-1 transition-all`}
          >
            <i className={`bi ${getIconClass(isPwdValid)} me-1`}></i>
            8–16 碼英文字母或數字
          </small>
        </div>

        <div className="mb-lg-4 mb-0">
          <label className="form-label">
            確認密碼 <span className="text-danger">*</span>
          </label>
          <div className="input-group">
            <input
              type={showConfirmPwd ? "text" : "password"} // 動態切換 type
              className={`form-control ${isConfirmValid === false ? "is-invalid" : ""}`}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="請再次填寫密碼"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <span
              className=" material-symbols-outlined fill cursor-pointer input-group-text bg-white"
              onClick={() => setShowConfirmPwd(!showConfirmPwd)}
            >
              {showConfirmPwd ? "visibility" : "visibility_off"}
            </span>
          </div>
          {/* 確認密碼提示字 */}
          <small
            className={`${getValidationClass(isConfirmValid)} d-block mt-2 transition-all`}
          >
            <i className={`bi ${getIconClass(isConfirmValid)} me-1`}></i>
            {isConfirmValid === null && "請再次輸入相同的密碼"}
            {isConfirmValid === false && "密碼輸入不一致"}
            {isConfirmValid === true && "密碼一致"}
          </small>
        </div>
        <div className="d-flex justify-content-end">
          <button type="button"
                  className="btn btn-sm btn-warning mt-4"
                  onClick={()=>handleDemoFill()}>Demo
          </button>
        </div>
      </div>
    </div>
  );
}
