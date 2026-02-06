export default function SignUpSuccessModal() {
  return (
    <div
      className="modal fade"
      id="signUpConfirm"
      tabIndex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="signUpConfirmLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body row align-items-center mb-7">
            <div className="col-3">
              <img
                src="/assets/images/canele-2.png "
                alt="canele"
                className="img-fluid"
              />
            </div>
            <div className="col-7">
              <h6 className="fs-lg-5 mb-1">恭喜您註冊成功！</h6>
              <p className="fs-7 fs-lg-6 mb-2">首購折扣優惠券已匯入帳戶</p>
              <a
                href="/member-login"
                className="d-block btn btn-confirm btn-primary-300 text-white w-75 mb-2 me-auto pointer"
              >
                立即登入
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
