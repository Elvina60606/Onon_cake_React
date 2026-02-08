import Modal from 'bootstrap/js/dist/modal';
import images from '@/assets/images/images.js';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { handleNavigateLogout } from './utils/handleNavigateLogout';


export default function SignUpSuccessModal({mySignUpModal}) {

  const signUpModalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    mySignUpModal.current = new Modal(signUpModalRef.current)
  },[mySignUpModal])

  return (
    <div className="modal fade"
         ref={signUpModalRef}
         tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border border-5 border-primary-300 rounded-5">
          <div className="modal-header border-bottom-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body row align-items-center justify-content-center mb-7">
            <div className="col-3">
              <img
                src={images.canele2}
                alt="canele"
                className="img-fluid"
              />
            </div>
            <div className="col-7">
              <h6 className="fs-lg-5 mb-1">恭喜您註冊成功！</h6>
              <p className="fs-7 fs-lg-6 mb-2">首購折扣優惠券已匯入帳戶</p>
              <button className="d-block btn btn-confirm btn-primary-300 text-white w-75 mb-2 me-auto pointer"
                      onClick={()=>{handleNavigateLogout( mySignUpModal, navigate )}}>
                立即登入
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
