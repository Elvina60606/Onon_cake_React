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

    isAgreed: false,
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

  const handleSubmit = (e) => {
    e.preventDefault(); // 防止表單預設跳轉

    // 1. 定義必填欄位清單
    const requiredFields = [
      { key: "memberName", label: "姓名" },
      { key: "birthday", label: "生日" },
      { key: "phone", label: "電話" },
      { key: "email", label: "電子信箱" },
      { key: "password", label: "密碼" },
    ];

    // 2. 檢查是否有空欄位
    const emptyField = requiredFields.find(
      (field) => !formData[field.key] || formData[field.key].trim() === "",
    );

    if (emptyField) {
      alert(`請填寫${emptyField.label}`);
      return; // 攔截，不往下執行
    }

    // 特別檢查：會員須知勾選 (針對布林值)
    if (!formData.isAgreed) {
      alert("請勾選並同意會員須知");
      return;
    }

    // 3. 檢查驗證格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^09\d{8}$/;
    const pwdRegex = /^[a-zA-Z0-9]{8,16}$/;

    if (!phoneRegex.test(formData.phone)) {
      alert("手機號碼格式不正確（需為09開頭共10碼）");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      alert("電子信箱格式不正確");
      return;
    }

    if (!pwdRegex.test(formData.password)) {
      alert("密碼格式不正確（需為8-16碼英數）");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("兩次密碼輸入不一致");
      return;
    }

    // 4. 全部通過！
    console.log("驗證通過，準備送出資料：", formData);
    openSignUpModal();
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
                setFormData={setFormData}
              />
            </div>

            <div className="col-12 col-lg-6">
              <div className="d-flex flex-column gap-6">
                {/* 設定密碼 & 會員須知 */}
                <PasswordSection
                  formData={formData}
                  handleChange={handleChange}
                />
                <TermsSection 
                formData={formData} 
                setFormData={setFormData} />
              </div>
            </div>
          </div>
          {/* 確認送出btn */}
          <div className="col-12 mt-8">
            <button
              className="btn btn-primary w-100 py-3"
              type="submit"
              onClick={handleSubmit}
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
