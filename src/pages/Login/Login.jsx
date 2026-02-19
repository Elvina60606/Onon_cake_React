import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router";
import "./login.scss";

import images from '@/assets/images/images.js';
//import { useAuth } from "../../context/AuthContext";

import { useDispatch } from "react-redux";
import { loginSuccess, loginFailed } from "@/slices/loginSlice";


function Login() {
  // 1. 狀態管理:控制密碼顯示/隱藏、圖示顏色
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  
  // 2. 引用管理:對應原本的 getElementById
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  // 密碼切換邏輯 (對應原本的 togglePassword 監聽器)
  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // 會員登入資料
  const [formData, setFormData] = useState({
    username: 'cat250070@livemail.tw',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
    [name]: value
    }));
  };


  //const { isLogin, setIsLogin } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    //setIsLogin(true);
    e.preventDefault();
    if (formData.username && formData.password){
      dispatch(loginSuccess())
      navigate('/')
      console.log('login success')
    } else {
      dispatch(loginFailed())
      console.log('login failed')
    }
  };



  return (
    <main
      className="login-container d-flex flex-column align-items-center justify-content-center position-relative"
      id="moving-bg"
    >
      <h2 className="login-title-mobile text-primary-700 fw-bold d-block d-lg-none">
        歡迎登入
      </h2>

      <div className="login-card d-flex bg-secondary-50 border border-secondary-500 overflow-hidden">
        <div className="login-image flex-shrink-0">
          <img
            src={images.loginHero}
            alt="店舖情境圖"
            className="d-none d-lg-block w-100 h-100 object-fit-cover"
          />
          <img
            src={images.loginHero} 
            alt="店舖情境圖"
            className="d-block d-lg-none w-100 h-100 object-fit-cover"
          />
        </div>

        <div className="login-content d-flex flex-column align-items-center w-100 overflow-y-auto">
          <h2 className="login-title-desktop text-primary-700 fw-bold d-none d-lg-block">
            歡迎登入
          </h2>

          <form className="login-form d-flex flex-column align-items-center">
            {/* 帳號欄位 */}
            <div className="form-group mb-4 d-flex flex-column">
              <label className="form-label fs-6 mb-1 text-neutral-800">
                帳號 <span className="text-danger">*</span>
              </label>
              <div className="input-wrapper d-flex align-items-center bg-white border border-neutral-400 rounded-2 px-3">
                <input
                  ref={usernameRef}
                  type="text"
                  id="username"
                  name="username"
                  className="login-input flex-grow-1 border-0 bg-transparent py-2"
                  placeholder="請輸入帳號"
                  onFocus={() => setUsernameFocus(true)}
                  onBlur={() => setUsernameFocus(false)}
                  value={formData.username}
                  onChange={handleChange}
                />
                <span
                  className={`material-symbols-outlined cursor-pointer icon-hover-secondary ${
                    usernameFocus ? "text-secondary-500" : "text-neutral-600"
                  }`}
                  id="dropdown-icon"
                  onClick={() => usernameRef.current.focus()}
                >
                  keyboard_arrow_down
                </span>
              </div>
            </div>

            {/* 密碼欄位 */}
            <div className="form-group d-flex flex-column">
              <label className="form-label fs-6 mb-1 text-neutral-800">
                密碼 <span className="text-danger">*</span>
              </label>
              <div className="input-wrapper d-flex align-items-center bg-white border border-neutral-400 rounded-2 px-3">
                <input
                  ref={passwordRef}
                  type={isPasswordVisible ? "text" : "password"}
                  id="password-input"
                  name="password"
                  className="login-input flex-grow-1 border-0 bg-transparent py-2"
                  placeholder="請輸入密碼"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  className={`material-symbols-outlined cursor-pointer icon-hover-secondary ${
                    isPasswordVisible ? "text-secondary-500" : "text-neutral-600"
                  }`}
                  id="toggle-password"
                  onClick={handleTogglePassword}
                >
                  {isPasswordVisible ? "visibility_off" : "visibility"}
                </span>
              </div>
              <Link
                to="#"
                className="forgot-password forgot-password--desktop text-primary-700 align-self-end mt-2 text-decoration-underline hover-secondary d-none d-lg-block"
              >
                忘記密碼 ?
              </Link>
            </div>

            <Link
              onClick={(e)=>{handleSubmit(e)}}
              className="btn btn-login mt-4 w-100 rounded-pill text-white border-0"
            >
              會員登入
            </Link>

            <Link
              to="#"
              className="forgot-password forgot-password--mobile text-primary-700 text-decoration-underline hover-secondary d-block d-lg-none"
            >
              忘記密碼 ?
            </Link>
          </form>

          {/* 修正: 只在桌面版使用 mt-auto */}
          <div className="register-footer d-flex justify-content-center align-items-center bg-white rounded-4 mt-lg-auto">
            <span className="register-text me-3 text-neutral-800">
              還不是會員嗎?
            </span>
            <Link
              to="/membersignup"
              className="btn btn-register text-primary-700 fw-bold rounded-pill"
            >
              手刀加入
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;