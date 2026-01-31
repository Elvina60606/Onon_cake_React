import basque from '../../assets/images/basque.png';
import cake from '../../assets/images/cake.png';
import cake2 from '../../assets/images/cake2.png';
import cake3 from '../../assets/images/cake3.png';
import canele from '../../assets/images/canele.png';
import canele2 from '../../assets/images/canele2.png';
import caneleSub from '../../assets/images/caneleSub.png';
import caneleVector from '../../assets/images/caneleVector.png';
import caneleBanner from '../../assets/images/caneleBanner.jpg';
import caneleBannerMd from '../../assets/images/caneleBannerMd.jpg';
import discountsBanner from '../../assets/images/discountsBanner.jpg';
import discountsBannerMd from '../../assets/images/discountsBannerMd.jpg';
import joinUs from '../../assets/images/joinUs.png';
import lemonMadeleine from '../../assets/images/lemonMadeleine.png';
import midautumnfestivalBanner from '../../assets/images/midautumnfestivalBanner.jpg';
import midautumnfestivalBannerMd from '../../assets/images/midautumnfestivalBannerMd.jpg';
import rectangle303 from '../../assets/images/rectangle303.png';
import rectangle304 from '../../assets/images/rectangle304.svg';
import vector1 from '../../assets/images/vector1.png';
import vector2 from '../../assets/images/vector2.png';
import vector3 from '../../assets/images/vector3.png';
import vector4 from '../../assets/images/vector4.png';
import Footer from '../../Component/Footer';

const Home = () => {

    return (
        <>
        {/*輪播圖*/}
            <section className="hero-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="heroCarousel"
                                 className="carousel slide hero-carousel"
                                 data-bs-ride="false">
                                <div className="carousel-inner">
                                  {/* 第一張幻燈片 - 法式可麗露 */}
                                    <div className="carousel-item active">
                                        <div className="d-flex justify-content-center">
                                            <img  src={caneleBanner}
                                                  alt='caneleBanner.jpg'
                                                  className='d-none d-lg-block'/>
                                            <img  src={caneleBannerMd}
                                                  alt='caneleBannerMd.jpg' 
                                                  className='d-lg-none' />
                                            <div className="hero-content">
                                                <div className="hero-text mb-4">
                                                    <h2 className="fs-lg-8 fs-3 text-neutral-0 fw-black lh-768 nowrap">在平淡的生活中
                                                    </h2>
                                                    <h2 className="fs-lg-8 fs-3 text-neutral-0 fw-black lh-768 nowrap">用甜點找回你的心跳
                                                    </h2>
                                                </div>
                                                <button className="hero-button">點我訂購</button>
                                            </div>
                                        </div>
                                    </div>

                                  {/* 第二張幻燈片 - 中秋禮盒 */}
                                    <div className="carousel-item">
                                        <div className="d-flex justify-content-center">
                                            <img src={midautumnfestivalBanner}
                                                 alt="midautumnfestivalBanner.jpg"
                                                 className='d-none d-lg-block' />
                                            <img src={midautumnfestivalBannerMd}
                                                 alt="midautumnfestivalBannerMd.jpg"
                                                 className='d-lg-none' />
                                            <div className="mid-content">
                                                <div className="mid-text mb-4">
                                                    <p className="fs-lg-5 fs-6 text-neutral-0 fw-bold lh-24 nowrap mb-2">
                                                    Just Enjoy The Mid-Autumn Festival!
                                                    </p>
                                                    <h2 className="fs-lg-8 fs-3 text-neutral-0 fw-black lh-768 nowrap mb-2">
                                                    月圓人團圓．給你一盒甜
                                                    </h2>
                                                    <p className="fs-lg-3 fs-6 text-neutral-0 fw-bold lh-336 nowrap">
                                                    中秋禮盒．限量發售
                                                    </p>
                                                </div>
                                                <button className="hero-button">點我訂購</button>
                                            </div>
                                        </div>
                                    </div>

                                  {/* 第三張幻燈片 - 折扣優惠 */}
                                    <div className="carousel-item">
                                        <div className="d-flex justify-content-center">
                                            <img src={discountsBanner}
                                                 alt="discountsBanner.jpg" 
                                                 className='d-none d-lg-block'/>
                                            <img src={discountsBannerMd}
                                                 alt="discountsBannerMd.jpg" 
                                                 className='d-lg-none'/>
                                            <div className="discounts-content">
                                                <div className="discounts-text mb-4">
                                                    <h2 className="fs-lg-8 fs-3 text-neutral-0 fw-black lh-768 nowrap mb-3">
                                                    主廚回饋．折扣優惠
                                                    </h2>
                                                    <div className="discounts-box d-flex flex-column justify-content-center align-items-center">
                                                        <p className="fs-lg-3 fs-5 text-neutral-0 fw-bold lh-336 nowrap mb-1">
                                                        滿 NT$2000．享免運費
                                                        </p>
                                                        <p className="fs-lg-3 fs-5 text-neutral-0 fw-bold lh-336 nowrap mb-1">
                                                            滿 NT$3000．享９２折
                                                        </p>
                                                        <p className="fs-lg-3 fs-5 text-neutral-0 fw-bold lh-336 nowrap">
                                                            滿 NT$5000．享８８折
                                                        </p>
                                                    </div>
                                                </div>
                                                <button className="hero-button">點我訂購</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            {/* 自定義指示器 */}
                                <div className="carousel-indicators">
                                    <button type="button"
                                            data-bs-target="#heroCarousel"
                                            data-bs-slide-to="0"
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1">
                                    </button>
                                    <button type="button"
                                            data-bs-target="#heroCarousel"
                                            data-bs-slide-to="1"
                                            aria-label="Slide 2">
                                    </button>
                                    <button type="button"
                                            data-bs-target="#heroCarousel"
                                            data-bs-slide-to="2"
                                            aria-label="Slide 3">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="vector1-img"
                     src={vector1}
                     alt="裝飾向量圖案1" />
            </section>
        {/* 品牌故事區塊 */}
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
                    <img className="cake-img" src={cake} alt="杯子蛋糕" />
                    <img className="cake2-img" src={cake2} alt="切片蛋糕" />
                    <img className="cake3-img" src={cake3} alt="法國麵包" />
                    <img className="vector11-img"
                         src={vector1}
                         alt="裝飾向量圖案1" />
                    <img className="vector2-img"
                         src={vector2}
                         alt="裝飾向量圖案2" />
                    <img className="vector3-img"
                         src={vector3}
                         alt="裝飾向量圖案3" />
                    <img className="rectangle303-img"
                         src={rectangle303}
                         alt="背景波浪圖案"/>
            </section>
        {/* 熱銷排行 */}
            <section className="bg-secondary-50">
                <div className="index-container">
                    <div className="text-center pb-6 pt-8 py-lg-8">
                        <h1 className="fs-3 fs-lg-1">熱銷排行</h1>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-6">
                        <div className="col mb-2 mb-lg-8">
                            <div className="card card-shadow rounded-xl h-100 overflow-hidden">
                                <span className="badge rank-badge fs-6">第一名</span>
                                <div className="overflow-hidden">
                                    <img src={canele}
                                         className="card-img-top dessert-card"
                                         alt="經典原味可麗露" />
                                </div>
                                <div className="card-body p-4">
                                    <h4 className="pb-2 text-primary-800">經典原味可麗露</h4>
                                    <p className="fs-6 text-primary-600 pb-4">
                                        外酥內嫩焦糖香，法式經典一口入魂
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="h4 text-primary-700">NT$ 180</p>
                                        <button type="button"
                                                className="btn btn-outline-secondary rounded-pill btn-card-shopping-cart">
                                            <span className="material-symbols-outlined fill">
                                                shopping_cart
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-2 mb-lg-8">
                            <div className="card card-shadow rounded-xl h-100 overflow-hidden">
                                <span className="badge rank-badge fs-6">第二名</span>
                                <div className="overflow-hidden">
                                    <img src={lemonMadeleine}
                                        className="card-img-top dessert-card"
                                        alt="糖漬檸檬瑪德蓮"/>
                                </div>
                                <div className="card-body p-4">
                                    <h4 className="pb-2 text-primary-800">糖漬檸檬瑪德蓮</h4>
                                    <p className="fs-6 text-primary-600 pb-4">
                                        清香檸檬糖漬點綴，鬆軟口感酸甜平衡剛剛好
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="h4 text-primary-700">NT$ 150</p>
                                        <button type="button"
                                                className="btn btn-outline-secondary rounded-pill btn-card-shopping-cart">
                                            <span className="material-symbols-outlined fill">   
                                                shopping_cart 
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-6 mb-lg-8">
                            <div className="card card-shadow rounded-xl h-100 overflow-hidden">
                                <span className="badge rank-badge fs-6">第三名</span>
                                <div className="overflow-hidden">
                                    <img src={basque}
                                         className="card-img-top dessert-card"
                                         alt="超濃厚巴斯克" />
                                </div>
                                <div className="card-body p-4">
                                    <h4 className="pb-2 text-primary-800">超濃厚巴斯克</h4>
                                    <p className="fs-6 text-primary-600 pb-4">
                                        香氣濃烈滑順綿密，入口即化的極致濃厚感
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="h4 text-primary-700">NT$ 240</p>
                                        <button type="button"
                                                className="btn btn-outline-secondary rounded-pill btn-card-shopping-cart">
                                            <span className="material-symbols-outlined fill"> 
                                                shopping_cart 
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center pb-8">
                        <a href="product.html" className="btn btn-light fs-6">更多商品</a>
                    </div>
                </div>
            </section>
        {/* 可麗露寄甜計畫 */}
            <section className="sub-section-bg">
                <img className="d-none d-lg-block"
                     src={rectangle304}
                     alt="背景波浪圖" />
                <div className="container position-relative">
                    <div className="row my-8 my-lg-0">
                    {/* 左側 可麗露擺盤圖 */}
                        <div className="col-12 col-lg-7 position-relative z-3">
                            <div className="py-lg-12 mb-8 mb-lg-0">
                                <img src={caneleSub} alt="可麗露圖" />
                            </div>
                        </div>
                    {/* 右側 不規則背景+文案 */}
                      {/* 手機版 */}
                        <div className="d-lg-none">
                            <div className="col-12">
                                <div className="text-center shape-bg mb-12">
                                    <img className="mb-6"
                                         src={caneleVector}
                                         alt="可麗露" />
                                    <h2 className="fs-1 text-primary-800 mb-6">可麗露・寄甜計劃</h2>
                                    <h3 className="fs-5 text-primary-700 mb-6">
                                        品嚐一顆可麗露，體現職人精神
                                        <br />
                                        將這份職人甜點，寄給未來的你
                                    </h3>
                                    <a href="#" className="btn btn-primary">點我了解寄甜計劃</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 桌機版 */}
                    <div className="d-none d-lg-block">
                        <div className="col-lg-7 pt-lg-12 position-absolute top-0 end-0 z-1">
                            <img src={vector4} alt="裝飾向量圖案4" />
                            <div className="position-absolute top-50 start-50 translate-middle z-2">
                                <div className="py-12 text-center">
                                    <img className="mb-6"
                                         src={caneleVector}
                                         alt="可麗露" />
                                    <h2 className="fs-3 text-primary-800 mb-6">可麗露・寄甜計劃</h2>
                                    <h3 className="fs-5 text-primary-700 mb-6">
                                        品嚐一顆可麗露，體現職人精神
                                        <br />
                                        將這份職人甜點，寄給未來的你
                                    </h3>
                                    <a href="#" className="btn btn-primary">點我了解寄甜計劃</a>
                            {/* 寄甜計劃modal */}
                                    <div className="modal fade" 
                                         id="prePaidPlan" 
                                         data-bs-backdrop="static" 
                                         data-bs-keyboard="false" 
                                         tabIndex="-1" 
                                         aria-labelledby="prePaidPlanLabel" 
                                         aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header border-bottom-0">
                                                    <button type="button" 
                                                            className="btn-close" 
                                                            data-bs-dismiss="modal" 
                                                            aria-label="Close">
                                                    </button>
                                                </div>
                                                <div className="modal-body row justify-content-center align-items-center mb-7">
                                                    <div className="col-3">
                                                        <img src={canele2} alt="canele2" />
                                                    </div>
                                                    <div className="col-7">
                                                        <h6 className="fs-lg-5 mb-1">恭喜您註冊成功！</h6>
                                                        <p className="fs-7 fs-lg-6 mb-2">首購折扣優惠卷已匯入您的帳戶</p>
                                                        <a className="d-block btn btn-confirm btn-primary-300 text-white w-75 mb-2 me-auto pointer" href='#'>立即登入</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                    <a href="#" 
                                       className="btn btn-primary mb-6 mb-lg-0">點我手刀加入會員
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="pb-8 pb-lg-12 text-center text-lg-start">
                                    <img className="img-excess"
                                         src={joinUs}
                                         alt="加入會員插圖" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;