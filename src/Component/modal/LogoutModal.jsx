import Modal from 'bootstrap/js/dist/modal';
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { handleNavigateLogout } from './utils/handleNavigateLogout';


const LogoutModal =({myLogoutModal}) =>{

    const logoutModalRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        myLogoutModal.current = new Modal(logoutModalRef.current)
    },[myLogoutModal]);


    return (
        <>
            <div className="modal fade" 
            ref={logoutModalRef}
                 tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content border border-5 border-primary-300 rounded-5">
                        <div className="modal-body ms-7 mt-7">
                          <p className="fs-5">確定要登出嗎？</p>
                        </div>
                        <div className="modal-footer border-0">
                          <button onClick={()=>{handleNavigateLogout( myLogoutModal, navigate)}}
                                  className="btn btn-confirm btn-primary-300 text-white">
                                    確定登出
                          </button>
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
}

export default LogoutModal;