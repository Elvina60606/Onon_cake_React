import Modal from 'bootstrap/js/dist/modal';
import images from '@/assets/images/images.js';
import { useRef, useEffect } from 'react';

const PickUpLaterModal =({myPickUpLaterModal}) => {

    const PickUpLaterModalRef = useRef(null);
    
        useEffect(() => {
            myPickUpLaterModal.current = new Modal(PickUpLaterModalRef.current)
        },[myPickUpLaterModal]);

    return (
        <>
            <div className="modal fade" 
                 ref={PickUpLaterModalRef}
                 tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border border-5 border-primary-300 rounded-5">
                        <div className="modal-header border-bottom-0">
                            <button type="button" 
                                    data-bs-dismiss="modal"
                                    className="btn-close" >
                            </button>
                        </div>
                        <div className="modal-body row justify-content-center align-items-center mb-7">
                            <div className="col-3">
                                <img src={images.canele2} alt="canele2" />
                            </div>
                            <div className="col-7 text-center">
                                <h6 className="fs-lg-5 mb-1">寄甜計劃準備中</h6>
                                <p className="fs-7 fs-lg-6 mb-2">敬請期待！</p>
                                <button data-bs-dismiss="modal"
                                        className="btn btn-confirm btn-primary-300 text-white w-75 mb-2 me-auto pointer">
                                        關閉
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
};

export default PickUpLaterModal;