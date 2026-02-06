export default function PasswordSection() {
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
              type="password"
              className="form-control"
              placeholder="請填寫密碼"
            />
            <span className="input-group-text bg-white">
              <i className="bi bi-eye-fill"></i>
            </span>
          </div>
          <small className="text-neutral-400">
            <i className="bi bi-check-square-fill me-1"></i>
            8–16 碼英文字母或數字
          </small>
        </div>

        <div className="mb-lg-4 mb-0">
          <label className="form-label">
            確認密碼 <span className="text-danger">*</span>
          </label>
          <div className="input-group">
            <input
              type="password"
              className="form-control"
              placeholder="請再次填寫密碼"
            />
            <span className="input-group-text bg-white">
              <i className="bi bi-eye-fill"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
