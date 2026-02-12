import { useState } from "react";

import HeroBanner from "@/Component/signup/HeroBanner";
import MemberInfoSection from "@/Component/signup/MemberInfoSection";
import PasswordSection from "@/Component/signup/PasswordSection";
import TermsSection from "@/Component/signup/TermsSection";
import SignUpSuccessModal from "@/Component/modal/SignUpSuccessModal";

import { useRef } from "react";

const MemberSignUp = () => {
  const [formData, setFormData] = useState({
    memberName: "",
    gender: "",
    birthday: "",
    phone: "",
    email: "",
    postCode: "",
    city: "",
    district: "",
    address: "",

    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const mySignUpModal = useRef(null);

  const openSignUpModal = () => {
    mySignUpModal.current.show();
  };

  return (
    <>
      <HeroBanner />

      <main className="bg-secondary-50">
        <div className="container py-md-12 py-8">
          <div className="row g-6">
            <div className="col-12 col-lg-6">
              {/* 會員資料 */}
              <MemberInfoSection
                formData={formData}
                handleChange={handleChange}
              />
            </div>

            <div className="col-12 col-lg-6">
              <div className="d-flex flex-column gap-6">
                {/* 設定密碼 & 會員須知 */}
                <PasswordSection
                  formData={formData}
                  handleChange={handleChange}
                />
                <TermsSection />
              </div>
            </div>
          </div>
          {/* 確認送出btn */}
          <div className="col-12 mt-8">
            <button
              className="btn btn-primary w-100 py-3"
              type="submit"
              onClick={openSignUpModal}
            >
              確認送出
            </button>
          </div>
        </div>
      </main>

      {/* 註冊成功modal */}
      <SignUpSuccessModal mySignUpModal={mySignUpModal} />
    </>
  );
};

export default MemberSignUp;