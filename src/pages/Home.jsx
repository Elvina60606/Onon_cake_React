import images from '@/assets/images/images.js';
import { Link } from 'react-router';

import SwiperSection from '@/Component/home/SwiperSection';
import HotProductsContainer from '../Component/hotProducts/HotProductsContainer';
import PickUpLater from '@/Component/home/PickUpLater';

const Home = () => {

    return (
        <>
        {/*輪播圖*/}
            <SwiperSection />

        {/* 品牌故事 */}
            <section className="story-container">
                <div className="story-content text-primary-800">
                    <h3 className="fs-lg-1 fs-3 mb-6 fw-bold lh-48 story-title">品牌故事</h3>
                    <p className="fw-normal lh-24 mb-4">
                        2020年，從日本結束兩年的甜點研習後回到台灣，心中始終懷抱著一個小小夢想 —— 擁有一家屬於自己的甜點店。於是，ONON CAKE 二溫菓子 誕生了。
                    </p>
                    <p className="fw-normal lh-24 mb-2">2022｜二溫菓子 品牌創立</p>
                    <p className="fw-normal lh-24 mb-2">2023｜中壢中原分店 開幕</p>
                    <p className="fw-normal lh-24 mb-4">2024｜桃園藝文分店 開幕</p>
                    <p className="fw-normal">在平淡的生活中，用甜點找回你的心跳</p>
                </div>
                    <img className="cake-img" src={images.cake} alt="杯子蛋糕" />
                    <img className="cake2-img" src={images.cake2} alt="切片蛋糕" />
                    <img className="cake3-img" src={images.cake3} alt="法國麵包" />
                    <img className="vector11-img"
                         src={images.vector1}
                         alt="裝飾向量圖案1" />
                    <img className="vector2-img"
                         src={images.vector2}
                         alt="裝飾向量圖案2" />
                    <img className="vector3-img"
                         src={images.vector3}
                         alt="裝飾向量圖案3" />
                    <img className="rectangle303-img"
                         src={images.rectangle303}
                         alt="背景波浪圖案"/>
            </section>

        {/* 熱銷排行 */}
            <HotProductsContainer />

        {/* 寄甜計畫 */}
            <PickUpLater /> 
    
        {/* 加入會員 */}
            <section className="bg-primary-500">
                <div className="container">
                    <div className="py-8 py-lg-0">
                        <div className="row">
                            <div className="col-12 col-lg-7">
                                <div className="my-lg-12 pt-8 px-lg-8 py-lg-12 text-center text-lg-start">
                                    <h2 className="fs-3 fs-lg-1 text-primary-800 mb-6">
                                        加入會員，即享首購不限金額88折
                                    </h2>
                                    <p className="fs-6 text-primary-700 mb-6">
                                        會員可享多重優惠：專屬折扣、紅利點數、生日優惠，現在加入會員，首購優惠與寄甜計畫合併使用，即贈經典原味可麗露乙份，贈品數量有限贈完為止，敬請把握優惠。本活動不可與其他優惠合併使用。
                                    </p>
                                    <Link to='/MemberSignUp' 
                                       className="btn btn-primary mb-6 mb-lg-0">點我手刀加入會員
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="pb-8 pb-lg-12 text-center text-lg-start">
                                    <img className="img-excess"
                                         src={images.joinUs}
                                         alt="加入會員插圖" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;