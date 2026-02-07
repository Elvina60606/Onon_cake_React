export default function TermsSection() {
  return (
    <div className="card">
      <div className="mx-md-11 my-md-8 m-4">
        <h5 className="mb-4">加入會員須知</h5>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="terms" />
          <label className="form-check-label" htmlFor="terms">
            您已詳閱我們的
            <a
              href="privacy-policy.html"
              className="text-decoration-underline text-secondary-500"
            >
              隱私權政策/服務條款
            </a>
            ，同意本網站所提供的服務。
          </label>
        </div>
      </div>
    </div>
  );
}
