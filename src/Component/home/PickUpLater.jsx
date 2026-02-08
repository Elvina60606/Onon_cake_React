import images from '@/assets/images/images.js';
import PickUpLaterModal from '../modal/PickUpLaterModal';

import { useRef } from 'react';

const PickUpLater =() => {
    const myPickUpLaterModal = useRef(null);
    
    const openModal =() =>{
        myPickUpLaterModal.current.show();
    };
    
    return (
        <>
            <section className="sub-section-bg">
                <img className="d-none d-lg-block"
                     src={images.rectangle304}
                     alt="背景波浪圖" />
                <div className="container position-relative">
                    <div className="row my-8 my-lg-0">
                    {/* 左側 可麗露擺盤圖 */}
                        <div className="col-12 col-lg-7 position-relative z-3">
                            <div className="py-lg-12 mb-8 mb-lg-0">
                                <img src={images.caneleSub} alt="可麗露圖" />
                            </div>
                        </div>
                    {/* 右側 不規則背景+文案 */}
                      {/* 手機版 */}
                        <div className="d-lg-none">
                            <div className="col-12">
                                <div className="text-center shape-bg mb-12">
                                    <img className="mb-6"
                                         src={images.caneleVector}
                                         alt="可麗露" />
                                    <h2 className="fs-1 text-primary-800 mb-6">可麗露・寄甜計劃</h2>
                                    <h3 className="fs-5 text-primary-700 mb-6">
                                        品嚐一顆可麗露，體現職人精神
                                        <br />
                                        將這份職人甜點，寄給未來的你
                                    </h3>
                                    <button type='button' 
                                            className="btn btn-primary"
                                            onClick={openModal}>
                                            點我了解寄甜計劃
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 桌機版 */}
                    <div className="d-none d-lg-block">
                        <div className="col-lg-7 pt-lg-12 position-absolute top-0 end-0 z-1">
                            <img src={images.vector4} alt="裝飾向量圖案4" />
                            <div className="position-absolute top-50 start-50 translate-middle z-2">
                                <div className="py-12 text-center">
                                    <img className="mb-6"
                                         src={images.caneleVector}
                                         alt="可麗露" />
                                    <h2 className="fs-3 text-primary-800 mb-6">可麗露・寄甜計劃</h2>
                                    <h3 className="fs-5 text-primary-700 mb-6">
                                        品嚐一顆可麗露，體現職人精神
                                        <br />
                                        將這份職人甜點，寄給未來的你
                                    </h3>
                                    <button type='button' 
                                            className="btn btn-primary"
                                            onClick={openModal}>
                                            點我了解寄甜計劃
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 寄甜計劃modal */}
            <PickUpLaterModal myPickUpLaterModal={myPickUpLaterModal}/>
        </>
    )

}

export default PickUpLater;