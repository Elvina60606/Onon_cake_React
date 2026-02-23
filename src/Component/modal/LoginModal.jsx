import Modal from 'bootstrap/js/dist/modal';
import { Link } from 'react-router';
import { useRef, useEffect } from 'react';

const LoginModal =({myLoginModal}) => {

    const LoginModalRef = useRef(null);
    
        useEffect(() => {
            myLoginModal.current = new Modal(LoginModalRef.current)
        },[myLoginModal]);

    return (
        <>
            <div className="modal fade" 
                 ref={LoginModalRef}
                 tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border border-5 border-primary-300 rounded-5">
                        <div className="modal-body ms-7 mt-7">
                            <p className="fs-5">請先登入會員。</p>
                        </div>
                        <div className="modal-footer border-0">
                            <Link to='login'
                                  className="btn btn-confirm btn-primary-300 text-white">
                                    登入
                            </Link>
                            <button type="button" 
                                className="btn btn-confirm btn-primary-300 text-white" 
                                data-bs-dismiss="modal">
                                關閉
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
};

export default LoginModal;