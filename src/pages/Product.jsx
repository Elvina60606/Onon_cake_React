import images from '@/assets/images/images.js';
import Footer from '@/Component/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Home from './Home/Home';

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;


const Product =() => {
    const paramas = useParams();
    const { id } = paramas;

    const [ product, setProduct ] = useState({});

    useEffect(() => {
        (async() => {
            try {
                const response = await axios.get(`${VITE_API_BASE}api/${VITE_API_PATH}/product/${id}`)
                console.log(response.data.product)
                setProduct(response.data.product)
            } catch (error) {
                console.log("setProduct:", error)
            }
        })()

    },[])

    return(
        <>
          {/* 商品區塊 */}
             <section className="container pt-8 pb-5">
              {/* 麵包屑 */}
                        <nav className="my-breadcrumb"
                            aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/'>首頁</Link></li>
                                <li className="breadcrumb-item"><Link to='/products'>商品介紹</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {product.title}
                                </li>
                            </ol>
                        </nav>
                        <div className="row">
                        {/* 縮圖（桌機：左直排，手機：下方橫排） */}
                            <div className="col-12 col-lg-1 order-2 order-lg-1">
                                <div className="row flex-lg-column align-items-center justify-content-between mb-6 pe-lg-1">
                                    {product.imagesUrl?.map((image, index) => {
                                        return (
                                            <div className="col-4 col-lg-10 g-lg-0 g-6 pb-lg-6" 
                                                 key={index}>
                                                    <div className='ratio ratio-1x1'>
                                                        <img src={image}
                                                            alt=''
                                                            className="w-100 h-100 object-fit-cover border-4 border-secondary-500 rounded-3"/>
                                                    </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        { /* 主圖 */}
                            <div className="col-12 col-lg-4 order-1 order-lg-2 pe-lg-6">
                                <img id="mainImage"
                                    src={product.imageUrl}
                                    alt="商品主圖"
                                    className="img-fluid rounded w-100 rounded-4"/>
                            </div>

                        { /* 商品資訊 */}
                            <div className="col-12 col-lg-7 order-3 ps-lg-8">

                            { /* 標題 + 愛心 */}
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h3 className="fw-bold mb-0 text-primary-800 fs-lg-2">{product.title}</h3>
                                    <button id="heartBtn" className="btn p-0 border-0 bg-transparent">
                                        <i id="heartIcon" className="bi bi-heart fs-4"></i>
                                    </button>
                                </div>

                            { /* 商品描述 */ }
                                <p className="text-primary-700 mb-4 mb-lg-6">{product.description}</p>

                            { /* 價格 */ }
                                <div className="d-flex align-items-baseline">
                                    <span className="fs-3 text-secondary-500 fw-bold me-6 mb-4 mb-lg-6">NT$ {product.price}</span>
                                    <span className="text-decoration-line-through text-gray-700 fs-7">原價 NT$ {product.origin_price}</span>
                                </div>

                            { /* 提示標籤 */}
                                <div className="mb-5 mb-lg-0">
                                    <span className="badge text-bg-secondary-50 text-secondary-500 p-2 fs-6 rounded-1 fw-500 border border-1 border-secondary-500">此商品為冷凍寄出</span>
                                </div>
                                <hr className="d-none d-lg-block my-lg-6" />

                            { /* 桌機版 (一直顯示) */}
                                <div className="cart-actions d-none d-lg-flex align-items-center w-100">
                                {/* 數量選擇器 */}
                                    <div className="quantity-control d-flex align-items-center w-50">
                                        <button className="qty-btn btn btn-outline-secondary">-</button>
                                            <input type="text"
                                                    className="form-control text-center mx-2"
                                                    value="1"
                                                    readOnly
                                                    style={{width: 60}}/>
                                        <button className="qty-btn btn btn-outline-secondary">+</button>
                                    </div>

                                { /* 加入購物車 */}
                                    <button className="btn btn-primary w-50">加入購物車</button>
                                </div>

                            { /* (底部固定) */}
                                <div className="cart-actions-mobile d-lg-none fixed-bottom px-3 py-4 bg-white shadow">
                                { /* 初始狀態：只有加入購物車 */ }
                                    <button id="mobileAddCart" 
                                            className="btn btn-primary w-100">加入購物車
                                    </button>

                                { /* 點擊後：顯示數量 + 確認購物車 (預設隱藏) */}
                                    <div id="mobileCartControls"
                                        className="d-none bg-white py-1 px-2 rounded">
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                        { /* 左邊：數量文字 */ }
                                            <span className="me-6">數量：</span>

                                        { /* 中間：數量控制框 */ }
                                            <div className="quantity-control d-flex align-items-center">
                                                <button className="qty-btn btn btn-outline-secondary">-</button>
                                                <input type="text"
                                                    className="form-control text-center mx-2"
                                                    defaultValue="1"
                                                    style={{width: 60}}/>
                                                <button className="qty-btn btn btn-outline-secondary">+</button>
                                            </div>

                                        { /* 右邊：關閉按鈕 */ }
                                            <button id="closeCartControls"
                                                    type="button"
                                                    className="btn-close ms-8"
                                                    aria-label="Close">
                                            </button>
                                        </div>

                                        { /* 確認按鈕 */}
                                        <button className="btn btn-primary w-100">確認</button>
                                    </div>
                                </div>
                            </div>
                        </div>

             </section>

          { /* 商品規格區 */}
              <section className="tabs-container py-lg-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tabs-inner-wrapper">
                                    <nav className="nav nav-tabs tabs-nav-top nowrap gap-2 mb-lg-6"
                                        id="myTab"
                                        role="tablist">
                                        <button className="tabs-nav-link active fs-lg-4 text-primary-800 fw-bold lh-288 p-lg-6"
                                                id="product-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#product-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="product-tab-pane"
                                                aria-selected="true">商品規格
                                        </button>
                                        <button className="tabs-nav-link fs-lg-4 text-primary-800 fw-bold lh-288 p-lg-6"
                                                id="notes-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#notes-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="notes-tab-pane"
                                                aria-selected="false">注意事項
                                        </button>
                                        <button className="tabs-nav-link fs-lg-4 text-primary-800 fw-bold lh-288 p-lg-6"
                                                id="delivery-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#delivery-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="delivery-tab-pane"
                                                aria-selected="false">宅配寄送
                                        </button>
                                    </nav>
                                    <div className="tab-content tabs-content-bottom" id="myTabContent">
                                        <div className="tab-pane fade show active"
                                            id="product-tab-pane"
                                            role="tabpanel"
                                            aria-labelledby="product-tab"
                                            tabIndex="0">
                                            <h4 className="h4-with-icon nav-link d-flex align-items-center fs-lg-4 text-neutral-800 fw-bold lh-288 mb-4">
                                                <span className="material-symbols-outlined icon-filled fs-lg-4 text-primary-300 me-2">sms
                                                </span>
                                            商品規格
                                        </h4>
                                        <div className="fs-lg-6 lh-24 text-neutral-800">
                                            <p>【規格】6入/盒</p>
                                            <p className="mb-4">【保存方式與最佳賞味期限】冷凍21天</p>
                                            <p>因台灣氣候悶熱，收貨後請一樣冷凍保存，以維持商品品質。</p>
                                            <p>本產品堅持不添加防腐劑，開封後請儘速食用完畢。</p>
                                            <p>強烈建議：「肚子裡」絕對是最好的保存位置。</p>
                                        </div>
                                        </div>
                                        <div className="tab-pane fade"
                                             id="notes-tab-pane"
                                             role="tabpanel"
                                             aria-labelledby="notes-tab"
                                             tabIndex="0">
                                        <h4 className="h4-with-icon nav-link d-flex align-items-center fs-lg-4 text-neutral-800 fw-bold lh-288 mb-4">
                                            <span className="material-symbols-outlined icon-filled fs-lg-4 text-primary-300 me-2">info
                                            </span>注意事項
                                        </h4>
                                        <ul className="fs-lg-6 lh-24 text-neutral-800 product-detail-list">
                                            <li>本產品含有牛奶、蛋、麩質的穀類，不適合其過敏體質者食用。</li>
                                            <li>訂單完成付款後，接單按訂單順序安排製作出貨。</li>
                                            <li>若有希望到貨日期，請先私訊確認。</li>
                                            <li>本店無提供外島配送之服務。</li>
                                        </ul>
                                        </div>
                                        <div className="tab-pane fade"
                                             id="delivery-tab-pane"
                                             role="tabpanel"
                                             aria-labelledby="delivery-tab"
                                             tabIndex="0">
                                            <div className="h4-with-icon nav-link d-flex align-items-center fs-lg-4 text-neutral-800 fw-bold lh-288 mb-4">
                                                <span className="material-symbols-outlined icon-filled fs-lg-4 text-primary-300 me-2">delivery_truck_speed
                                                </span>
                                                宅配寄送
                                            </div>
                                            <ul className="fs-lg-6 lh-24 text-neutral-800 product-detail-list">
                                                <li>此商品為冷凍寄出。</li>
                                                <li>為保證品質，此商品皆以「冷凍」宅配寄出。</li>
                                                <li>部分商品可存放於不同溫層，較低溫層宅配寄出。</li>
                                                <li>如遇商品溫層互不相容，請分開下單，運費無法合計。</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <img className="rectangle303-svg"
                             src={images.Rectangle303}
                             alt="背景波浪圖案"/>
              </section>

          { /* 熱銷排行 */}
              <section className="bg-secondary-50">
                <div className="index-container">
                    <div className="text-center pb-6 pt-8 py-lg-8">
                        <h1 className="fs-3 fs-lg-1">熱銷排行</h1>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-6">
                        <div className="col mb-2 mb-lg-12">
                            <div className="card card-shadow rounded-xl h-100 overflow-hidden">
                                    <span className="badge rank-badge fs-6">第一名</span>
                                <div className="overflow-hidden">
                                    <img src={images.canele}
                                        className="card-img-top dessert-card"
                                        alt="經典原味可麗露"/>
                                </div>
                                <div className="card-body p-4">
                                    <h4 className="pb-2 text-primary-800">經典原味可麗露</h4>
                                    <p className="fs-6 text-primary-600 pb-4">外酥內嫩焦糖香，法式經典一口入魂</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="h4 text-primary-700">NT$ 180</p>
                                        <button type="button"
                                                className="btn btn-outline-secondary rounded-pill btn-card-shopping-cart">
                                            <span className="material-symbols-outlined fill">shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-2 mb-lg-12">
                            <div className="card card-shadow rounded-xl h-100 overflow-hidden">
                                <span className="badge rank-badge fs-6">第二名</span>
                                <div className="overflow-hidden">
                                    <img src={images.lemonMadeleine}
                                    className="card-img-top dessert-card"
                                    alt="糖漬檸檬瑪德蓮"/>
                                </div>
                                <div className="card-body p-4">
                                    <h4 className="pb-2 text-primary-800">糖漬檸檬瑪德蓮</h4>
                                    <p className="fs-6 text-primary-600 pb-4">清香檸檬糖漬點綴，鬆軟口感酸甜平衡剛剛好</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="h4 text-primary-700">NT$ 150</p>
                                        <button type="button"
                                                className="btn btn-outline-secondary rounded-pill btn-card-shopping-cart">
                                            <span className="material-symbols-outlined fill"> shopping_cart </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-6 mb-lg-12">
                            <div className="card card-shadow rounded-xl h-100 overflow-hidden">
                                <span className="badge rank-badge fs-6">第三名</span>
                                <div className="overflow-hidden">
                                    <img src={images.basque}
                                        className="card-img-top dessert-card"
                                        alt="超濃厚巴斯克"/>
                                </div>
                                <div className="card-body p-4">
                                    <h4 className="pb-2 text-primary-800">超濃厚巴斯克</h4>
                                    <p className="fs-6 text-primary-600 pb-4">香氣濃烈滑順綿密，入口即化的極致濃厚感</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="h4 text-primary-700">NT$ 240</p>
                                        <button type="button"
                                                className="btn btn-outline-secondary rounded-pill btn-card-shopping-cart">
                                            <span className="material-symbols-outlined fill"> shopping_cart </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center pb-8 d-lg-none">
                        <a href="#" 
                           className="btn btn-light fs-6">更多商品
                        </a>
                    </div>
                </div>
              </section>

            <Footer />
        </>
    )
}

export default Product;