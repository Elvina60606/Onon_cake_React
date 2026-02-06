import HeroBanner from "@/Component/signup/HeroBanner";
import MemberInfoSection from "@/Component/signup/MemberInfoSection";
import PasswordSection from "@/Component/signup/PasswordSection";
import TermsSection from "@/Component/signup/TermsSection";
import SignUpSuccessModal from "@/Component/signup/SignUpSuccessModal";


const MemberSignUp=() => {
  return (
    <>     
      <HeroBanner />

      <main className="bg-secondary-50">
        <div className="container py-md-12 py-8">
          <div className="row g-6">
            <div className="col-12 col-lg-6">
              {/* 會員資料 */}
              <MemberInfoSection />
            </div>

            <div className="col-12 col-lg-6">
              <div className="d-flex flex-column gap-6">
                {/* 設定密碼 & 會員須知 */}
                <PasswordSection />
                <TermsSection />
              </div>
            </div>
          </div>
          {/* 確認送出btn */}
          <div className="col-12 mt-8">
            <button
              className="btn btn-primary w-100 py-3"
              type="submit"
              data-bs-toggle="modal"
              data-bs-target="#signUpConfirm"
            >
              確認送出
            </button>
          </div>
        </div>
        {/* 註冊成功modal */}
        <SignUpSuccessModal />
      </main>    
    </>
  );
}

export default MemberSignUp;
