import caneleBanner from '../assets/images/caneleBanner.jpg';
import caneleBannerMd from '../assets/images/caneleBannerMd.jpg';
import midautumnfestivalBanner from '../assets/images/midautumnfestivalBanner.jpg';
import midautumnfestivalBannerMd from '../assets/images/midautumnfestivalBannerMd.jpg';
import discountsBanner from '../assets/images/discountsBanner.jpg';
import discountsBannerMd from '../assets/images/discountsBannerMd.jpg';
import vector1 from '../assets/images/vector1.png';
import vector2 from '../assets/images/vector2.png';
import vector3 from '../assets/images/vector3.png';
import rectangle303 from '../assets/images/rectangle303.png';
import cake from '../assets/images/cake.png';
import cake2 from '../assets/images/cake2.png';
import cake3 from '../assets/images/cake3.png';

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
            <section class="story-container">
                <div class="story-content text-primary-800">
                    <h3 class="fs-lg-1 fs-3 mb-6 fw-bold lh-48 story-title">品牌故事</h3>
                    <p class="fw-normal lh-24 mb-4">
                        2020年，從日本結束兩年的甜點研習後回到台灣，心中始終懷抱著一個小小夢想 —— 擁有一家屬於自己的甜點店。於是，ONON CAKE 二溫菓子 誕生了。
                    </p>
                    <p class="fw-normal lh-24 mb-2">2022｜二溫菓子 品牌創立</p>
                    <p class="fw-normal lh-24 mb-2">2023｜中壢中原分店 開幕</p>
                    <p class="fw-normal lh-24 mb-4">2024｜桃園藝文分店 開幕</p>
                    <p class="fw-normal">在平淡的生活中，用甜點找回你的心跳</p>
                </div>
                    <img class="cake-img" src={cake} alt="杯子蛋糕" />
                    <img class="cake2-img" src={cake2} alt="切片蛋糕" />
                    <img class="cake3-img" src={cake3} alt="法國麵包" />
                    <img class="vector11-img"
                         src={vector1}
                         alt="裝飾向量圖案1" />
                    <img class="vector2-img"
                         src={vector2}
                         alt="裝飾向量圖案2" />
                    <img class="vector3-img"
                         src={vector3}
                         alt="裝飾向量圖案3" />
                    <img class="rectangle303-img"
                         src={rectangle303}
                         alt="背景波浪圖案"/>
            </section>





        </>
    )
}

export default Home;