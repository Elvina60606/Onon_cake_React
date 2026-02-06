import images from '@/assets/images/images.js';
import Footer from '@/Component/Footer';
import HotSellingProducts from '@/Component/HotSellingProducts';
import ImagesChange from '@/Component/ImagesChange';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';dev/elvina

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;



const Product =() => {
    const paramas = useParams();
    const { id } = paramas;

    const [ product, setProduct ] = useState({});
    const [ showImages, setShowImages ] = useState([]);

    useEffect(() => {
        (async() => {
            try {
                const response = await axios.get(`${VITE_API_BASE}api/${VITE_API_PATH}/product/${id}`);
                const productData = response.data.product;
                const newProductData = {
                    ...productData,
                    imagesUrl: productData.imagesUrl?.slice(0, 3) || [],
                }
                setProduct(newProductData);
                setShowImages([
                    productData.imageUrl,
                    ...productData.imagesUrl?.slice(0, 3) || []
                ])
                } catch (error) {
                console.log("setProduct:", error);
            }
        })();
    },[id]);

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
                            <ImagesChange setShowImages={setShowImages}
                                          showImages={showImages}/>

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
              <HotSellingProducts />

            <Footer />
        </>
    )
}

export default Product;