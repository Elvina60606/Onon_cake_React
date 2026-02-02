import images from '@/assets/images/images.js';

function Footer() {
    return (
        <>
            <div className="bg-primary-800">
                <div className="container py-8 d-flex flex-column flex-lg-row align-items-center justify-content-between">
                <img className="mb-6 mb-lg-0" src={images.ononLogoWhite} alt="onon_logo-white" />
    {/*--contact info--*/}
                <div className="mb-6 mb-lg-0">
                    <p className="fs-7 text-white py-2 py-lg-1 d-flex align-items-center justify-content-center justify-content-lg-start">
                        <span className="material-symbols-outlined fill me-1 text-primary-300">call</span>
                        +886 0800-123-456
                    </p>
                    <p className="fs-7 text-white py-2 py-lg-1 d-flex align-items-center justify-content-center
                    justify-content-lg-start">
                        <span className="material-symbols-outlined fill me-1 text-primary-300">location_on</span>
                        桃園市桃園區桃園路123號
                    </p>
                    <p className="fs-7 text-white py-2 py-lg-1 d-flex align-items-center justify-content-center
                    justify-content-lg-start">
                        <span className="material-symbols-outlined fill me-1 text-primary-300">schedule</span>
                        10:00-19:00 週一公休
                    </p>
                </div>
    {/*--official link--*/}
                    <div className="d-flex flex-column align-items-center align-items-lg-end">
                        <div className="mb-4">
                            <a href="#">
                                <img src={images.facebookWhite}
                                     alt="facebook-white"
                                     className="border border-white rounded-circle p-2 me-2" />
                            </a>
                            <a href="#">
                                <img src={images.instagramWhite} 
                                     alt="instagram-white"
                                     className="border border-white rounded-circle p-2 me-2" />
                            </a>
                            <a href="#">
                                <img src={images.lineWhite} 
                                     alt="line-white"
                                     className="border border-white rounded-circle p-2" />
                            </a>
                        </div>
                        <p className="fs-7 text-white text-center">Copyright © 2025 onon_cake All Rights Reserved.</p>
                    </div>
                </div>
            </div>      
        
        </>
    )
}

export default Footer;